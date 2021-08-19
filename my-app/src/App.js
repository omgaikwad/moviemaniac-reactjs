import React, { useState } from "react";
import "./index.css";

const movieDataBase = {
  drama: [
    { name: "The Shawshank Redemption", rating: "9.3/10" },
    { name: "Fight Club", rating: "8.8/10" }
  ],

  crime: [
    { name: "The Godfather Trilogy", rating: "9.2/10" },
    { name: "The Departed", rating: "8.5/10" }
  ],

  thriller: [
    { name: "The Prestige", rating: "8.5/10" },
    { name: "Shutter Island", rating: "8.2/10" }
  ],

  comedies: [
    { name: "The Hangover Trilogy", rating: "7.7/10" },
    { name: "Euro Trip", rating: "6.6/10" }
  ]
};

export default function App() {
  var [selectedGenre, setGenre] = useState("comedies");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>moviemaniac🎬</h1>
      <p style={{ fontSize: "smaller", textAlign: "left" }}>
        check out my movie recommendation according to genres{" "}
      </p>
      <span
        style={{
          fontSize: "smaller"
        }}
      >
        developed using ReactJS by{" "}
        <a
          style={{
            textDecoration: "none",
            color: "#515e63"
          }}
          href="https://twitter.com/OmGaikwad_"
        >
          om
        </a>
      </span>
      <div>
        {Object.keys(movieDataBase).map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieDataBase[selectedGenre].map((movie) => (
            <li
              key={movie.name}
              style={{
                border: "1px solid black",
                margin: "1rem 0rem",
                padding: "1rem",
                width: "70%",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "small" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

