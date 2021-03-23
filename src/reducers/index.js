const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 0
}
const updateOrder = (state, bookId, quantity) =>{
  const {books,cartItems,orderTotal} = state;
    const book = books.find(({id}) => id === bookId);
    const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
    const item = cartItems[itemIndex]
    const newItem = updateItem(book, item,quantity);
    return {
        ...state,
        cartItems: updateCartItems(cartItems, newItem, itemIndex),
        orderTotal:orderTotal + newItem.total
    };
}
const updateCartItems = (cartItems, item, idx) => {

    if (idx === -1) {
        return [
            ...cartItems,
            item
        ]
    }
    if(item.count === 0){
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ]
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ]


}


const updateItem = (book, item = {},quantity) => {

    const {
        id = book.id,
        count = 0,
        title = book.title,
        total = 0 } = item

    return {
        id,
        title,
        count: count + quantity,
        total: total +  quantity* book.price
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
            return updateOrder(state,action.payload,1);

        case 'BOOK_DECREASE_IN_CART':
            return updateOrder(state,action.payload,-1)
           
        case 'BOOK_REMOVE_FROM_CART':
            const item = state.cartItems.find(({id})=>id===action.payload)
            return updateOrder(state,action.payload,-item.count)

        default:
            return state;
    }

}

export default reducer;