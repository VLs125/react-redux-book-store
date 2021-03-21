import React from 'react';
import BookList from '../../book-list/book-list';
import ShoppingCartTable from '../../shopping-cart-table/shopping-cart-table';
import './home-page.css';


const HomePage = () => {
    return (
        <div className='home-class'>
            <BookList />
            <ShoppingCartTable/>
        </div>)
}

export default HomePage