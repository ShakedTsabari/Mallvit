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


const MallPage = () => {
  const { mall } = useMall();
  const [reviews, setReviews] = useState([]); // State for reviews
  const [mallObject, setMallObject] = useState({}); // Initialize mall state as an empty object
  console.log(mall);
  const baseUrl = 'http://localhost:3000';
  // const ayalonMall = malls.find(mall => mall.title === 'אילון');
  const handleScroll = (e) => {
    e.preventDefault();
    const nextSection = document.getElementById('next-section');
    nextSection.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    const fetchMallObject = async () => {
        try {
            const url = baseUrl + '/malls/' + mall.title;
            const response = await fetch(url); 
            const data = await response.json();
            console.log(data)
            setMallObject(data); // Update the malls state with fetched data
        } catch (error) {
            console.error('Failed to fetch malls:', error);
        }
    };
    const fetchReviews = async () => {
      try {
        const url = baseUrl + '/malls/' + mall.title + '/reviews';
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
      <MallHeader mall={mallObject} />
      <a href="#next-section" className="scroll-arrow" onClick={handleScroll}>
        <div className="scroll-arrow-circle">
          <svg viewBox="0 0 24 24">
            <path d="M12 16l-6-6h12z" />
          </svg>
        </div>
      </a>
      <div id="next-section">
        <NavBar mall={mallObject} />
        <div className="content-container">
          <div className="about-mall">
            <h2>{`About ${mallObject.title}`}</h2>
            {/* <p>{mall.info}</p> */}
          </div>
          <main className="mall-content">
          <Routes>
            <Route path="/r" element={<ForumSection/>}/>
            <Route path="/" element={<ReviewsSection mall={mallObject} setReviews={setReviews} />} />
            <Route path="stores" element={<StoresSection mall={mallObject} />} />
            <Route path="map" element={<MapSection mapSrc={mallObject.mapUrl} />} />
          </Routes>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MallPage;
