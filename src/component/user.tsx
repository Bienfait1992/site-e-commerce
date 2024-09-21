import React, { FunctionComponent } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { BsChevronDown } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useState } from "react";









export const User: FunctionComponent = () => {
    const [menu, setMenu]= useState(false)
    const dropdownmenu =  ()=>{
        setMenu(!menu);

    } 
    return (

        <ul className="menu_user">
            <div className="justify-center items-center">
                
                <div className="flex space-x-4 cursor-pointer items-center  rounded-full p-2 ring-1 ring-white ring-opacity-30" onClick={dropdownmenu}>
                        <div className="  relative  text-white " ><FaRegCircleUser size={30} color="black"/></div>
                        <div className=""><BsChevronDown color="" /></div>
                </div>
                <div className="absolute">
                {!menu &&(
                    
                <div className="mt-2"> 
                       
                    <div className="list-none bg-[#ffffff]  shadow-xl px-6 py-4 rounded ring-1 ring-black ring-opacity-5">
                        <li className="mb-2"><NavLink to={"/connexion"}>Connexion</NavLink></li>
                        <li className="mb-2"><NavLink to={"/inscription"}>S'inscrire</NavLink></li>
                        <li ><NavLink to={"/"}>Deconnexion</NavLink></li>
                    </div>
                </div>
                )}
                </div>
               
            </div>
        </ul>

    )
}