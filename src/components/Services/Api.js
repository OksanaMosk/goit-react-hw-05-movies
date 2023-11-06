// import axios from 'axios';
// import Notiflix from 'notiflix';

// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = 'b750df2a9f04f9a8c778928f9359c968';

// async function MovieDetails(Searchtitle, id) {
//   const searchParams = new URLSearchParams({
//     key: API_KEY,
//     q: searchPhoto,
//     page: page,
//     per_page: 12,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//   });

//   const response = await axios(`${BASE_URL}?${searchParams}`);

//   if (response.status === 404) {
//     Notiflix.Notify.failure('Oooops...Some error occured...');
//     return Promise.reject();
//   }
//   return response;
// }

export const fetchMovieTrendingDay = () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      //   Authorization: 'Bearer b750df2a9f04f9a8c778928f9359c968',
    },
  };

  //api.themoviedb.org/3/trending/all/{time_window}
  fetch(
    'https://api.themoviedb.org/3/trending/all/day?api_key=b750df2a9f04f9a8c778928f9359c968',
    options
  )
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
};

export const fetchMovieSearch = () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      //   Authorization: 'Bearer b750df2a9f04f9a8c778928f9359c968',
    },
  };

  //   'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1'

  fetch(
    'https://api.themoviedb.org/3/search/movie?api_key=b750df2a9f04f9a8c778928f9359c968&include_adult=false&language=en-US',
    options
  )
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
};

export const fetchMovieDetails = fetghID => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      //   Authorization: 'Bearer b750df2a9f04f9a8c778928f9359c968',
    },
  };

  //
  //api.themoviedb.org/3/movie/{movie_id}

  fetch(
    `https://api.themoviedb.org/3/search/movie?${fetghID}&api_key=b750df2a9f04f9a8c778928f9359c968&include_adult=false&language=en-US`,
    options
  )
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
};

export const fetchMovieCredits = fetghID => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      //   Authorization: 'Bearer b750df2a9f04f9a8c778928f9359c968',
    },
  };

  //api.themoviedb.org/3/movie/{movie_id}/credits

  fetch(
    `https://api.themoviedb.org/3/search/movie?${fetghID}&credits&api_key=b750df2a9f04f9a8c778928f9359c968&include_adult=false&language=en-US`,
    options
  )
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
};

export const fetchMovieReviews = fetghID => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      //   Authorization: 'Bearer b750df2a9f04f9a8c778928f9359c968',
    },
  };

  //api.themoviedb.org/3/movie/{movie_id}/credits

  fetch(
    `https://api.themoviedb.org/3/search/movie?${fetghID}&reviews&api_key=b750df2a9f04f9a8c778928f9359c968&include_adult=false&language=en-US`,
    options
  )
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
};
