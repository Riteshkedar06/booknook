import React from 'react'
import './ExploreNav.css'
import { Outlet, NavLink } from "react-router-dom";



function ExploreNav() {
    return (
        <div className='nav'>
            <img className='nav__logo' src='/Book Nook-logos_transparent.png' alt="logo" srcset="" />
            <ul>
                <li><NavLink className='nav__link' to={'/'}>Home</NavLink></li>
                <li><NavLink className='nav__link' to={'/explore'}>Explore</NavLink></li>
                <li><NavLink className='nav__link' to={'/addbook'}>Add Book</NavLink></li>
                <li><NavLink className='navbar__link' to={'/request'}>Request Book</NavLink></li>
                <li><NavLink className='nav__link' to={'/login'}>Login/Register</NavLink></li>
            </ul>
            <Outlet />
        </div>
    )
}

export default ExploreNav;