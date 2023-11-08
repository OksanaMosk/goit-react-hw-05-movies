const AboutItem = ({ movie }) => {
  const { genres, title, name, overview, vote_average, vote_count } = movie;
  // console.log(movieId);

  return (
    <div>
      <p>{genres}</p>
      <p>стороння вставка</p>
      <h1>About</h1>
      <h2> {title ? title : name}</h2>
      <p>{movie}</p>
      <p>{overview}</p>
      <p>{vote_average}</p>
      <p>{vote_count}</p>
    </div>
  );
};
export default AboutItem;
