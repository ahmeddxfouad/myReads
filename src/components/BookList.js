import React from 'react';

import Shelf from "../constants/shelf";
import BookItem from "./BookItem";
import Header from "./Header";
import {useNavigate} from "react-router-dom";

const BookList = ({
                    books,
                    setBooks,
                    editBookShelf,
                  }) => {
    const navigate = useNavigate();

    const navigateToSearch = () => {
        navigate('/search');
    }

        return (
            <div className="list-books">
            <Header/>
          <div className="list-books-content">
              {Object.keys(Shelf).map((shelf) => (
                <div key={shelf} className="bookshelf">
                    <h2 className="bookshelf-title">{shelf}</h2>
                        <div className="bookshelf-books">
                              <ol className="books-grid">
                    {books.filter((book) => book.shelf === shelf).map((book) => (
                            <BookItem
                                key={book.id}
                                book={book}
                                setBooks={setBooks}
                                editBookShelf={editBookShelf}
                            />
                        ))}
                            </ol>
                        </div>
                </div>
              ))}
            </div>
                <div className="open-search">
                    <a onClick={navigateToSearch}>Add a book</a>
                </div>
        </div>
        );
};

export default BookList;
