import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieCredits } from '../Services/Api';
import NoPhoto from '../../img/NoPhoto.png';
import React, { useRef } from 'react';

import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const cast = await fetchMovieCredits(movieId);
        setCast(cast);
      } catch (e) {}
    };
    fetchCast();
  }, [movieId]);

  const castRef = useRef(null);

  return (
    <ul ref={castRef} className={css.cast}>
      {cast.map(({ id, profile_path, original_name, character }) => (
        <li className={css.castLink} key={id}>
          <img
            width={200}
            height={280}
            className={css.castImg}
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w200${profile_path}`
                : NoPhoto
            }
            alt={original_name}
          />
          <div className={css.castAbout}>
            <p className={css.castName}>
              <span> Actor:</span> {original_name}
            </p>
            <p className={css.character}>
              <span>Character:</span> {character}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default Cast;
