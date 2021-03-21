import React, { useEffect } from 'react';
import BookListItem from '../book-list-item/book-list-item';
import './book-list'
import { connect } from 'react-redux';
import withBookstoreService from '../hoc/with-bookstore-service'
import {booksLoaded} from '../../actions'
import compose from '../../utils'
import './book-list.css'
const BookList = (props) => {
    
    useEffect(() => {
        const {bookstoreService,booksLoaded} = props
        bookstoreService.getBooks()
        .then((data)=>{
            booksLoaded(data);
        })

    }, [])

    const {books} = props
    return (
        <ul className="book-list">
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
const mapDispatchToProps = {
    booksLoaded
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList)