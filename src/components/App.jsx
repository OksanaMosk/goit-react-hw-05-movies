import { NavLink, Route, Routes } from 'react-router-dom';

// import {
//   fetchMovieSearch,
//   fetchMovieTrendingDay,
// fetchMovieDetails,
//   fetchMovieCredits,
//   fetchMovieReviews,
// } from './Services/Api.js';
import css from './App.module.css';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import Details from 'pages/Details/Details';

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
      </header>
      <main className={css.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<Details />} />
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
