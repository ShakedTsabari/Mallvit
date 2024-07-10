import { malls } from '../../../utils/data';
import './AppHomePage.css';
import MallListSection from './sections/MallList/MallListSection';
import AboutSection from './sections/About/AboutSection';
import Header from './sections/Headers/Header';
import ScrollingArrow from '../../partials/ScrollingArrow';


export default function AppHomePage() {
    return (
        <>
            <div>
                <Header/>
                <div id="section1">
                    <div className="staggered-section staggered-left">
                        <div className="staggered-content">
                            <MallListSection mallsList={malls} />
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
