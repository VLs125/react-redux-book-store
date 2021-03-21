import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css"

const Header = ({numItems,total})=>{
    return (
    <header className="header row">
        <Link className="logo text-dark" to="/">BookStore</Link>
        <Link to="/cart" className="shopping-cart">
        <i className ="cart-icon fa fa-shopping-cart"></i>
        {numItems} items (<i className="fas fa-ruble-sign"></i>{total})
        </Link>
    </header>
    )

}

export default Header