import React, { FunctionComponent } from "react";
import { DataImages } from "../data/data";
import { NavLink } from "react-router-dom";



// type Props={
// // elements:DataImages,
// borderColor?: string
// Title?: string

// };

export const Card: FunctionComponent = () => {

    // const name = DataImages.length;
    // const [count, setCount] = useState<number>(1);
    // const [ tableau, setTableau] = useState<tableau[]>([]);

    // const handleCklick = () => {
    //     setCount(count + 1)
    // };
    // const handleCklickd = () => {
    //     setCount(count - 1)

        // if (count === 2) {
            // alert("attention")0

        // }
    
    //     useEffect(()=>{
    // // setTableau(DataImages);
    //     }, []);
    // const [color, setColor]= useState<string>();
    // const OnMouseL = ()=>{
    // setColor(borderColor);
    // }
    // const OnMousegat = ()=>{
    //     setColor('#a52a5a');

// const formatDate = (date: Date): string =>{
// return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
// }
    return (
        <div>

            {/* <h1>il ya  {name} images dans la base de données</h1> */}
            {/* <p>il ya {DataImages.length} images dans la base de données</p> */}
            <div className="images w-[90%] m-auto">
                {DataImages.map(({ avatar1, description, prix, date,id}) => (
                    <div >
                        <div >
{/* // comment faire du props  */}
                            {/* <h1>{Title.Title}</h1> */}

                           <img src={avatar1} alt="" className="image z-depth-4" />
                        </div>
                        
                        <div  >
                        <div>{description}</div>
                        <div><strong>{prix}$</strong></div>


                      
                       
                        <span>
                           <NavLink to={`/ListCard/${id}`}><button className="boutonPlus" >Voir plus</button></NavLink>
                           {/* {`/VetementH/${Element.id}`} */}
                            {/* <a href=""></a> */}
                        </span>
                        </div>
                        

                    </div>
                ))}

            </div>
        </div>
    )
}