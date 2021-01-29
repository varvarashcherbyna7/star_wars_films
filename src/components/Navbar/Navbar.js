import React from 'react';
import './Navbar.sass';
import Search from "../Search/Search";
import {NavLink} from "react-router-dom";
import logo from '../img/star_wars_logo.png';

const Navbar = (props) => {
    return (
        <nav className='nav'>
            <div className="nav-logo">
                <NavLink to='/star_wars_films/'>
                    <img src={logo} alt="star wars logo"/>
                </NavLink>
            </div>
            <div className="nav-search">
                <Search onHandlerChange={props.onHandlerChange}/>
            </div>
        </nav>
    )
}

export default Navbar;
