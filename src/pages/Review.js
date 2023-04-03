import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { carId } = useParams();
  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch(`http://127.0.0.1:3000/reviews?carId=${carId}`);
      const data = await response.json();
      setReviews(data);
    };
    fetchReviews();
  }, [carId]);
  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };
  const filteredReviews = reviews.filter(review => {
    return review.carName && review.carName.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return (
    <div>
      <h2>Reviews {carId}</h2>
      <input type="text" placeholder="Search for a car..." value={searchTerm} onChange={handleSearch} />
      {filteredReviews.length > 0 ? (
        <ul>
          {filteredReviews.map((review, index) => (
            <li key={index}>
              <p>Review ID: {review.id}</p>
              <p>Car Name: {review.carName}</p>
              <p>Rating: {review.rating}</p>
              <p>Comment: {review.comments}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available for this car.</p>
      )}
      <Link to = "/" onClick={() => window.scrollTo(0, 0)}>Back Home</Link>
    </div>
  );
}
export default Reviews;