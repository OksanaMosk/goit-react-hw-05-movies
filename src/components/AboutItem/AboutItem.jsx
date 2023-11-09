import { NavLink } from 'react-router-dom';

const AboutItem = ({ movie }) => {
  // const ({
  //   genres,
  //   poster_path,
  //   title,
  //   name,
  //   overview,
  //   vote_average,
  //   vote_count,
  // }) = movie;
  // console.log(movieId);

  return (
    <div>
      <NavLink>
        <li>
          <p>{movie.overview}</p>
          {movie}
          {/* <h2> {title ? title : name}</h2>
          <img
            alt={title ? title : name}
            title={title ? title : name}
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w200${poster_path}`
                : null
            }
          />
          <p>{genres}</p>
          <p>стороння вставка</p>
          <h1>About</h1>
          <p>{movies}</p>
         
          <p>{vote_average}</p> */}
          {/* <p>{vote_count}</p> */}
        </li>
      </NavLink>
    </div>
  );
};
export default AboutItem;
