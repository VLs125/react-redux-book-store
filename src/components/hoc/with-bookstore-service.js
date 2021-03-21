import React,{useContext} from 'react';
import { BookStoreContext } from '../book-service-context/book-service-context';

const withBookstoreService = ()=>(Wrapped)=>{
    return(props)=>{
        const bookstoreService = useContext(BookStoreContext)
        return(
            <Wrapped {...props} bookstoreService={bookstoreService}/>
            )
    }
}

export default withBookstoreService