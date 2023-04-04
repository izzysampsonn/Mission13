import React from 'react';
import { useState } from 'react';
import data from '../MovieData.json';

const mds = data.MovieData;

function MovieList() {
  const [listOfMovies, setListOfMovies] = useState(mds);
  const addMovie = () => {
    setListOfMovies([
      ...mds,
      {
        Category: 'Action/Adventure',
        Title: 'Batman',
        Year: 1989,
        Director: 'Tim Burton',
        Rating: 'PG-13',
        Edited: 'No',
      },
    ]);
  };

  return (
    <>
      <div>
        <h1>Joel's Movies</h1>
        <h3>The Collection</h3>
      </div>

      <div className="custtable">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {listOfMovies.map((m) => (
              <tr key={m.title}>
                <td>{m.title}</td>
                <td>{m.year}</td>
                <td>{m.director}</td>
                <td>{m.rating}</td>
                <td>{m.category}</td>
                <td>{m.edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="btn btn-primary" onClick={addMovie}>
        Add Movie
      </button>
    </>
  );
}

export default MovieList;
