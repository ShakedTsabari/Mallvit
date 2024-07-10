import { Routes, Route, } from 'react-router-dom';
import './MallPage.css';
import MallHeader from './sections/Header/MallHeader';
import { useMall } from '../../../context/MallContext';
import StoresSection from './sections/body/Stores/StoresSection';
import MapSection from './sections/body/Map/MapSection';
import ReviewsSection from './sections/body/Reviews/ReviewsSection';
import NavBar from './sections/navBar/NavBar';
import ForumSection from './sections/body/Forum/Forum';
import {useState, useEffect} from 'react';
import Hostages from '../AppHomePage/Hostages';


const MallPage = () => {
  const { mall } = useMall();
  const [reviews, setReviews] = useState([]);
  const [mallObject, setMallObject] = useState({});
  const baseUrl = 'http://localhost:3000/malls/';
  useEffect(() => {
    const fetchMallObject = async () => {
        try {
            const url = `${baseUrl}${mall.title}`;
            const response = await fetch(url); 
            const data = await response.json();
            setMallObject(data); // Update the malls state with fetched data
        } catch (error) {
            console.error('Failed to fetch malls:', error);
        }
    };
    const fetchReviews = async () => {
      try {
        const url = `${baseUrl}${mall.title}/reviews`;
        const response = await fetch(url);
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Failed to fetch reviews:', error);
      }
    };
    fetchReviews();
    fetchMallObject(); // Call the fetch function when the component mounts
}, []); // Empty dependency array means this effect will only run once after the initial render



return (
  <div>
    <NavBar mall={mallObject} />
    <MallHeader mall={mallObject} />
    <Hostages sx={{display: 'flex', justifyContent: 'flex-end', marginLeft: 'auto'}}/>
    <div className="content-container-mall">
      <Routes>
        <Route path="/" element={<ForumSection />} />
        <Route path="stores" element={<StoresSection mall={mallObject} />} />
        <Route path="map" element={<MapSection mapSrc={mallObject.mapUrl} />} />
        <Route path="/r" element={<ReviewsSection mall={mallObject} />} />
      </Routes>
    </div>
  </div>
);
};

export default MallPage;
