// import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchMovieCredits } from '../Services/Api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const cast = await fetchMovieCredits(movieId);
        setCast(cast);
      } catch (e) {
        console.log(e);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <ul>
      {cast.map(({ id, profile_path, original_name, character }) => (
        <li key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w200${profile_path}`
                : null
            }
            alt={original_name}
          />
          <p>
            <span> Actor:</span> {original_name}
          </p>
          <p>
            <span>Character:</span> {character}
          </p>
        </li>
      ))}
    </ul>
  );
};
export default Cast;
