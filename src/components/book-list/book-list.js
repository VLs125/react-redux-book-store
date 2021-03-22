import React, { useEffect } from 'react';
import BookListItem from '../book-list-item/book-list-item';
import './book-list'
import { connect } from 'react-redux';
import withBookstoreService from '../hoc/with-bookstore-service'
import { fetchBooks, bookAddedToCart } from '../../actions'
import compose from '../../utils'
import './book-list.css'
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-inidicator/error-inicator';

const BookList =({books,onAddedToCart})=>{
    return (
        <ul className="book-list">
            {
                books.map((book) => {
                    return (
                        <li key={book.id}><BookListItem onAddedToCart={()=>onAddedToCart(book.id)} book={book} /></li>
                    )
                })
            }
        </ul>
    )
}

const BookListContainer = (props) => {
    const { fetchBooks } = props

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);


    const { books, loading, error, onAddedToCart } = props
    if (loading) {
        return <Spinner />
    }
    if (error) {
        return <ErrorIndicator />
    }

    return(<BookList books={books} onAddedToCart={onAddedToCart}/>)

}


const mapStateToProps = ({ books, loading, error }) => {
    return { books, loading, error }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCart:(id)=>dispatch(bookAddedToCart(id))
    }
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)
