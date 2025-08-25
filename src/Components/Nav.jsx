import React, { use, useContext, useEffect } from 'react'
import { IoFastFoodSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { dataContext } from '../Context/UserContext';
import { food_items } from '../food';

const Nav = () => {

  let {input,setInput,Cate,setCate}=useContext(dataContext)
  useEffect(()=>{
    let newlist = food_items.filter((item)=>item.food_name.includes(input)||
    item.food_name.toLowerCase().includes(input))
    setCate(newlist)
  },[input])


  return (
    <div className='w-full h-[100px] flex justify-between
    items-center px-6 md:px-8'>
    <div className='w-[60px] h-[60px] bg - bg-white flex justify-center
    items-center rounded-2xl shadow-2xl'>
    <IoFastFoodSharp  className='w-[30px] h-[30px] text-yellow-500'/>
    </div>
    <form action='' className='w-[45%] h-[60px] bg-amber-50 flex items-center
    px-5 gap-6 shadow-md rounded-2xl md:w-[70%]'>
    <FaSearch className='text-yellow-500 w-[20px] h-[20px]' 
      onSubmit={(e)=>e.preventDefault()}
    />
    <input type='text' placeholder='Search Items...' className='bg-white
    w-[100%] outline-none text-[16px] md:text-[20px]'
     onChange={(e)=>setInput(e.target.value)}  value={input}></input>
    </form>
     <div className='w-[60px] h-[60px] bg - bg-white flex justify-center
    items-center rounded-2xl shadow-2xl relative'>
    <span className='absolute top-0 right-2 text-yellow-500 font-bold text-[18px]'>0</span>
    <FaShoppingBag className='w-[30px] h-[30px] text-yellow-500' />
    </div>


    </div>
  )
}

export default Nav