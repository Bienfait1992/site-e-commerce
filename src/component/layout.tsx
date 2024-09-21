import React, { FunctionComponent } from "react";
import Header from "./header";
// import Home from "./home";
import Footer from "./footer";
// import { ListCard } from "./listCard";
import NavBar from "./navbar";
// import { LeftSidebar } from "./lefSidebar";
import { Outlet } from "react-router-dom";
// import Home from "./home";
// import Sidebar from "./lefSidebar";

// import { Outlet } from "react-router-dom";



export const Layout: FunctionComponent = () => {
    return (
        <div>

            <Header />
           
            <div className="flex gap-8">
                {/* <div className="ml-2"><LeftSidebar/></div> */}
                <div className="w-full border border-black m-auto"><Outlet/></div>
                {/* <div className="z-10"><Sidebar /></div> */}
                {/* <ListCard /> */}
            </div>
            <Footer />
        </div>
    );
}