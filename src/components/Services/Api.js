import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'b750df2a9f04f9a8c778928f9359c968';

export const fetchMovieTrendingDay = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  };
  const { data } = await axios.get(
    `trending/all/day?api_key=${API_KEY}`,
    options
  );

  return data.results;
};

export const fetchMovieDetails = async movieId => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  };
  const { data } = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`,
    options
  );

  return data;
};

export const fetchMovieCredits = async movieId => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  };
  const { data } = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&include_adult=false&language=en-US`,
    options
  );

  return data.cast;
};

export const fetchMovieReviews = async movieId => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  };

  const { data } = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&include_adult=false&language=en-US`,
    options
  );

  return data.results;
};
