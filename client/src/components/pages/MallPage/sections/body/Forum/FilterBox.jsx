import React, { useState, useEffect } from 'react';
import './FilterBox.css';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Modal, Box, Button, Tooltip, Fab, IconButton, Typography, Select, MenuItem, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const timeOptions = [
  { label: "1 hour ago", value: 1 },
  { label: "3 hours ago", value: 3 },
  { label: "5 hours ago", value: 5 },
  { label: "8 hours ago", value: 8 },
  { label: "16 hours ago", value: 16 },
];

const FilterBox = ({ filters, onFilterChange, mall }) => {
  const [showModal, setShowModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [storeOptions, setStoreOptions] = useState([]);

  useEffect(() => {
    if (mall && mall.stores) {
      setStoreOptions(mall.stores.map(store => store.name));
    }
  }, [mall]);

  const handleFilterIconClick = () => {
    setShowModal(true);
  };

  const handleFilterButtonClick = (filter) => {
    setActiveFilter(filter);
    setFilterValue(''); // Clear previous filter value
  };

  const handleFilterInputChange = (e) => {
    const value = e.target.value;
    if (activeFilter === 'time') {
      setFilterValue(value);
    } else {
      setFilterValue(value);
    }
  };

  const handleApplyFilter = () => {
    if (activeFilter && filterValue) {
      let filter = { type: activeFilter, value: filterValue };
      if (activeFilter === 'time') {
        const selectedTime = timeOptions.find(option => option.label === filterValue);
        filter = { type: activeFilter, value: new Date(Date.now() - selectedTime.value * 60 * 60 * 1000), label: filterValue };
      }
      const newFilters = [...filters, filter];
      onFilterChange(newFilters);
      setActiveFilter('');
      setFilterValue('');
      setShowModal(false);
    }
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
              {activeFilter === 'subject' && (
                <Select
                  value={filterValue}
                  onChange={handleFilterInputChange}
                  displayEmpty
                  fullWidth
                >
                  <MenuItem value="" disabled>Select Subject</MenuItem>
                  <MenuItem value="Sales">Sales</MenuItem>
                  <MenuItem value="Traffic">Traffic</MenuItem>
                  <MenuItem value="Events">Events</MenuItem>
                  <MenuItem value="Food">Food</MenuItem>
                  <MenuItem value="Parking">Parking</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              )}
              {activeFilter === 'time' && (
                <Select
                  value={filterValue}
                  onChange={handleFilterInputChange}
                  displayEmpty
                  fullWidth
                >
                  <MenuItem value="" disabled>Select Time</MenuItem>
                  {timeOptions.map((option, index) => (
                    <MenuItem key={index} value={option.label}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              )}
              {activeFilter === 'store' && (
                <TextField
                  select
                  value={filterValue}
                  onChange={handleFilterInputChange}
                  fullWidth
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option value="" disabled>Select Store</option>
                  {storeOptions.map((store, index) => (
                    <option key={index} value={store}>
                      {store}
                    </option>
                  ))}
                </TextField>
              )}
              {activeFilter === 'author' && (
                <TextField
                  type="text"
                  placeholder="Enter author name"
                  value={filterValue}
                  onChange={handleFilterInputChange}
                  fullWidth
                />
              )}
              <Button onClick={handleApplyFilter}>Apply</Button>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default FilterBox;
