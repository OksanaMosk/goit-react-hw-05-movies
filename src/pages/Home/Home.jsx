import TrendingList from 'components/TrendingList/TrendingList';
import { useState, useEffect } from 'react';
import { fetchMovieTrendingDay } from 'components/Services/Api';
import Loader from 'components/Loader/Loader';

import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchMovieTrendingDay()
      .then(data => setMovies(data))
      .catch(setError)
      .finally(setIsLoading(false));
  }, []);

  return (
    <div>
      <h1 className={css.homeTitle}>Trending today</h1>

      {isLoading && <Loader />}
      {!error && <TrendingList movies={movies} />}
    </div>
  );
};
export default Home;
