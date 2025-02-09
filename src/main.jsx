import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login'
import ProductsCard from './Components/ProductsCard/ProductsCard';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Statistics from './Components/Statistics/Statistics';
import DashboardCard from './Components/DashbordCard/DashboardCard';
import DBWishlist from './Components/DBWishList/DBWishlist';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/categorues.json'),
        children:[
          {
            path:'/',
            element: <ProductsCard></ProductsCard>,
            loader: () => fetch('/allProducts.json')
          },
          {
            path:'/category/:category',
            element: <ProductsCard></ProductsCard>,
            loader: () => fetch('/allProducts.json')
          },
        ]
      },
      {
        path:'/product/:product_id',
        element: <ProductDetail></ProductDetail>,
        loader: () => fetch('/allProducts.json')
      },
      {
        path: "dashboard",
        element:<Dashboard></Dashboard>,
        children:[
          {
            path:'cart',
            element:<DashboardCard></DashboardCard>,
            loader: ()=> fetch('/allProducts.json')
          },
          {
            path:'wishlist',
            element:<DBWishlist></DBWishlist>,
            loader:()=>fetch('/allProducts.json')
          }
        ]
        
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
   <Toaster></Toaster>
  </StrictMode>,
)  