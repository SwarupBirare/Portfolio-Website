import React from "react";
import { Route,  BrowserRouter as Router, Routes , Link} from 'react-router-dom';
import Homeee from "./Homeee";
import Products from "./Products";
import ContactUs from "./ContactUs";
import Cart from "./Cart";


export default function Routinggg(){
    return(
        <Router>
            <nav className="nav-bg">
                <ul className="list">
                    <li>
                        <Link to='/'>
                             Home
                        </Link>
                    </li>

                    <li>
                        <Link to='/products'>
                             Products 
                        </Link>
                    </li>

                    <li>
                        <Link to='/contact'>
                             ContactUs
                        </Link>
                    </li>
                    
                    <li>
                        <Link to='/cart'>
                            Cart
                        </Link>
                    </li>
                    <h1 id="logo"> Dip </h1>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element = {<Homeee/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/contact" element = {<ContactUs/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
           
        </Router>
    )
}