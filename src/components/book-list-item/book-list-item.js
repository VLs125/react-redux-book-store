import React from 'react'

const BookListItem = ({book}) =>{
    const {title, author} = book;

    return (
        <div>
            <p>{title}</p>
            <p>{author}</p>
        </div>
    )
}

export default BookListItem