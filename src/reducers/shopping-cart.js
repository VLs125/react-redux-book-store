const updateOrder = (state, bookId, quantity) => {
    const { bookList: { books }, cart: { cartItems, orderTotal } } = state;
    const book = books.find(({ id }) => id === bookId);
    const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
    const item = cartItems[itemIndex]
    const newItem = updateItem(book, item, quantity);
    return {
        cartItems: updateCartItems(cartItems, newItem, itemIndex),
        orderTotal: 0
    };
}
const updateCartItems = (cartItems, item, idx) => {

    if (idx === -1) {
        return [
            ...cartItems,
            item
        ]
    }
    if (item.count === 0) {
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


const updateItem = (book, item = {}, quantity) => {

    const {
        id = book.id,
        count = 0,
        title = book.title,
        total = 0 } = item

    return {
        id,
        title,
        count: count + quantity,
        total: total + quantity * book.price
    }
}


const updateCart = (state, action) => {
    if (state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0
        }
    }

    switch (action.type) {

        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1);

        case 'BOOK_DECREASE_IN_CART':
            return updateOrder(state, action.payload, -1)

        case 'BOOK_REMOVE_FROM_CART':
            const item = state.cart.cartItems.find(({ id }) => id === action.payload)
            return updateOrder(state, action.payload, -item.count)
        default:
            return state.cart;

    }

}

export default updateCart