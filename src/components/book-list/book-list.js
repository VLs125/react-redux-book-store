import React, { useEffect } from 'react';
import BookListItem from '../book-list-item/book-list-item';
import './book-list'
import { connect } from 'react-redux';
import withBookstoreService from '../hoc/with-bookstore-service'
import { fetchBooks } from '../../actions'
import compose from '../../utils'
import './book-list.css'
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-inidicator/error-inicator';
const BookList = (props) => {
    const { fetchBooks } = props

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);


    const { books, loading, error } = props
    if (loading) {
        return <Spinner />
    }
    if (error) {
        return <ErrorIndicator />
    }
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

const mapStateToProps = ({ books, loading, error }) => {
    return { books, loading, error }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch)
    }
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList)
