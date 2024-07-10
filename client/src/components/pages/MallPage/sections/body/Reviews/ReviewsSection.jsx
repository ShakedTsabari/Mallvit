// import React from 'react';
// import './ReviewsSection.css'; 
// import Review from './Review';
// import { useState } from 'react';

// export default function ReviewsSection({ mall, setReviews }) {
//     const [showForm, setShowForm] = useState(false);
//     const [newReview, setNewReview] = useState({ name: '', subject: '', body: '' });
//     const baseUrl = 'http://localhost:3000';

//     const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewReview({ ...newReview, [name]: value });
//     };

//     const handleFormSubmit = async (e) => { 
//         e.preventDefault();
    
//         try {
//           const url = baseUrl + '/malls/' + mall.title + '/reviews';
//           const response = await fetch(url, {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(newReview),
//         });

//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         console.log('New Review Submitted:', data); // For demonstration
//         if(data){
//             setReviews((prevReviews) => [...prevReviews, newReview]);
//         }

//         setShowForm(false); // Hide form after submission
//         cleanForm(); // Clear form fields
//         } catch (error) {
//           console.error('Error submitting the review:', error);
//         }
//       };

//     const cleanForm = () => {
//         setNewReview({ name: '', subject: '', content: '' });
//     };  

//     return (
//     <div>
//         <h2>Reviews</h2>
//         <div className="reviews-container">
//         {Array.isArray(mall.reviews) && mall.reviews.map((review, index) => (
//             console.log(review),
//             <Review review={review} />
//         ))}
//         </div>
//         <button className="add-review-button" onClick={() => setShowForm(true)}>
//         Add Review
//         </button>

//         {showForm && (
//         <form className="review-form" onSubmit={handleFormSubmit}>
//             <div>
//             <label>Name:</label>
//             <input
//                 type="text"
//                 name="name"
//                 value={newReview.name}
//                 onChange={handleInputChange}
//                 required
//             />
//             </div>
//             <div>
//             <label>Subject:</label>
//             <select
//               name="subject"
//               value={newReview.subject}
//               onChange={handleInputChange}
//               required
//             >
//               <option value="">Select a subject</option>
//               <option value="עומסים">עומסים</option>
//               <option value="אירועים">אירועים</option>
//               <option value="מבצעים">מבצעים</option>
//               <option value="תקלות">תקלות</option>
//             </select>
//           </div>
//             <div>
//             <label>Content:</label>
//             <textarea
//                 name="content"
//                 value={newReview.content}
//                 onChange={handleInputChange}
//                 required
//             />
//             </div>
//             <button type="submit">Submit Review</button>
//         </form>
//         )}
//     </div>
//     );
// }

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReviewsSection = ({ mallName }) => {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState({ name: '', subject: '', body: '' });
    const baseUrl = 'http://localhost:3000/malls/';

    const fetchReviews = async () => {
        try {
            const response = await axios.get(`${baseUrl}${mallName}/reviews`);
            setReviews(response.data); // array of reviews
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };

    useEffect(() => { // fetch reviews when the mallName changes
        fetchReviews();
    }, [mallName]);

    const handleInputChange = (e) => { // update newReview state when input changes
        const { name, value } = e.target; // e.target is the input element
        setNewReview(prevState => ({ ...prevState, [name]: value })); // update the newReview state to include the new value
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${baseUrl}${mallName}/reviews`, newReview); 
            fetchReviews(); // re-fetch all reviews after posting a new review
            setNewReview({ name: '', subject: '', body: '' });
        } catch (error) {
            console.error('Error posting review:', error);
        }
    };

    return (
        <div className="reviews-section">
            <h2>Reviews</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    value={newReview.name} 
                    onChange={handleInputChange} 
                    placeholder="Name" 
                    required 
                />
                <input 
                    type="text" 
                    name="subject" 
                    value={newReview.subject} 
                    onChange={handleInputChange} 
                    placeholder="Subject" 
                    required 
                />
                <textarea 
                    name="body" 
                    value={newReview.body} 
                    onChange={handleInputChange} 
                    placeholder="Review" 
                    required 
                />
                <button className="add-review-button" type="submit">Submit</button>
            </form>
            <div className="reviews-container">
                {reviews.map(review => (
                    <div key={review.id} className="review-container">
                        <div className="review-header">
                            <span>{review.subject}</span>
                            <span>{review.name}</span>
                        </div>
                        <div className="review-content">{review.body}</div>
                        <div className="review-timestamp">
                            {new Date(review.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewsSection;

