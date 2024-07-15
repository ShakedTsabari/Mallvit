import React, { useState, useEffect } from 'react';
import './ForumSection.css';
import PostsReview from './PostsReview';
import ForumGrid from './ForumGrid';
import PostForm from './PostForm';
import FilterBox from './FilterBox';
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { fetchPosts } from '../../../../../../api/posts';
import { addPost } from '../../../../../../api/posts';
import { Modal, Box, Typography, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ForumSection = ({ mall }) => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showPostFormModal, setShowPostFormModal] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);

  useEffect(() => {
    const getAllPosts = async() => {
      if (mall && mall.title) {
        const partialUrl = `${encodeURIComponent(mall.title)}/posts`;
        const posts = await fetchPosts(partialUrl);
        if (posts){
          setPosts(posts);
          setFilteredPosts(posts);
        }
      }
    }

    getAllPosts();
  }, [mall]);

  const handlePostSubmit = async (newPost) => {
    if (mall && mall.title) {
      const partialUrl = `${encodeURIComponent(mall.title)}/posts`;
      const data = await addPost(partialUrl, newPost);
      if (data) {
        setPosts((prevPosts) => [newPost, ...prevPosts]);
        setFilteredPosts((prevPosts) => [newPost, ...prevPosts]);
        setSelectedPost(null); // Deselect post
        setShowPostFormModal(false); // Close modal after submitting the post
      }
    }
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleFilterChange = (newFilters) => {
    setActiveFilters(newFilters);

    if (newFilters.length === 0) {
      setFilteredPosts(posts);
      return;
    }

    let filtered = posts;
    newFilters.forEach(({ type, value }) => {
      filtered = filtered.filter((post) => {
        switch (type) {
          case 'time':
            return new Date(post.timestamp) >= value;
          case 'subject':
            return post.subject.toLowerCase().includes(value.toLowerCase());
          case 'store':
            return post.store.toLowerCase().includes(value.toLowerCase());
          case 'author':
            return post.name.toLowerCase().includes(value.toLowerCase());
          default:
            return true;
        }
      });
    });

    setFilteredPosts(filtered);
  };

  const timeMap = {
    '1 hour ago': 1,
    '3 hours ago': 3,
    '5 hours ago': 5,
    '8 hours ago': 8,
    '16 hours ago': 16
  };

  return (
    <div className="forum-section">
      <div className="active-filters-container">
        <Button sx={{
          '&:hover': {
            backgroundColor: '#e0e0e0' // Custom hover color
          }
        }} onClick={() => handleFilterChange([])}>Clear All Filters</Button>
        {activeFilters.map((filter, index) => (
          <div key={index} className="filter-chip">
            <span>{filter.type}: {filter.label || filter.value}</span>
            <IconButton size="small" onClick={() => handleFilterChange(activeFilters.filter(f => f !== filter))}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </div>
        ))}
      </div>
      <div className="forum-grid">
        <PostsReview posts={filteredPosts} onPostClick={handlePostClick} selectedPost={selectedPost} />
        <ForumGrid selectedPost={selectedPost} mallName={mall.title} />
      </div>
      <div className="action-buttons">
        <FilterBox filters={activeFilters} onFilterChange={handleFilterChange} mall={mall} />
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
