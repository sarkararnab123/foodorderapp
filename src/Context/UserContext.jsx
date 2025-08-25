import React, { createContext, useState } from 'react'
import { food_items } from '../food'

export const dataContext=createContext()

const UserContext = ({children}) => {

    let [input,setInput]=useState('')
     const [Cate,setCate]=useState(food_items)
let data={
    input,
    setInput,
    Cate,
    setCate
}

  return (
    <div>
        <dataContext.Provider value={data}>
        {children}
        </dataContext.Provider>
    </div>
  )
}

export default UserContext