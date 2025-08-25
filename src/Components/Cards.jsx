import React from 'react'
import image1 from "../assets/image1.avif";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";


const Cards = ({name,image,id,price,type}) => {
  return (
    <div className='w-[300px] h-[400px] bg-white p-3
          rounded-lg flex flex-col gap-3 shadow-lg
           hover:border-2 border-yellow-500'>
        <div className='w-[100%], h-[60%] overflow-hidden
         rounded-lg '>
        <img src={image} alt='' className='object-cover'></img>
        </div>

        <div className='text-xl font-semi-bold'>{name}</div>
        <div className='w-full flex justify-between items-center'>
        <div className='text-lg font-semibold text-yellow-600'> &#8377;{price}</div>
        <div  className='flex justify-center items-cente
                gap-2 text-green-600 text-lg font-semibold'>{type=='veg'?<LuLeafyGreen/>:<GiChickenOven className='text-red-600'/>
        }<span>{type}</span></div>
        </div>
        <button className='w-full p-3 bg-yellow-500 rounded-lg
         text-black-700 hover:bg-yellow-300 transition-all'>Add to dish</button>
    </div>
  )
}

export default Cards