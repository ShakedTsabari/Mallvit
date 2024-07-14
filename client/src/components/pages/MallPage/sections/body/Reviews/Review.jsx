import React from 'react';
import './Review.css';

const Review = ({ review, mallName }) => {
    const [comments, setComments] = useState(review.comments || []);
    const { name, subject, body , timestamp} = review;
    const curTimestamp = new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    const handleComment = async (comment) => {
        const url = `http://localhost:3000/malls/${mall.title}/reviews${review.id}/comments`;
        try{
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(comment),
            });
            const data = await response.json();
            if(data){
                setComments([...comments, comment]);
            }
        }
        catch(err){
            console.error(err);
        }
    };
    
    return (
        <div className="review">
            <div className="review-header">
                <h3>{name}</h3>
                <h4>{subject}</h4>
                <p>{body}</p>
                <p>{curTimestamp}</p>
            </div>
            <div className="review-comments">
                <h4>Comments</h4>
                {comments.map((comment, index) => (
                    <div key={index} className="comment">
                        <h4>{comment.name}</h4>
                        <p>{comment.body}</p>
                        <p>{new Date(comment.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                    </div>
                ))}
            </div>
            <div className="comment-form">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Comment" />
                <button onClick={handleComment}>Submit</button>
            </div>
        </div>
    );
};
    
export default Review;