import React, { useEffect, useState } from 'react';
import './PostsReview.css';
import PostCard from './PostCard';

const PostsReview = ({ posts, onPostClick, selectedPost }) => {
  const animalIcons = [
    '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯',
    '🦁', '🐮', '🐷', '🐸', '🐵', '🐔', '🐧', '🐦', '🐤', '🐣',
    '🐥', '🦆', '🦅', '🦉', '🦇', '🐺', '🐗', '🐴', '🦄', '🐝',
    '🐛', '🦋', '🐌', '🐞', '🐜', '🦟', '🦗', '🕷️', '🦂', '🐢',
    '🐍', '🦎', '🐙', '🦑', '🦐', '🦞', '🦀', '🐡', '🐠', '🐟'
  ];

  const [postsWithIcons, setPostsWithIcons] = useState([]);
  const [nameToIconMap, setNameToIconMap] = useState({});

  useEffect(() => {
    const postsWithAssignedIcons = posts.map(post => {
      const { name } = post;
      let animalIcon;

      if (nameToIconMap[name]) {
        animalIcon = nameToIconMap[name];
      } else {
        animalIcon = animalIcons[Math.floor(Math.random() * animalIcons.length)];
        setNameToIconMap(prevMap => ({ ...prevMap, [name]: animalIcon }));
      }

      return {
        ...post,
        animalIcon
      };
    });

    setPostsWithIcons(postsWithAssignedIcons);
  }, [posts, nameToIconMap]);

  return (
    <div className="posts-review">
      {postsWithIcons.length === 0 ? (
        <div className="no-posts">No posts found, feel free to be the first 😉</div>
      ) : (
        Array.isArray(postsWithIcons) && postsWithIcons.map((post, index) => (
          <PostCard 
            key={index} 
            post={post} 
            onClick={() => onPostClick(post)}
            isSelected={selectedPost && selectedPost.title === post.title}
          />
        ))
      )}
    </div>
  );
};

export default PostsReview;
