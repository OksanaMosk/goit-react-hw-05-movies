// import { useParams } from 'react-router-dom';
// import { movieId } from 'components/Services/Api';
// import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import AboutItem from 'components/AboutItem/AboutItem';
import { fetchMovieDetails } from 'components/Services/Api';
const MovieDetails = () => {
  //   const {
  //     movieId,
  //     name,
  //     title,
  //     overview,
  //     genres,
  //     cast,
  //     reviews,
  //     vote_average,
  //     vote_count,
  //     video,
  //     poster_path,
  //   } = useParams();
  const [movieID, setMovieID] = useState([]);

  useEffect(() => {
    fetchMovieDetails('')
      .then(data => setMovieID(data))
      .catch(err => console.error(err));
  }, []);

  //   console.log({ movieId });
  return (
    <div>
      <AboutItem movies={movieID} />
    </div>
  );
};
export default MovieDetails;
