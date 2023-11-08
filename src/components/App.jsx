import { NavLink, Route, Routes } from 'react-router-dom';
// import {
//   fetchMovieSearch,
//   fetchMovieTrendingDay,
//   fetchMovieDetails,
//   fetchMovieCredits,
//   fetchMovieReviews,
// } from './Services/Api.js';
import css from './App.module.css';
import Home from 'pages/MoviesHomePage/MoviesHomePage';
import Movies from 'pages/MoviesPage/MoviesPage';
import MovieDetails from 'pages/MovieDetailsPage/MovieDetailsPage';

export const App = () => {
  return (
    <div>
      <header className={css.header}>
        <NavLink className={css.headerLink} to="/">
          Home
        </NavLink>
        <NavLink className={css.headerLink} to="/movies">
          Movies
        </NavLink>
        {/* <NavLink className={css.headerLink} to="/movies/:movieId/*">
          MovieDetails
        </NavLink> */}
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
        </Routes>
      </main>
    </div>
  );
};

// console.log(fetchMovieTrendingDay());
// console.log(fetchMovieSearch());
// console.log(fetchMovieDetails());
// console.log(fetchMovieCredits());
// console.log(fetchMovieReviews());
