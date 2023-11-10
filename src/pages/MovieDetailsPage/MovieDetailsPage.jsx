// import axios from 'axios';
import { useParams } from 'react-router-dom';
// import { movieId } from 'components/Services/Api';
import { NavLink, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
// import AboutItem from 'components/AboutItem/AboutItem';
import { fetchMovieDetails } from 'components/Services/Api';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');

  useEffect(() => {
    fetchMovieDetails(movieId).then(result => {
      setMovie(result);
    });

    // .catch(err => console.error(err));
  }, [movieId]);

  return (
    <div>
      {/* <AboutItem movie={movie} /> */}
      <div>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>
      <div>
        <p>рідна вставка</p>
        <h1>About</h1>
        {/* <h2> {movie.title ? movie.title : movie.name}</h2> */}
        {/* <p>{movie.genres}</p> */}
        <p>{movie.overview}</p>
        <p>{movie.vote_average}</p>
        <p>{movie.vote_count}</p>
        <p>{movie.poster_path}</p>
        {/* <p>кінець вставки</p> */}
      </div>

      <div>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </div>
      {/* <Cast />
      <Reviews /> */}
    </div>
  );
};
export default MovieDetails;
