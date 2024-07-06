import React from 'react';
import './ReviewsSection.css'; 
import Review from './partials/Review';
import { useState } from 'react';

export default function ReviewsSection({ mall, setReviews }) {
    const [showForm, setShowForm] = useState(false);
    const [newReview, setNewReview] = useState({ name: '', subject: '', content: '' });
    const baseUrl = 'http://localhost:3000';

    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const url = baseUrl + '/malls/' + mall.title + '/reviews';
          const response = await fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(newReview),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('New Review Submitted:', data); // For demonstration
        if(data){
            setReviews((prevReviews) => [...prevReviews, newReview]);
        }

        setShowForm(false); // Hide form after submission
        cleanForm(); // Clear form fields
        } catch (error) {
          console.error('Error submitting the review:', error);
        }
      };

    const cleanForm = () => {
        setNewReview({ name: '', subject: '', content: '' });
    };  

    return (
    <div>
        <h2>Reviews</h2>
        <div className="reviews-container">
        {Array.isArray(mall.reviews) && mall.reviews.map((review, index) => (
            console.log(review),
            <Review review={review} />
        ))}
        </div>
        <button className="add-review-button" onClick={() => setShowForm(true)}>
        Add Review
        </button>

        {showForm && (
        <form className="review-form" onSubmit={handleFormSubmit}>
            <div>
            <label>Name:</label>
            <input
                type="text"
                name="name"
                value={newReview.name}
                onChange={handleInputChange}
                required
            />
            </div>
            <div>
            <label>Subject:</label>
            <select
              name="subject"
              value={newReview.subject}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a subject</option>
              <option value="עומסים">עומסים</option>
              <option value="אירועים">אירועים</option>
              <option value="מבצעים">מבצעים</option>
              <option value="תקלות">תקלות</option>
            </select>
          </div>
            <div>
            <label>Content:</label>
            <textarea
                name="content"
                value={newReview.content}
                onChange={handleInputChange}
                required
            />
            </div>
            <button type="submit">Submit Review</button>
        </form>
        )}
    </div>
    );
}