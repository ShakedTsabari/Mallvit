import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Filter out undefined or null floors
  const floors = Array.from(new Set(mall.stores.map(store => store.floor).filter(floor => floor != "")));

  return (
    <Box sx={{ bgcolor: 'background.paper', width: '100%', position: 'relative', minHeight: 200 }}>
      <AppBar sx={{width: '70%',  display: 'flex', justifyContent: 'flex-end', marginLeft: 'auto'}} position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="floor tabs"
        >
          {floors.map((floor, index) => (
            <Tab label={`${floor}`} {...a11yProps(index)} key={index} />
          ))}
        </Tabs>
      </AppBar>
      {floors.map((floor, index) => (
        <TabPanel value={value} index={index} key={index}>
          <div className="store-container">
            {mall.stores
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
