import React, { useState } from 'react';
import { FaBell, FaGlobeAmericas } from 'react-icons/fa';
import { IoMdListBox } from 'react-icons/io';
import Notification from './notification';
import { Link } from 'react-router-dom';
import { IoNotificationsSharp } from 'react-icons/io5';






function Navbar(params) {

    return (
        <>
    <link href="././bootstrap/css/material-design-iconic-font.min.css" rel="stylesheet" media="all"/>
            <header className="header-areaNav headersticky-nav">
                <div className="container container-nav">
                    <div className="row">
                        <div className="col-12">
                            <nav className="mainnav">
                                {/* <!-- ***** Logo Start ***** --> */}
                                <Link to='/'>
                                    <a href="index.html" className="logo-nav">
                                        <img src="images/min-logo-81x69.png" />
                                    </a></Link>
                                <ul className="nav">
                                    <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                                    <li className="submenu">
                                        <a href="javascript:;">Service</a>
                                        <ul>
                                            <li>
                                                <Link to='/Acceuil'>
                                                    <a href="">Global</a>
                                                </Link>
                                            </li>
                                            <li><a href="#">Job</a></li>
                                            <li><a href="#">Food</a></li>
                                            <li><a href="#">Home</a></li>
                                        </ul>
                                    </li>
                                    <li className="scroll-to-section">
                                        <Link to='/Contact_us'>
                                            <a href="#explore">Contact us</a>
                                        </Link>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:;">More-pages</a>
                                        <ul>
                                            <li><a href="single-product.html">Single Product</a></li>
                                            <li>
                                                <a href="about.html">About Us</a>
                                            </li>
                                            <li><a href="products.html">Products</a></li>
                                            <li>
                                                <Link to={'/PostPub'}>
                                                    <a href="about.html">Single Product</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/Contact_us">
                                                    <a href="contact.html">Contact Us</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/Profil">
                                                    <a href="contact.html">Profil</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/CreatePost">
                                                    <a href="contact.html">CreatePost</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/UpdatePost">
                                                    <a href="contact.html">UpdatePost</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/Notify">
                                                    <a href="contact.html">Notify</a>
                                                </Link>
                                            </li>

                                        </ul>
                                    </li>
                                    <li>
                                    
                                        <div className="icons-menu">
                                                <Notification/>
                                            <a className="iconfont-wrapper mr-3" href="" target="_blank">
                                                <IoMdListBox />
                                            </a>
                                            {/* Langues */}
                                                <FaGlobeAmericas color='black' />
                                                <select name="" className="Langue">
                                                    <option value="en"><a href=''>EN</a></option>
                                                    <option value="fra"><a href=''>FRA</a></option>
                                                </select>
                                            

                                        </div>
                                    </li>
                                </ul>

                                <a className='menu-trigger-navbar'>
                                    <span>Menu</span>
                                </a>
                                {/* <!-- ***** Menu End ***** --> */}
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )

}

export default Navbar;