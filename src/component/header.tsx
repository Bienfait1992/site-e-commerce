import React, { FunctionComponent } from "react";
import { User } from "./user";
import { Cart } from "./cart";
import { NavLink } from "react-router-dom";
import NavBar from "./navbar";
import { BsSearch } from "react-icons/bs";
// import NavBar from "./navbar";
// import { Link } from "react-router-dom";



const Header: FunctionComponent = () => {
  // e.preventDefault();
    return (
      <div className="sticky z-10 top-0  items-center shadow-xl bg-white">
       
            
                <div className=" contenair  space-x-4 flex   justify-between  w-[90%] m-auto h-16">
                  <img src="https://res.cloudinary.com/dk2apwxms/image/upload/v1721306244/biso243_logo_plvf93.png" alt="" className="" />
                 
                    
                      
                                <div className=" flex  items-center">
                                    <input type="text" placeholder="Recherche"  className=" w-full  focus:outline-none  p-1 w-[500px] ring-1 ring-black ring-opacity-10"/>
                                    <button className=" rounded h-10  p-2  rounded-tl-none rounded-bl-none bg-[#033a83] shadow-2xl"><BsSearch color="orange "/></button>
                                </div>
                            
                                <div className="flex space-x-4 items-center">
                                  {/* <div><NavLink to ="/connexion">Connexion</NavLink></div>  */}
                                  {/* <div><NavLink to="/inscription"><button className=" ">Inscription</button></NavLink> </div> */}
                                  <div><User /> </div>
                                  <div><Cart /></div>
                                </div> 

                     
                </div>
       

         <NavBar />
         <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Our Shop</h2>
        <p className="text-lg mb-8">Discover the best products at unbeatable prices.</p>
        <a href="#products" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold">Shop Now</a>
      </div>
    </section>
        </div>
    )
}
export default Header;