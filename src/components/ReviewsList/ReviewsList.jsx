import css from './ReviewsList.module.css';

const ReviewsList = ({ reviews }) => {
  return (
    <ul className={css.reviewList}>
      {reviews
        ? reviews.map(review => (
            <li key={review.id}>
              <h3 className={css.reviewAutor}>{review.author}</h3>
              <p className={css.reviewText}>{review.content}</p>
            </li>
          ))
        : console.log('error')}
    </ul>
  );
};
export default ReviewsList;
