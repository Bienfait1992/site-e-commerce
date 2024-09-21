import React, { FunctionComponent, useState } from "react";

import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";




const NavBar: FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleSidebar = ()=>{
        setIsOpen(!isOpen)
    }
    return (
        <div className="bg-[#033a83]  ">
            
            <ul className="flex  text-white justify-center items-center h-10 justify-between w-[90%] m-auto">
                {/* <li><a href="listcard">Accueil</a></li>
                <li><a href="#">Habit.Home</a></li>
                <li><a href="#">Habit. Femme</a></li>
                <li><a href="#">Habit.Enfant</a></li>
                <li><a href="#">Vendre sur Biso243</a></li> */}
            <div className="flex cursor-pointer duration-300" onClick={toggleSidebar} >
                    <div className=""><AiOutlineMenu  size={25}/></div>
                    
                    <div>Toutes categories</div>
                    
                
            </div>
            
            <div className="flex space-x-5">
                    <div ><NavLink to={"/"}>Accueil</NavLink></div>
                    <div><NavLink to="">Habit.Home</NavLink></div>
                    <div><NavLink to="">Accueil</NavLink></div>
                    <div><NavLink to="">Accueil</NavLink></div>
                    <div><NavLink to="">Accueil</NavLink></div>
            </div>
            </ul>

            
<div className="absolute " onClick={toggleSidebar}>

{isOpen? '' : '' }

            
                <div className={`sidebar ${isOpen ? 'open' : ''} top-0 duration-700 left-[-1600px] shadow-xl text-black  fixed `}>
                   
                   <div className="flex ">
                        <div className="bg-[#ffffff] h-[1000px] contenaire mx-auto">
                            <div className="bg-[#033a83] text-white text-[20px] font-bold h-12 items-center justify-center text-center flex gap-20">
                                <div className="">Faites votre choix</div> 
                            </div>

                          
                            <div className=" p-8 w-[400px]">
                                <div className="mb-6 ring-1 ring-black ring-opacity-5"><NavLink to="/">Accueil</NavLink></div>
                                <div className="mb-6"><NavLink to="/card">Habit.Home</NavLink></div>
                                <div className="mb-6"><NavLink to="#">Habit. Femme</NavLink></div>
                                <div><NavLink to="#">Habit.Enfant</NavLink></div>
                            </div>
                        </div>  
                   
                        <div className="bg-black bg-opacity-70 w-[1200px] text-white " ><button onClick={toggleSidebar} className="mt-2"><IoMdClose size={30}/></button></div>  
                        
                    
                    </div>

                </div>
                
            
            
           
</div>

        </div>
    )
}
export default NavBar;