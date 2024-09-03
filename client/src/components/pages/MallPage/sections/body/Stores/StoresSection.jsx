import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FilterAltIconOff from '@mui/icons-material/FilterAltOff';
import './StoresSection.css'; 

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function StoresSection({ mall }) {
  const [value, setValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter out undefined or null floors
  const floors = Array.isArray(mall?.stores) ? Array.from(new Set(mall.stores.map(store => store.floor))) : [];
  const filteredStores = Array.isArray(mall?.stores) ? mall.stores.filter(store =>
    store.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  return (
    <Box sx={{ bgcolor: 'background.paper', width: '100%', position: 'relative', minHeight: 200 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px' }}>
          <div className="search-container">
            <input
              className="input"
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search Stores"
            />
            <svg viewBox="0 0 24 24" className="search__icon">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
                </path>
              </g>
            </svg>
          </div>
        <AppBar sx={{ width: '70%', display: 'flex', justifyContent: 'flex-end', marginLeft: 'auto' }} position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            scrollButtons="auto"
            aria-label="floor tabs"
          >
            <Tab 
              icon={<FilterAltIconOff />} 
              label="" 
              {...a11yProps(0)} 
              sx={{ '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)' } }}
            />
              {floors.map((floor, index) => (
                <Tab sx={{ '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)' } }}
                label={floor !== "" ? `${floor}` : "אין מידע על קומה"} 
                {...a11yProps(index + 1)} 
                key={index} />
            ))}
          </Tabs>
        </AppBar>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="store-container">
          {filteredStores.map((store, storeIndex) => (
            <div className="store-card" key={storeIndex}>
              <div className="store-logo">
                <img src={store.img} alt={store.name} />
              </div>
              <div className="store-details">
                <h3 className="store-name">{store.name}</h3>
                {store.phoneNumber && (
                  <p className="store-phone-number"><strong>Phone number:</strong> {store.phoneNumber}</p>
                )}
                <p className="store-floor"><strong>Floor:</strong> {store.floor}</p>
              </div>
            </div>
          ))}
        </div>
      </TabPanel>
      {floors.map((floor, index) => (
        <TabPanel value={value} index={index + 1} key={index}>
          <div className="store-container">
            {filteredStores
              .filter(store => store.floor === floor)
              .map((store, storeIndex) => (
                <div className="store-card" key={storeIndex}>
                  <div className="store-logo">
                    <img src={store.img} alt={store.name} />
                  </div>
                  <div className="store-details">
                    <h3 className="store-name">{store.name}</h3>
                    {store.phoneNumber && (
                      <p className="store-phone-number"><strong>Phone number:</strong> {store.phoneNumber}</p>
                    )}
                    <p className="store-floor"><strong>Floor:</strong> {store.floor}</p>
                  </div>
                </div>
              ))}
          </div>
        </TabPanel>
      ))}
    </Box>
  );
}