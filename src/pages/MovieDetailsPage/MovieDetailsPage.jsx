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
        <NavLink to="/movies/:{movieId}/cast">Cast</NavLink>
        <NavLink to="/movies/:movieId/reviews">Reviews</NavLink>
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
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Routes>
      </div>
    </div>
  );
};
export default MovieDetails;

// useEffect(() => {
//   const fetchMovieDetails = async () => {
//     try {
//       const { result } = await axios.get(
//         `https://api.themoviedb.org/3/movie/${movieId}?api_key=b750df2a9f04f9a8c778928f9359c968&language=en-US`
//       );
//       setMovie(result);
//     } catch (error) {
//     } finally {
//     }
//   };
//   fetchMovieDetails();
// }, [movie, movieId]);
