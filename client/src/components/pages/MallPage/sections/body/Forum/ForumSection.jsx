import React, { useState, useEffect } from 'react';
import './ForumSection.css';
import PostsReview from './PostsReview';
import ForumGrid from './ForumGrid';
import PostForm from './PostForm';
import FilterBox from './FilterBox';
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Modal, Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ForumSection = ({ mall }) => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showPostFormModal, setShowPostFormModal] = useState(false);
  const baseUrl = 'http://localhost:3000/malls/';

  const fetchPosts = async () => {
    if (mall && mall.title) {
      try {
        const url = `${baseUrl}${encodeURIComponent(mall.title)}/posts`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Failed to fetch posts: ${response.status} ${response.statusText}`);
        }

        const posts = await response.json();
        setPosts(posts);
        setFilteredPosts(posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [mall]);

  const handlePostSubmit = async (newPost) => {
    if (mall && mall.title) {
      try {
        const url = `${baseUrl}${encodeURIComponent(mall.title)}/posts`;
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newPost),
        });

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        if (data) {
          setPosts((prevPosts) => [newPost, ...prevPosts]);
          setFilteredPosts((prevPosts) => [newPost, ...prevPosts]);
          setSelectedPost(null); // Deselect post
          setShowPostFormModal(false); // Close modal after submitting the post
        }
      } catch (error) {
        console.error('Error submitting the post:', error);
      }
    }
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleFilterChange = (filterType, filterValue) => {
    let filtered = posts;
    if (filterType && filterValue) {
      filtered = posts.filter((post) => {
        switch (filterType) {
          case 'time':
            return new Date(post.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).includes(filterValue);
          case 'subject':
            return post.subject.toLowerCase().includes(filterValue.toLowerCase());
          case 'store':
            return post.store.toLowerCase().includes(filterValue.toLowerCase());
          case 'author':
            return post.name.toLowerCase().includes(filterValue.toLowerCase());
          default:
            return true;
        }
      });
    }
    setFilteredPosts(filtered);
  };

  return (
    <div className="forum-section">
      <div className="forum-grid">
          <PostsReview posts={filteredPosts} onPostClick={handlePostClick} selectedPost={selectedPost} />
        <ForumGrid selectedPost={selectedPost} mallName={mall.title} />
      </div>
      <div className="action-buttons">
        <FilterBox onFilterChange={handleFilterChange} />
        <Tooltip title="Add Post" placement="left">
          <Fab color="primary" onClick={() => setShowPostFormModal(true)}
            sx={{
              backgroundColor: '#7274b0', // Custom background color
              '&:hover': {
                backgroundColor: '#4d556f' // Custom hover color
              }
            }} >
            <AddIcon />
          </Fab>
        </Tooltip>
      </div>
      <Modal
        open={showPostFormModal}
        onClose={() => setShowPostFormModal(false)}
        aria-labelledby="post-form-modal-title"
        aria-describedby="post-form-modal-description"
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box className="modal-box">
          <div className="modal-header">
            <Typography variant="h6" component="h2">
              Add New Post
            </Typography>
            <IconButton onClick={() => setShowPostFormModal(false)}>
              <CloseIcon />
            </IconButton>
          </div>
          <PostForm onPostSubmit={handlePostSubmit} mall={mall} />
        </Box>
      </Modal>
    </div>
  );
};

export default ForumSection;