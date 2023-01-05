import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'

import "./style.scss"


import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Outlet,
} from "react-router-dom"

import { Product } from  './pages/product/Product'

import { Footer } from './components/footer/Footer'
import Products from './pages/products/Products'
import ProductsNew from './pages/productsNew/ProductsNew'
import Sale from './pages/sale/Sale'
import { Faq } from './faq/Faq'
import SubCat from './pages/subcat/SubCat'
import { PaymentConfirm } from './components/paymentConfirm/PaymentConfirm'


const  App = ()=> {
 
    const Layout = () => {       
        return(          
            
            <div className="theme-light">   
                <Navbar />
                <Outlet />
                <Footer /> 
            </div>            
        )
    }

    const router = createBrowserRouter([
        {
            path:"/",
            element: (
               <Layout />
            ),
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/products/:id",
                    element: <Products />
                },   
                {
                    path: "/product/:id",
                    element: <Product />
                },
                {
                    path: "/subcat/:id",
                    element: <SubCat />
                },
                {
                    path: "/productsnew",
                    element: <ProductsNew />
                },
                {
                    path: "/sale",
                    element: <Sale />
                },
                {
                    path: "/faq",
                    element: <Faq />
                },
                {
                    path: "/payment/1",
                    element: <PaymentConfirm />
                },
            ]
        }
    ])

    return (  
        <div>
              <RouterProvider router={router} />

        </div>    
       )
}  

export default App