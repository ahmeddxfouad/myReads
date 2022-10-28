import React,{ useEffect } from 'react';
import {getAll, update} from "../BooksAPI";
import BookList from "../components/BookList";

import {Route, Routes} from 'react-router-dom'
import Search from "../components/Search";

const BookPage =  () => {
    const [books, setBooks] = React.useState([]);

    const editBookShelf = (book, newShelf) => {

        const newBooks = books.map((t) => {
            if (t.id === book.id) {
                t.shelf = newShelf.target.value;
            }
            return t;
        });
        update(book, newShelf);
        setBooks(newBooks);
    };

    const addMockData = () => {
        setTimeout(async () => {
            let newBooks = await getAll();
            console.log(newBooks);
            setBooks(newBooks);
        }, 500);
    };

    useEffect(() => {
        addMockData();
    }, []);

    return (

        <Routes>
            <Route path='/' element={<BookList
                {...{
                    books,
                    editBookShelf,
                }}
            />} />
            <Route path='/search' element={<Search{...{
                books,
                setBooks,
                editBookShelf,
            }}/>} />
        </Routes>

    )
}

export default BookPage;
