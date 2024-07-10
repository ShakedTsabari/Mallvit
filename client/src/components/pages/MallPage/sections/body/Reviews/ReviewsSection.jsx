
import React, { useEffect, useState } from 'react';
import './ReviewsSection.css';
import Review from './Review';

export default function ReviewsSection({ mall }) {
    const [reviews, setReviews] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newReview, setNewReview] = useState({ name: '', subject: '', body: '' });
    const baseUrl = 'http://localhost:3000/malls/';

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReview({ ...newReview, [name]: value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const url = `${baseUrl}${mall.title}/reviews`;
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
            console.log('New Review Submitted:', newReview); // For demonstration
            if (data) {
                setReviews((prevReviews) => [newReview, ...prevReviews]);
                setShowForm(false); // Hide form after submission
                setNewReview({ name: '', subject: '', body: '' }); // Clear form fields
            }
        } catch (error) {
            console.error('Error submitting the review:', error);
        }
    };

    const fetchReviews = async () => {
        try {
            const response = await fetch(`${baseUrl}${mall.title}/reviews`);
            const reviews = await response.json();
            console.log('Fetched reviews:', reviews); // Debugging statement
            setReviews(reviews);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    return (
        <div className="reviews-section">
            <h2>Reviews</h2>
            <div className="reviews-container">
            {Array.isArray(reviews) && reviews.length > 0 ? (
                    reviews.map((review, index) => (
                        <Review key={index} review={review} />
                    ))
                ) : (
                    <p>No reviews available.</p>
                )}
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
                            name="body"
                            value={newReview.body}
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