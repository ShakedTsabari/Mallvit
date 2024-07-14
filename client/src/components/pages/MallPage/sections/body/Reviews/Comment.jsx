// import React, { useState } from 'react';
// import './Comment.css';

// const Comment = ({ comments, addComment }) => { 
//     // comments: array of comments
//     // addComment: function to add a new comment
//   const [newComment, setNewComment] = useState(''); 

  
//   const handleInputChange = (e) => {
//     setNewComment(e.target.value); // set newComment to the value of the input field 
//   };

//   const handleAddComment = () => {
//     if (newComment.trim() !== '') { // if newComment is not empty
//       addComment(newComment); // add newComment to the comments array
//       setNewComment('');
//     }
//   };

//   return (
//     <div className="comments-section">
//       <div className="comments-list">
//         {comments.map((comment, index) => (
//           <div key={index} className="comment-item">
//             {comment}
//           </div>
//         ))}
//       </div>
//       <div className="comment-form">
//         <textarea
//           value={newComment}
//           onChange={handleInputChange}
//           placeholder="Add a comment..."
//         ></textarea>
//         <button onClick={handleAddComment}>Add Comment</button>
//       </div>
//     </div>
//   );
// };

// export default Comment;
