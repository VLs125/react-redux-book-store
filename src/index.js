import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundry from './components/error-boundry/error-boundry';
import BookstoreService from './services/bookstore-services';
import { BookStoreContext } from './components/book-service-context/book-service-context';
import store from './store';

const bookstoreService = new BookstoreService ();


ReactDOM.render(
  <Provider store ={store}>
  <ErrorBoundry>
  <Router>
  <BookStoreContext.Provider value={bookstoreService}>
    <App/>
  </BookStoreContext.Provider>
  </Router>
  </ErrorBoundry>

  </Provider>,
  document.getElementById('root')
);
