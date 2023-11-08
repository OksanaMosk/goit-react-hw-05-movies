// import { useParams } from 'react-router-dom';

const AboutItem = ({ movie }) => {
  const {
    poster_path,
    genres,
    title,
    name,
    overview,
    vote_average,
    vote_count,
  } = movie;
  // console.log(movieId);
  const movieGenres =
    movie !== null
      ? movie.genres.map(genre => genre.name).join(', ')
      : 'Unknown';

  return (
    <div>
      <p>{genres}</p>
      <p>стороння вставка</p>
      <h1>About</h1>
      <h2> {title ? title : name}</h2>

      <p>{overview}</p>
      <p>{vote_average}</p>
      <p>{vote_count}</p>
      <p>{poster_path}</p>
      <p>{movieGenres}</p>
    </div>
  );
};
export default AboutItem;
