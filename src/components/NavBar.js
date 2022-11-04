import React from 'react'
import { Outlet, NavLink } from "react-router-dom";
import './NavBar.css'

function NavBar() {
    return (
        <div className='navbar'>
            <img className='nav__logo' src='/Book Nook-1.png' alt="logo" srcset="" />
            <ul>
                <li><NavLink className='navbar__link' to={'/'}>Home</NavLink></li>
                <li><NavLink className='navbar__link' to={'/explore'}>Explore</NavLink></li>
                <li><NavLink className='navbar__link' to={'/addbook'}>Add Book</NavLink></li>
                <li><NavLink className='navbar__link' to={'/request'}>Request Book</NavLink></li>
                <li><NavLink className='navbar__link' to={'/login'}>Login/Register</NavLink></li>
            </ul>
            <Outlet />
        </div>
    )
}

export default NavBar