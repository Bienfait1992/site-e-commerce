import React, { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
// import { Card } from "./card";
// import { Card } from "./card";





export const ListCard: FunctionComponent = () => {
    return (
        <div className="listcard">

            
            <Outlet/>
        </div>
    )
}