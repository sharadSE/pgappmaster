import React from 'react'
import '../Pages/Home.css'
import '../App.css'
import {NavLink} from 'react-router-dom'
import logo from './logo.jpg'
export default function Header (props) {
    return(
        <>
            <header class="header-banner">
            <NavLink to='/'>
            {/* <div class="logo-container"> */}
                <img src={logo} width="60%" alt="Logo" />
            {/* </div> */}
            </NavLink>
            <nav class="menu">
                <NavLink to='/loginuser'> <div class="menu-item">Login/SignUp</div></NavLink>
                <NavLink to='/Summary'><div class="menu-item">Cart Items</div></NavLink>             
                <NavLink to='/pgdetails'> <div class="menu-item">About Us</div></NavLink>
            </nav>
            </header>
            
        </>
    )
}