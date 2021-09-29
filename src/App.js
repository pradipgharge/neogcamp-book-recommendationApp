import "./styles.css";
import React, { useState } from "react";

var bookShelf = {
  JavaScript: [
    { name: "Eloquent JavaScript", rating: "4.5/5" },
    { name: "Javascript the good parts", rating: "3.5/5" },
    { name: "You don't know JS", rating: "2.5/5" }
  ],

  Fiction: [
    { name: "Harry Potter", rating: "4/5" },
    { name: "Lord Of the rings", rating: "3.5/5" },
    { name: "The Alchemist", rating: "3/5" }
  ],
  Comics: [
    { name: "Chacha chaudhari", rating: "4.5/5" },
    { name: "Champak", rating: "4/5" },
    { name: "Vikram-betal", rating: "3.5/5" }
  ]
};

var arrayOfGenres = Object.keys(bookShelf);

export default function App() {
  var [selectedGenre, setSelectedGenre] = useState("JavaScript");

  function genreClickHandler(genre) {
    selectedGenre = genre;
    setSelectedGenre(selectedGenre);
  }

  return (
    <div className="App">
      <h1>
        Discover Books
        <span role="img" aria-label="books">
          📚
        </span>
      </h1>
      <h2>Checkout my favourite books</h2>

      <div className="buttons">
        {arrayOfGenres.map((genre) => {
          return (
            <button
              key={genre}
              className="genreList"
              onClick={() => genreClickHandler(genre)}
            >
              {genre}
            </button>
          );
        })}
      </div>

      <hr className="lineBreak" />
      <div>
        <ul className="listItems">
          {bookShelf[selectedGenre].map((booklist) => {
            return (
              <li className="genreBooks">
                <div className="booksName">{booklist.name}</div>
                <div className="booksRating">{booklist.rating}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
