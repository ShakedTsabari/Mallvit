import { malls } from '../../../utils/data';
import './AppHomePage.css';
import MallListSection from './sections/MallList/MallListSection';
import AboutSection from './sections/About/AboutSection';
import Header from './sections/Headers/Header';
import ScrollingArrow from '../../partials/ScrollingArrow';
import Hostages from './Hostages';
import FavoriteMall from './FavoriteMall';
import { useState, useEffect } from 'react';

export default function AppHomePage() {
    const [favorite, setFavorite] = useState(null); // State to manage the favorite mall

    // Load favorite from local storage on initial render
    useEffect(() => {
        const savedFavorite = localStorage.getItem('favoriteMall');
        if (savedFavorite) {
            setFavorite(JSON.parse(savedFavorite));
        }
    }, []);

    const handleFavorite = (mall) => {
        setFavorite(mall);
        localStorage.setItem('favoriteMall', JSON.stringify(mall)); // Save favorite to local storage
    };

    return (
        <>
            <div>
                <Header/>
                <Hostages/>
                <div id="section1">
                    <div className="staggered-section staggered-left">
                    <FavoriteMall favorite={favorite} />
                        <div className="staggered-content">
                            <MallListSection mallsList={malls} favorite={favorite} handleFavorite={handleFavorite} />
                        </div>
                        <ScrollingArrow targetId="section2" tooltip="scrolling down"/>
                    </div>
                </div>
                <div id="section2">
                    <div className="staggered-section staggered-right">
                        <div className="staggered-content">
                            <AboutSection />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
