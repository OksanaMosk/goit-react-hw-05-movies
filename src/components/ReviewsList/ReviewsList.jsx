const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews
        ? reviews.map(review => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))
        : console.log('error')}
    </ul>
  );
};
export default ReviewsList;
