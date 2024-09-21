import React, { FunctionComponent } from "react"
import { useParams } from "react-router-dom"
import { DataImages } from "../data/data";
// import { Outlet } from "react-router-dom"



export const DetailCard: FunctionComponent= ()=>{
    const {id} = useParams();
    const data= DataImages;
    const card = data.find((e)=> e.id===parseInt(id));
    return(
        <div>
            <img src={card.avatar1} alt="" />
           
{/* <span>{count === 1 ? (
    <p>Attention, pas possible.</p>
) : (
    // <p>vous pouvez y aller</p>
    ("")

)}</span>





 {/* <p><small>{formatDate(date)}</small></p> */}
                         {/* <p><small>{date.toString()}</small></p>  */}
                        
                        {/* <span> */}
                            {/* <button className="boutonPlus" onClick={handleCklick} style={{borderColor:borderColor}}>+  </button> */}
                        {/* </span> */}
                        {/* <span> */}
                            {/* <input type="text" value={count} /> */}
                        {/* </span> */}

                        {/* <span> */}
                            {/* <button className="boutonPlus" onClick={handleCklickd} disabled={count === 1}>-</button> */}
                        {/* </span>  */}

        </div>
    )
}





