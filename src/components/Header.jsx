import { SearchOutlined, ShoppingBasket } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "../components/styles/Header.scss";

function Header() {
    return (
        <div className="header">
            <nav>
                <ul className="ul-items">
                    <li className="li-items">
                        <Link to="/women">Women</Link>
                        <Link to="/men">Men</Link>
                        <Link to="/shop" className="orange">
                            To Gift Shop
                        </Link>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
                <div className="logo">
                    <h1>Legaboo</h1>
                </div>

                <div className="right">
                    <div className="search">
                        <SearchOutlined className="search-icon" />
                        <button className="sch-btn">Search</button>
                    </div>
                    <div className="right-button">
                        <button>
                            <Link to="/login">Log In</Link>
                        </button>

                        <button>
                            <Link to="/sign-up">Sign up</Link>
                        </button>

                        <ShoppingBasket className="basket" />
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
