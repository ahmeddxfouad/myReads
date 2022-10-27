import React from 'react';
import logo from '../icons/image-not-found.png';
const BookItem = ({ book,  editBookShelf}) => {

  const { id, title, authors, shelf, imageLinks } = book;




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
                  <select defaultValue={shelf} onChange={(e) => editBookShelf(book, e)}>
                    <option value="none" disabled>
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
