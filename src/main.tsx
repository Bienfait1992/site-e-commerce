import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './App.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);




import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { Layout } from './component/layout'
// import Home from './component/home.tsx'
import { Card } from './component/card.tsx'
import Home from './component/home.tsx'
import { ListCard } from './component/listCard.tsx'
import { DetailCard } from './component/detailCard.tsx'
import { SignIn } from './component/signin.tsx'
import { SignUp } from './component/signup.tsx';   




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // {
      //   path: "/",
      //   element: <Card/>
      // },
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/home",
        element: <Card/>
      },
      {
        path: "/connexion",
        element: <SignIn/>
        },
       {
        path: "/inscription",
        element: <SignUp/>
      },
      //
      // {
      //   path: "/detailscard",
      //   element: <DetailCard/>
      // },


      {
          path: "/",
          element: <ListCard />,
          children :[
            {
              path: "/card",
              element: <Card/>
            },
            {
              path: "/ListCard/:id", 
              element: <DetailCard /> 
            },
            
          ] 
        },
 
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)












// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
