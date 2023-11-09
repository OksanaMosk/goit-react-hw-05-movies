// import css from './MoviesPage.module.css';
// import { Link, useParams } from 'react-router-dom';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Loader from 'components/Loader/Loader';
import List from 'components/List/List';

const API_KEY = 'b750df2a9f04f9a8c778928f9359c968';

const Movies = () => {
  const [searchParams, setsearchParams] = useSearchParams();
  const [searchedMovie, setSearchedMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const queryValue = searchParams.get('query');
  console.log('queryValue:', queryValue);

  const onFormSubmit = e => {
    e.preventDefault();
    const value = e.currentTarget.elements.searchKey.value;
    setsearchParams({ query: value });
    console.log('value:', value);
  };

  useEffect(() => {
    if (!queryValue) return;
    const fetchSearchedMovie = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${queryValue}&include_adult=false&language=en-US`
        );
        setSearchedMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSearchedMovie();
  }, [queryValue]);

  console.log(searchedMovie);

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label>
          <input
            type="text"
            name="searchKey"
            required
            placeholder="name of film"
          ></input>
        </label>
        <button type="submit">Search</button>
      </form>

      <List movies={searchedMovie} />
      {/* {error !== null && <p>{error}</p>}
      {isLoading && <Loader />}
      {searchedMovie !== null &&
        searchedMovie.map(movies => {
          return (
            <ul key={movies.id}>
              <li>
                <h4>{movies.title ? movies.title : movies.name}</h4>

                <img
                  alt={movies.title ? movies.title : movies.name}
                  title={movies.title ? movies.title : movies.name}
                  src={
                    movies.poster_path
                      ? `https://image.tmdb.org/t/p/w200${movies.poster_path}`
                      : null
                  }
                />
              </li>
            </ul>
          );
        })} */}
    </div>
  );
};
export default Movies;
