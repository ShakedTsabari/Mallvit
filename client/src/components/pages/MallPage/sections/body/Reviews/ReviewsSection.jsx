
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
        setNewReview({ ...newReview, [name]: value ,timestamp: new Date()});
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
            const url = `${baseUrl}${mall.title}/reviews`;
            const response = await fetch(url);
            const reviews = await response.json();
            console.log('Fetched reviews:', reviews); // Debugging statement
            setReviews(reviews);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, [mall.reviews]);

    return (
        <div className="reviews-section">
            <h2>Reviews</h2>
            <div className="reviews-container">
            {Array.isArray(reviews) && reviews.map((review) => (
                        <Review key={review._id} review={review} mallName={mall.title} />
                    ))
            }
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
                            <option value="Sales">Sales</option>
                            <option value="Stores">Stores</option>
                            <option value="Events">Events</option>
                            <option value="Food & Dining">Food & Dining</option>
                            <option value="Parking">Parking</option>
                            <option value="Other">Other</option>
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