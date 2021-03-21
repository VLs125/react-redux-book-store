import React from 'react';
import { Route, Switch } from 'react-router';
import CartPage from '../pages/cart-page/cart-page';
import HomePage from '../pages/home-page/home-page';
const App = () => {


    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/cart" exact component={CartPage} />
            </Switch>
        </React.Fragment>
    )
}


export default App