import { useEffect, useState } from 'react';
import { Movie } from '../types/movie';

function MovieListNew() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setMovieData(temp);
    };
    fetchMovie();
  }, []);

  return (
    <>
      <div className="row">
        <h4>The Best Movies</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Edited</th>
          </tr>
        </thead>
        <tbody>
          {movieData.map((m) => (
            <tr key={m.MovieId}>
              <td>{m.Title}</td>
              <td>{m.Category}</td>
              <td>{m.Year}</td>
              <td>{m.Director}</td>
              <td>{m.Rating}</td>
              <td>{m.Edited}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MovieListNew;
