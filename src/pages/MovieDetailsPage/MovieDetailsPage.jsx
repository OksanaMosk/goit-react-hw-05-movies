import { useParams } from 'react-router-dom';
// import { movieId } from 'components/Services/Api';
import { NavLink, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import AboutItem from 'components/AboutItem/AboutItem';
import { fetchMovieDetails } from 'components/Services/Api';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(1429);

  useEffect(() => {
    fetchMovieDetails(movieId).then(result => {
      setMovie(result);
    });

    // .catch(err => console.error(err));
  }, [movieId]);

  console.log({ movieId });

  return (
    <div>
      <AboutItem movie={movie} />
      <div>
        <NavLink to="/movies/:movieId/cast">Cast</NavLink>
        <NavLink to="/movies/:movieId/reviews">Reviews</NavLink>
      </div>
      {/* <div>
        <p>рідна вставка</p>
        <h1>About</h1>
        <h2> {title ? title : name}</h2>
        <p>{genres}</p>
        <p>{overview}</p>
        <p>{vote_average}</p>
        <p>{vote_count}</p>
        <p>{poster_path}</p>
        <p>кінець вставки</p>
      </div> */}
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
