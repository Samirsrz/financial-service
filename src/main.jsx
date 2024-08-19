import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import SignUp from './Registration/SignUp';
import AuthProvider from './components/AuthProvider';
import Root from './Root';
import Login from './Login/Login';
import ViewProducts from './ViewProducts/ViewProducts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [

   {
    path:'/',
    element: <Home></Home>
    
   },
   {
    path:'/signUp',
    element: <SignUp></SignUp>
    
   },
   {
    path: '/login',
    element: <Login></Login>
   },
   
   {
    path: '/view-products',
    element: <ViewProducts></ViewProducts>
   }
   
   



    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <HelmetProvider>
 <QueryClientProvider client={queryClient}>

<AuthProvider>
<RouterProvider router={router} />

</AuthProvider>
</QueryClientProvider>
 </HelmetProvider>

  </React.StrictMode>,
)
