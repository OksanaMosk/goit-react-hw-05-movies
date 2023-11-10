// import axios from 'axios';
import { useParams } from 'react-router-dom';
// import { movieId } from 'components/Services/Api';
import { NavLink, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

import { fetchMovieDetails } from 'components/Services/Api';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

import css from './Details.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');

  useEffect(() => {
    fetchMovieDetails(movieId).then(result => {
      setMovie(result);
    });

    // .catch(err => console.error(err));
  }, [movieId]);

  // const allGenres =
  //   movie !== null
  //     ? movie.genre.map(genre => genre.name).join(', ')
  //     : 'Unknown';

  return (
    <div className={css.containerDetails}>
      <div className={css.partsDetails}>
        <img
          className={css.imgDetails}
          alt={movie.title ? movie.title : movie.name}
          title={movie.title ? movie.title : movie.name}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
              : null
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
          {/* <p>
          <span className={css.mainDetails}>Genre: </span>
          {allGenres}
        </p> */}
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
            {movie.overview}Log line
          </p>
          <div>
            <Routes>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Routes>
          </div>
        </div>
      </div>
      <div className={css.nav}>
        <NavLink className={css.navLinkDetails} to="cast">
          Cast
        </NavLink>
        <NavLink className={css.navLinkDetails} to="reviews">
          Reviews
        </NavLink>
      </div>

      {/* <Cast />
      <Reviews /> */}
    </div>
  );
};
export default MovieDetails;
