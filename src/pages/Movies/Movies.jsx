import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import List from 'components/List/List';

import Notiflix from 'notiflix';
import css from './Movies.module.css';

const API_KEY = 'b750df2a9f04f9a8c778928f9359c968';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchedMovie, setSearchedMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const queryValue = searchParams.get('query');

  const onFormSubmit = e => {
    e.preventDefault();
    const value = e.currentTarget.elements.searchKey.value;
    setSearchParams({ query: value });
  };

  useEffect(() => {
    if (!queryValue) return;
    const fetchSearchedMovie = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${queryValue}&include_adult=false&language=en-US`
        );
        setSearchedMovie(data.results);
        if (data.results.length === 0) {
          setSearchParams();
          setSearchedMovie('');

          Notiflix.Notify.failure('There are no films. Please try again.');
          return;
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSearchedMovie();
  }, [queryValue, setSearchParams]);

  return (
    <div>
      <form className={css.formSearch} onSubmit={onFormSubmit}>
        <label>
          <input
            className={css.input}
            type="text"
            name="searchKey"
            required
            placeholder="name of film"
          ></input>
        </label>
        <button className={css.inputButton} type="submit">
          Search
        </button>
      </form>

      {isLoading && <Loader />}
      {!error && <List movies={searchedMovie} />}
    </div>
  );
};
export default Movies;
