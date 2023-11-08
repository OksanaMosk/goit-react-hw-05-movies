import { useEffect } from 'react';
import { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
import { fetchMovieTrendingDay } from 'components/Services/Api';
import TrendingList from 'components/TrendingList/TrendingList';

const Home = () => {
  //   const { movieId } = useParams();
  const [movies, setMovies] = useState([]);
  //   //   const [error, setError] = useState(null);
  //   //   const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMovieTrendingDay()
      .then(data => setMovies(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <TrendingList movies={movies} />
    </div>
  );
};
export default Home;
