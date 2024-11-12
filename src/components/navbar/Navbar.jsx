import React, { useContext } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { GlobalContext } from "../../App";


const Navbar=()=>{

    const {popUp,setPopup} = useContext(GlobalContext)

    const showForm=()=>{
        setPopup(!popUp)
    }


    return(
        <nav className="h-[78px] w-[100%] flex bg-black justify-between">
            <div className="left h-[100%] w-[20%] flex justify-center items-center">
                <img src="https://cdn.shopify.com/s/files/1/0558/6413/1764/files/Rewrite_Netflix_Logo_Design_History_Evolution_0_1024x1024.jpg?v=1695284106" alt="" className="h-[100%] w-[35%]" onClick={showForm} />
            </div>

            <div className="mid h-[100%] w-[50%] ">
                <ul className="h-[100%] w-[100%] flex justify-start items-center gap-5 text-white">
                    <li>Home</li>
                    <li>Series</li>
                    <li>Films</li>
                    <li>News & Popular</li>
                    <li>My List</li>
                </ul>
            </div>
            <div className="right h-[100%] w-[30%] flex justify-end ">
                <ul className="h-[100%] w-[80%] flex justify-end items-center gap-5 text-white">
                    <li><IoSearchSharp /></li>
                    <li>Children</li>
                    <li><FaBell /></li>
                    <li>
                        <img src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-dyrp6bw6adbulg5b.webp" className="h-[50%] w-[10%]" alt="" />
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar