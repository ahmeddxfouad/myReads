import React from 'react';
const BookItem = ({ book,setBooks,  editBookShelf}) => {

  let { id, title, authors, shelf, imageLinks } = book;

  if(shelf==="")
      shelf = "none";


  return (
      <div>
          <li>
            <div className="book">
              <div className="book-top">
                <div
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src="../icons/image-not-found.png";}}
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage:
                          `url(${imageLinks.thumbnail})`,

                    }}
                ></div>
                <div className="book-shelf-changer">
                  <select id={book.id} defaultValue={(shelf!=="wantToRead" && shelf!=="read" && shelf!=="currentlyReading") ? "none" : shelf} onChange={(e) => editBookShelf(book, e)}>
                    <option value="move" disabled>
                      Move to...
                    </option>
                    <option value="currentlyReading">
                      Currently Reading
                    </option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{title}</div>
              <div className="book-authors">{authors}</div>
            </div>
          </li>
   </div>
  );
};
export default BookItem;
