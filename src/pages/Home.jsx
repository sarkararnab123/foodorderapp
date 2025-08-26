import React, { useContext, useState } from 'react'
import Nav from '../Components/Nav'
import Cathegories from '../Category'
import Cards from '../Components/Cards'
import { food_items } from '../food'
import { dataContext } from '../Context/UserContext'

const Home = () => {
    let {Cate,setCate,input}=useContext(dataContext)
 

  function filter(category){
    if(category==='All'){
      setCate(food_items)
    }
    else{
       let newList =food_items.filter((item)=>(
          item.food_category===category
       ))
       setCate(newList)
    }
  }

  return (
    <div className='bg-slate-200 w-full min-h-[100vh]'>
    <Nav></Nav>
    {!input?<div className='flex flex-wrap justify-center items-center
    gap-5 w-[100%]'>
           {Cathegories.map((item)=>(
        <div key={item.name} className='w-[140px] h-[150px] bg-white 
            flex-col items-start gap-5 p-5 justify-start text-[20px]
            font-semibold text-gray-600 rounded-2xl shadow-2xl hover:bg-amber-200
             cursor-pointer ' onClick={()=>filter(item.name)}>
          {item.name}
          {item.icon} 
        </div>
      ))}
    </div> : null}

    <div className='w-full flex flex-wrap gap-10 px-5 justify-center
     items-center pt-10 pb-8 mt-5'>
        {Cate.map((item)=>
          <Cards name={item.food_name} image={item.food_image}
            price={item.price} id={item.id} type={item.food_type}></Cards>
        )}
    </div>
    </div>
  )
}

export default Home