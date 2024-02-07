import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../Services/Api';
import ReviewsList from '../ReviewsList/ReviewsList';
import { useRef } from 'react';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  const reviewsRef = useRef(null);

  useEffect(() => {
    if (reviewsRef.current) {
      reviewsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(results => setReviews(results))
      .catch(err => console.error(err));
  }, [movieId]);

  return (
    <div ref={reviewsRef}>
      <ReviewsList reviews={reviews} />;
    </div>
  );
};
export default Reviews;
