import React, { useState } from 'react';
import './FilterBox.css';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Modal, Box, Button, Tooltip, Fab, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const FilterBox = ({ onFilterChange }) => {
  const [showModal, setShowModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [filters, setFilters] = useState([]);

  const handleFilterIconClick = () => {
    setShowModal(true);
  };

  const handleFilterButtonClick = (filter) => {
    setActiveFilter(filter);
  };

  const handleFilterInputChange = (e) => {
    setFilterValue(e.target.value);
  };

  const handleApplyFilter = () => {
    if (activeFilter && filterValue) {
      const newFilters = [...filters, { type: activeFilter, value: filterValue }];
      setFilters(newFilters);
      onFilterChange(newFilters);
      setActiveFilter('');
      setFilterValue('');
      setShowModal(false);
    }
  };

  const handleClearFilter = (filterToClear) => {
    const newFilters = filters.filter(filter => filter !== filterToClear);
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleClearAllFilters = () => {
    setFilters([]);
    onFilterChange([]);
  };

  return (
    <div>
      <Tooltip title="Filter Posts" placement="left">
        <Fab
          sx={{
            backgroundColor: '#d0eaff',
            '&:hover': {
              backgroundColor: '#b0d4ff',
            },
          }}
          onClick={handleFilterIconClick}
        >
          <FilterAltIcon />
        </Fab>
      </Tooltip>
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        aria-labelledby="filter-modal-title"
        aria-describedby="filter-modal-description"
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box className="modal-box">
          <div className="modal-header">
            <Typography variant="h6" component="h2">
              Choose Filter
            </Typography>
            <IconButton onClick={() => setShowModal(false)}>
              <CloseIcon />
            </IconButton>
          </div>
          <div className="filter-buttons">
            <Button onClick={() => handleFilterButtonClick('time')}>Time</Button>
            <Button onClick={() => handleFilterButtonClick('subject')}>Subject</Button>
            <Button onClick={() => handleFilterButtonClick('store')}>Store</Button>
            <Button onClick={() => handleFilterButtonClick('author')}>Author</Button>
          </div>
          {activeFilter && (
            <div className="filter-input">
              <input
                type="text"
                placeholder={`Enter ${activeFilter}`}
                value={filterValue}
                onChange={handleFilterInputChange}
              />
              <Button onClick={handleApplyFilter}>Apply</Button>
            </div>
          )}
        </Box>
      </Modal>
      {filters.length > 0 && (
        <div className="active-filters">
          <Button onClick={handleClearAllFilters}>Clear All Filters</Button>
          {filters.map((filter, index) => (
            <div key={index} className="filter-chip">
              <span>{filter.type}: {filter.value}</span>
              <IconButton onClick={() => handleClearFilter(filter)}>
                <CloseIcon />
              </IconButton>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterBox;
