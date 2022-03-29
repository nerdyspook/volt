import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
    FaSearch,
    FaUser,
    FaHeart,
    FaShoppingCart,
    FaBars,
    FaTimes,
} from "react-icons/fa";
import "./Navbar.scss";

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const showMenu = () => setMenu(!menu);

    const scrollHeader = () => {
        const header = document.querySelector(".header");

        window.scrollY >= 50
            ? header.classList.add("scroll-header")
            : header.classList.remove("scroll-header");
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollHeader);
    }, []);

    return (
        <header className="header" id="header">
            <div className="navbar container">
                <div className="left">
                    <FaBars
                        className="nav__toggle icons"
                        id="nav-toggle"
                        onClick={showMenu}
                    />
                    <Link to="/" className="nav__logo">
                        Volt
                    </Link>
                </div>

                <nav className={menu ? "show-menu open" : "show-menu"}>
                    <ul className="nav_menu">
                        <li>
                            <NavLink to={"/"} className="nav__link">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"} className="nav__link">
                                Products
                            </NavLink>
                        </li>
                        <li>
                            <div className="search_container">
                                <input placeholder="Search here" type="text" />
                                <FaSearch className="search__icon" />
                            </div>
                        </li>
                    </ul>

                    <FaTimes
                        className="nav__close"
                        id="nav-close"
                        onClick={showMenu}
                    />
                </nav>

                <div className="nav_btns">
                    <NavLink to={"/"}>
                        <FaUser className="user icons" />
                    </NavLink>
                    <NavLink to={"/"}>
                        <FaHeart className="heart icons" />
                    </NavLink>
                    <NavLink to={"/"}>
                        <FaShoppingCart className="nav_cart icons" />
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
