import React, { useState} from "react";
import {useNavigate} from "react-router-dom";
import {get, getAll, search} from "../BooksAPI";
import BookItem from "./BookItem";


const Search = ({ book,setBooks, editBookShelf}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);
    const navigate = useNavigate();

    const navigateToHome = async () => {
        let newBooks = await getAll();
       setBooks(newBooks);
        navigate('/');
    }

    const queryUpdated  = async (query) => {

        const res = await search(query);
        console.log(res);

        if(res!==undefined && res.length>0){
            //async setTimeout(console.log("Loading"),500);
            let newBooks= [];
            setSearchQuery(query);


            for (const element of res) {
                newBooks.push(await get(element.id));
            }
            setFilteredBooks(newBooks);
            setBooks(newBooks);
        }
        else {
            setSearchQuery(query);
            setFilteredBooks([]);

        }

    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <a className="close-search"
                    onClick={navigateToHome}
                >
                    Close
                </a>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        onChange={event => queryUpdated(event.target.value)}
                    />

                </div>
            </div>

            <div className="search-books-results">
                <ol className="books-grid">

                    {filteredBooks
                        .filter((book) => book.imageLinks!==undefined && book.id !==undefined)
                        .map((book) => (
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
    );
}

export default Search;
