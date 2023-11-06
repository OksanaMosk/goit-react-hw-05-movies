import {
  MovieTrendingDay,
  MovieSearch,
  MovieDetails,
  MovieCredits,
  MovieReviews,
} from './Services/Api';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    ></div>
  );
};

console.log(MovieTrendingDay());
console.log(MovieSearch());
console.log(MovieDetails());
console.log(MovieCredits());
console.log(MovieReviews());
