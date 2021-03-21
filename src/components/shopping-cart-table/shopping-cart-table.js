import React from 'react';
import './shopping-cart-table.css'

const ShoppingCartTable = () => {
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
                    <tr>
                    <td>1</td>
                    <td>Война и мир</td>
                    <td>1</td>
                    <td>20000</td>
                    <td>
                        <button className="btn btn-outline-danger btn-sm">
                            <i className="fa fa-trash" />
                        </button>
                        <button className="btn btn-outline-success btn-sm">
                            <i className="fa fa-plus-circle" />
                        </button>
                        <button className="btn btn-outline-warning btn-sm">
                            <i className="fa fa-minus-circle" />
                        </button>
                    </td>
                    </tr>
                </tbody>
            </table>

            <div className="total">
                Total:
                </div>
        </div>
    )
}

export default ShoppingCartTable;