import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'b750df2a9f04f9a8c778928f9359c968';

export const fetchMovieTrendingDay = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      //   Authorization: 'Bearer b750df2a9f04f9a8c778928f9359c968',
    },
  };
  const { data } = await axios.get(
    `trending/all/day?api_key=${API_KEY}`,
    options
  );
  console.log(data.results);
  return data.results;
};

export const fetchMovieSearch = async q => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      //   Authorization: 'Bearer b750df2a9f04f9a8c778928f9359c968',
    },
  };

  const { data } = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${q}&include_adult=false&language=en-US`,
    options
  );
  // console.log(data.results);
  return data.results;
};

export const fetchMovieDetails = async movieID => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      //   Authorization: 'Bearer b750df2a9f04f9a8c778928f9359c968',
    },
  };
  const { data } = await axios.get(
    `search/movie?${movieID}&api_key=${API_KEY}&include_adult=false&language=en-US`,
    options
  );
  console.log(data);
  return data;
};

export const fetchMovieCredits = async movieID => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      //   Authorization: 'Bearer b750df2a9f04f9a8c778928f9359c968',
    },
  };
  const { data } = await axios.get(
    `search/movie?${movieID}&credits&api_key=${API_KEY}&include_adult=false&language=en-US`,
    options
  );
  console.log(data.cast);
  return data.cast;
};

export const fetchMovieReviews = async movieID => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      //   Authorization: 'Bearer b750df2a9f04f9a8c778928f9359c968',
    },
  };

  const { data } = await axios.get(
    `search/movie?${movieID}&reviews&api_key=${API_KEY}&include_adult=false&language=en-US`,
    options
  );
  console.log(data.reviews);
  return data.reviews;
};
