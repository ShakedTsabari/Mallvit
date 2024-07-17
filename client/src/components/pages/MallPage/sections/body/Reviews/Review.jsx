// import React from 'react';
// import './Review.css';

// const Review = ({ review }) => {
//     const { name, subject, body , timestamp} = review;
//     const curTimestamp = new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     return (
//         <div className="review-container">
//             <div className="review-header">
//                 <h3>
//                 <strong>{subject}</strong> | {name}
//                 </h3>
//             </div>
//             <div className="review-content">{body}</div>
//             <div className="review-timestamp">{curTimestamp}</div>
//         </div>
//     );
// };

// export default Review;

import React, { useState } from 'react';
import './Review.css';

const Review = ({ review, mallName}) => {
    const [comments, setComments] = useState(review.comments);
    const [newComment, setNewComment] = useState({ name: '', body: '' });
    const { name, subject, body , timestamp, _id} = review;
    const curTimestamp = new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const baseUrl = 'http://localhost:3000/malls/';

    console.log('Review:', review); // For demonstration
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewComment({ ...newComment, [name]: value ,timestamp: new Date()});
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const url = `${baseUrl}${mallName}/reviews/${_id}/comments`;
            console.log('Posting to URL:', url);
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newComment),
            });
            // if (!response.ok) {
            //     throw new Error('Network response was not ok');
            // }
            const data = await response.json();
            console.log('New Comment Submitted:', newComment); // For demonstration
            if(data){
                setComments((prevComments) => [...prevComments, newComment]);
                setNewComment({ name: '', body: '' });
            }
        }
        catch(err){
            console.error(err);
        }     
    };




    return (
        <div className="review-container">
            <div className="review-header">
                <h3>
                    <strong>{subject}</strong> | {name}
                </h3>
            </div>
            <div className="review-content">{body}</div>
            <div className="review-timestamp">{curTimestamp}</div>
            <div className="comments-container">
                <form onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={newComment.name}
                        onChange={handleInputChange}
                    />
                    <textarea
                        name="body"
                        placeholder="Your Comment"
                        value={newComment.body}
                        onChange={handleInputChange}
                    />
                    <button type="submit">Add Comment</button>
                </form>
                {comments.map((comment) => (
                    <div key={comment._id} className="comment-container">
                        <div className="comment-header">
                <h3>
                    name: {comment.name} | body: {comment.body}
                </h3>
            </div>
                    </div>
                ))}
            </div>
        </div>
    );

};

export default Review;