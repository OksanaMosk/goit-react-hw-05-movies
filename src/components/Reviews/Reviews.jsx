import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../Services/Api';
import ReviewsList from '../ReviewsList/ReviewsList';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(results => setReviews(results))
      .catch(err => console.error(err));
  }, [movieId]);

  return <ReviewsList reviews={reviews} />;
};
export default Reviews;
