import updateBookList from "./book-list";
import updateCart from "./shopping-cart";

const reducer = (state, action) => {

    return {
        bookList: updateBookList(state, action),
        cart: updateCart(state, action)
    }







}


export default reducer;