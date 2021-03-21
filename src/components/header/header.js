import React from 'react';
import "./header.css"

const Header = ({numItems,total})=>{
    return (
    <header className="header row">
        <a className="logo text-dark" href="#">BookStore</a>
        <a className="shopping-cart">
        <i className ="cart-icon fa fa-shopping-cart"></i>
        {numItems} items (<i className="fas fa-ruble-sign"></i>{total})
        </a>
    </header>
    )

}

export default Header