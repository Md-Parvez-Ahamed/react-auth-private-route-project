import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root';
import Home from './component/Home/Home';
import LogIn from './component/LogIn/LogIn';
import Reg from './component/Reg/Reg';
import AuthProvider from './providers/AuthProvider';
import Order from './component/Order/Order';
import PrivateRoutes from './Routes/PrivateRoutes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element : <Home></Home>,
      },
      {
         path : "/login",
         element:<LogIn></LogIn> 
      },
      {
        path : "/registration",
        element: <Reg></Reg>
      },
      {
        path : "/order",
        element: <PrivateRoutes><Order></Order></PrivateRoutes>
      }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
      <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
