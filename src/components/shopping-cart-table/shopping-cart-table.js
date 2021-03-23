import React from 'react';
import { connect } from 'react-redux';
import { bookDecreaseInCart, bookIncreaseInCart, bookRemoveFromCart } from '../../actions';
import './shopping-cart-table.css'

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
   const renderItems =(item, idx) => {
        const {id, count, total, title } = item
        return (
            <tr key ={id}>
                <td>{idx+1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>{total}</td>
                <button onClick={()=>onDelete(id)} className="btn btn-outline-danger btn-sm">
                    <i className="fa fa-trash" />
                </button>
                <button onClick={()=>onIncrease(id)} className="btn btn-outline-success btn-sm">
                    <i className="fa fa-plus-circle" />
                </button>
                <button onClick={()=>onDecrease(id)} className="btn btn-outline-warning btn-sm">
                    <i className="fa fa-minus-circle" />
                </button>
            </tr>
        )
    }
    return (
        <div className="shopping-cart-table">
            <h2>Ваш заказ</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Книга</th>
                        <th>Кол-во</th>
                        <th>Цена</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>


                    {items.map(renderItems)}
                </tbody>
            </table>

            <div className="total">
                {total}
            </div>
        </div>
    )
}
const mapStateToProps = ({cartItems,orderTotal}) =>{
    return {
        items:cartItems,
        total:orderTotal,

    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onDecrease :(id)=>{
            dispatch(bookDecreaseInCart(id))
        },
        onIncrease :(id)=>{
            dispatch(bookIncreaseInCart(id))
        },
        onDelete :(id)=>{
            dispatch(bookRemoveFromCart(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCartTable);

// <button className="btn btn-outline-danger btn-sm">
// <i className="fa fa-trash" />
// </button>
// <button className="btn btn-outline-success btn-sm">
//     <i className="fa fa-plus-circle" />
// </button>
// <button className="btn btn-outline-warning btn-sm">
//     <i className="fa fa-minus-circle" />
// </button>