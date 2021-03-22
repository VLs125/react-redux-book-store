const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [
        // {
        //     id: 1,
        //     title: 'Books 1',
        //     count: 3,
        //     total: 150,

        // },
        // {
        //     id: 2,
        //     title: 'Books 2',
        //     count: 1,
        //     total: 50,

        // },

    ],
    orderTotal: 200
}

const reducer = (state = initialState, action) => {
    console.log(action.type);

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
            if(state.cartItems.length<=0){
                console.log('no items')
            }
            else{console.log(state.cartItems[state.cartItems.length-1].id)}
            

            const newItem = {
                id: bookId,
                title: book.title,
                count: 1,
                total: book.price,

            }
            return {
                ...state,
                cartItems: [
                    ...state.cartItems,
                    newItem
                ]
            };

        default:
            return state;
    }

}

export default reducer;