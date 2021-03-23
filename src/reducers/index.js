const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 0
}

const updateCartItems = (cartItems, item, idx) => {

    if (idx === -1) {
        return [
            ...cartItems,
            item
        ]
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ]


}
const updateDeletedCartItems = (cartItems, idx) => {

    if (idx === -1) {
        return [
            ...cartItems,
        ]
    }

    return [
        ...cartItems.slice(0, idx),
        ...cartItems.slice(idx + 1)
    ]


}

const updateItem = (book, item = {}) => {

    const {
        id = book.id,
        count = 0,
        title = book.title,
        total = 0 } = item

    return {
        id,
        title,
        count: count + 1,
        total: total + book.price
    }
}
const decreaseUpdateItem = (book, item = {}) => {

    const {
        id = book.id,
        count = 0,
        title = book.title,
        total = 0 } = item

    return {
        id,
        title,
        count: count - 1,
        total: total - book.price
    }
}





const reducer = (state = initialState, action) => {
    console.log(action.type, action.payload);

    switch (action.type) {
        case 'FETCH_BOOKS_REQUESTED':
            return {
                ...state,
                books: [],
                loading: true,
                error: null,
            };
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null,

            };

        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload,

            };
        case 'BOOK_ADDED_TO_CART':
            const bookId = action.payload;
            const book = state.books.find((book) => book.id === bookId);
            const itemIndex = state.cartItems.findIndex(({ id }) => id === bookId);
            const item = state.cartItems[itemIndex]
            const newItem = updateItem(book, item);
            return {
                ...state,
                cartItems: updateCartItems(state.cartItems, newItem, itemIndex)
            };
        case 'BOOK_INCREASE_IN_CART':
            const increaseBookId = action.payload;
            const increaseBook = state.books.find((book) => book.id === increaseBookId);
            const increaseItemIndex = state.cartItems.findIndex(({ id }) => id === increaseBookId);
            const increaseItem = state.cartItems[increaseItemIndex]
            const increaseNewItem = updateItem(increaseBook, increaseItem);

            return {
                ...state,
                cartItems: updateCartItems(state.cartItems, increaseNewItem, increaseItemIndex)
            };
        case 'BOOK_DECREASE_IN_CART':
            const decreaseBookId = action.payload;
            const decreaseBook = state.books.find((book) => book.id === decreaseBookId);
            const decreaseItemIndex = state.cartItems.findIndex(({ id }) => id === decreaseBookId);
            const decreaseItem = state.cartItems[decreaseItemIndex]
            const decreaseNewItem = decreaseUpdateItem(decreaseBook, decreaseItem);

            return {
                ...state,
                cartItems: updateCartItems(state.cartItems, decreaseNewItem, decreaseItemIndex)
            };
        case 'BOOK_REMOVE_FROM_CART':
            const deleteBookId = action.payload;
            const deleteBook = state.books.find((book) => book.id === deleteBookId);
            const deleteItemIndex = state.cartItems.findIndex(({ id }) => id === deleteBookId);
            const deleteItem = state.cartItems[deleteItemIndex]
            const deleteNewItem = decreaseUpdateItem(deleteBook, deleteItem);

            return {
                ...state,
                cartItems: updateDeletedCartItems(state.cartItems, deleteItemIndex)
            };


        default:
            return state;
    }

}

export default reducer;