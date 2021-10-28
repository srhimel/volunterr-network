import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../../logo.png';
import './Header.css'

const Header = () => {
    const [clicked, setClicked] = useState(false);
    const toggleMenu = () => {
        clicked === false ? setClicked(true) : setClicked(false);
    }
    const toogleOff = () => {
        setClicked(false)
    }
    return (
        <header>
            <div className="container">
                <nav>
                    <div className="logo"><img src={logo} alt="" /></div>
                    <div className={clicked ? "toggler open" : "toggler"} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={clicked ? "menu active" : "menu"} >
                        <ul onClick={toogleOff}>
                            <li><NavLink exact to="/" activeClassName={"active-header"}>Home</NavLink></li>
                            <li><NavLink to="/account/my-events" activeClassName={"active-header"}>My Events</NavLink></li>
                            <li><Link to="/register"><button className="register" >Register </button></Link></li>
                            <li><Link to="/dashboard"><button className="admin">Admin</button></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;