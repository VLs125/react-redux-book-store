const booksLoaded = (newBooks)=>{
    return{
        type:'BOOKS_LOADED',
        payload:newBooks,
    }

}
const booksRequested = ()=>{
    return{
        type:'FETCH_BOOKS_REQUESTED'       
    }

}

const booksError = (error)=>{
    return{
        type:'BOOKS_ERROR',
        payload:error,     
    };

}

const fetchBooks = (bookstoreService,dispatch)=>() => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then((data) => {
            dispatch(booksLoaded(data));
        })
        .catch((error) => {
            dispatch(booksError(error));
        })
}

export {
    fetchBooks
}