import React, { useEffect } from 'react';
import BookListItem from '../book-list-item/book-list-item';
import './book-list'
import { connect } from 'react-redux';
import withBookstoreService from '../hoc/with-bookstore-service'
import {bindActionCreators} from 'redux';
import {booksLoaded} from '../../actions'
const BookList = (props) => {
    
    useEffect(() => {
        const {bookstoreService} = props
        const data = bookstoreService.getBooks();
        props.booksLoaded(data);

    }, [])

    const {books} = props
    return (
        
        <ul>
            {  
                books.map((book) => {
                    return (
                        <li key={book.id}><BookListItem book={book} /></li>
                    )
                })
            }
        </ul>
    )
}

const mapStateToProps = ({ books }) => {
    return { books }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        booksLoaded,
    },dispatch)
}

export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList))