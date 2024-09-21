import React, { FunctionComponent } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useState } from "react";


export const Cart: FunctionComponent=()=>{
    const [isOpene, setIsOpene] = useState(false)
    const toggleCart = ()=>{
        setIsOpene(!isOpene)
    }
    return(
        <div>
                <div className="cursor-pointer duration-300" onClick={toggleCart}>
                    <HiShoppingCart size={30} color="orange"/>
                </div>
                <div className="absolute ">

{isOpene? '' : '' }

            
                 <div className={`sidebare ${isOpene ? 'open' : ''} top-0 duration-700 right-[-400px] shadow-2xl text-black  fixed ring-1 ring-black ring-opacity-5`}>
                   
                    <div className="flex ">
                         <div className="bg-[#ffffff] h-[1000px] contenaire mx-auto">
                             <div className="bg-orange-600 text-white text-[20px] font-bold h-12 items-center justify-center text-center flex gap-20">
                                <button onClick={toggleCart} className="mt-2"><IoMdClose size={30}/></button>
                                 <div className="">Votre Panier</div> 
                                 <div> <HiShoppingCart size={30} color="white"/></div>
                            </div>

                          
                            <div className=" p-8 w-[400px]">
                                
                            </div>
                        </div>  
                   
                         {/* <div className="bg-black bg-opacity-70 w-[1200px] text-white " ><button onClick={toggleCart} className="mt-2"><IoMdClose size={30}/></button></div>   */}
                        
                    </div>

                 </div>
        </div>
        </div>
    )
}



