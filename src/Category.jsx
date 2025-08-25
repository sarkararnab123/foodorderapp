import { TiThSmall } from "react-icons/ti";
import { MdFreeBreakfast } from "react-icons/md";
import { MdSoupKitchen } from "react-icons/md";
import { CiBowlNoodles } from "react-icons/ci";
import { MdFoodBank } from "react-icons/md";
import { FaPizzaSlice } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";

const Cathegories=[
    {
        id:1,
        name:'All',
        icon:<TiThSmall  className="w-[60px] h-[60px] text-yellow-500"/>,
    },
        {
        id:2,
        name:'breakfast',
        icon:<MdFreeBreakfast className="w-[60px] h-[60px] text-yellow-500"/>,
    },
        {
        id:3,
        name:'soups',
        icon:<MdSoupKitchen className="w-[60px] h-[60px] text-yellow-500"/>,
    },
        {
        id:4,
        name:'pasta',
        icon:<CiBowlNoodles className="w-[60px] h-[60px] text-yellow-500"/>,
    },
        {
        id:5,
        name:'main_Course',
        icon:<MdFoodBank className="w-[60px] h-[60px] text-yellow-500"/>,
    },
        {
        id:6,
        name:'pizza',
        icon:<FaPizzaSlice className="w-[60px] h-[60px] text-yellow-500"/>,
    },
        {
        id:7,
        name:'burger',
        icon:<FaHamburger className="w-[60px] h-[60px] text-yellow-500"/>,
    }
]

export default Cathegories;