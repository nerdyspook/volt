import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
    FaSearch,
    FaUser,
    FaHeart,
    FaShoppingCart,
    FaBars,
    FaTimes,
} from "react-icons/fa";
import { useScrollToChangeColor } from "../../hooks/useScrollToChangeColor";
import "./Navbar.scss";

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const showMenu = () => setMenu(!menu);

    const [navItemColor, setNavItemColor] = useState("#f8fafc");
    const location = useLocation();

    useEffect(() => {
        if (window.location.pathname !== "/") {
            setNavItemColor("#2d3748");
        } else {
            setNavItemColor("#cbd5e1");
        }
    }, [location]);

    useScrollToChangeColor();

    return (
        <header className="header" id="header">
            <div className="navbar container">
                <div className="left">
                    <FaBars
                        className="nav__toggle icons"
                        id="nav-toggle"
                        onClick={showMenu}
                        style={{ color: navItemColor }}
                    />
                    <Link
                        to="/"
                        className="nav__logo"
                        style={{ color: navItemColor }}
                    >
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
                            <NavLink to={"/products"} className="nav__link">
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
                        <FaUser
                            className="user icons"
                            style={{ color: navItemColor }}
                        />
                    </NavLink>
                    <NavLink to={"/"}>
                        <FaHeart
                            className="heart icons"
                            style={{ color: navItemColor }}
                        />
                    </NavLink>
                    <NavLink to={"/"}>
                        <FaShoppingCart
                            className="nav_cart icons"
                            style={{ color: navItemColor }}
                        />
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
