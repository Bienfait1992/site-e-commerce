// import React, { FunctionComponent } from "react";
// import { useState } from "react";

// export const LeftSidebar: FunctionComponent = () => {
//     // const [isOpen, setIsOpen] = useState(false);
//     // const toggleSidebar = () =>{
//     //     setIsOpen(!isOpen)
//     // }

//     // }
//     return (
//         <div className="">
//             <div className="bg-[#ffff00] mt-2">Categories</div>
//             <div className="leftsidebar">
//                 <ul className="ml-2">
//                 <li><a href="#">Accueil</a></li>
//                 <li><a href="#">Habit.Home</a></li>
//                 <li><a href="#">Habit. Femme</a></li>
//                 <li><a href="#">Habit.Enfant</a></li>
//             </ul>
//             </div>
            
//             <div className="leftsidebar">
//                 <ul>
//                 <li><a href="#">Accueil</a></li>
//                 <li><a href="#">Habit.Home</a></li>
//                 <li><a href="#">Habit. Femme</a></li>
//                 <li><a href="#">Habit.Enfant</a></li>
//             </ul>
//             </div>
//         </div>
//     )
// }





import React, { FunctionComponent } from "react";
import { useState } from "react";
// import './Sidebar.css';

const Sidebar: FunctionComponent=() => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleSidebar}>
        {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <h2>Sidebar</h2>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
