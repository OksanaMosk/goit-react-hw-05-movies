import { Link, useParams } from 'react-router-dom';
import { NavLink, Route, Routes } from 'react-router-dom';
import { useState, useEffect, useRef, Suspense } from 'react';
import { fetchMovieDetails } from 'components/Services/Api';
import NoImage from '../../img/NoImage.png';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import Loader from 'components/Loader/Loader';
import { useLocation } from 'react-router-dom';

import css from './Details.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    setIsLoading(true);
    fetchMovieDetails(movieId)
      .then(result => {
        setMovie(result);
      })
      .catch(setError)
      .finally(setIsLoading(false));
  }, [movieId]);

  return (
    <div className={css.containerDetails}>
      <Link className={css.backHome} to={backLinkRef.current}>
        Go back
      </Link>
      {isLoading && <Loader />}
      {!error && (
        <div className={css.partsDetails}>
          <img
            width={300}
            height={450}
            className={css.imgDetails}
            alt={movie.title ? movie.title : movie.name}
            title={movie.title ? movie.title : movie.name}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                : NoImage
            }
          />
          <div className={css.rightPartsDetails}>
            <h1 className={css.titleDetails}>
              {movie.title ? movie.title : movie.name}
            </h1>
            <p className={css.details}>
              <span className={css.mainDetails}>Release date: </span>
              {movie.release_date}
            </p>
            <p className={css.details}>
              {movie.vote_average !== 0 ? (
                <>
                  <span className={css.mainDetails}>Rating: </span>
                  <span>{movie.vote_average} </span>
                  <span>(based on {movie.vote_count} reviews)</span>
                </>
              ) : (
                <span> No reviews yet </span>
              )}
            </p>
            <p className={css.details}>
              <span className={css.mainDetails}>Log line: </span>
              {movie.overview}
            </p>
            <div className={css.nav}>
              <NavLink className={css.navLinkDetails} to="cast">
                Cast
              </NavLink>
              <NavLink className={css.navLinkDetails} to="reviews">
                Reviews
              </NavLink>
            </div>
          </div>
          <div className={css.cast}>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      )}
    </div>
  );
};
export default MovieDetails;
