import React, { useRef } from 'react';

import css from './ReviewsList.module.css';

const ReviewsList = ({ reviews }) => {
  const reviewsRef = useRef(null);

  return (
    <ul className={css.reviewList} ref={reviewsRef}>
      {reviews
        ? reviews.map(review => (
            <li key={review.id}>
              <h3 className={css.reviewAutor}>{review.author}</h3>
              <p className={css.reviewText}>{review.content}</p>
            </li>
          ))
        : null}
    </ul>
  );
};
export default ReviewsList;
