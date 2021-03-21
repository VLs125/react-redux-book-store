import React from 'react';
import { Route, Switch } from 'react-router';
import Header from '../header/header';
import CartPage from '../pages/cart-page/cart-page';
import HomePage from '../pages/home-page/home-page';
import './app.css'
const App = () => {
    return (
        <React.Fragment>
            <main role="main" className='container'>
                <Header numItems={5} total={20000}/>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/cart" exact component={CartPage} />
            </Switch>
            </main>
        </React.Fragment>
    )
}


export default App