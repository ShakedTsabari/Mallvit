import { malls } from '../../utils/data';
import './AppHomePage.css';
import MallList from '../partials/MallList';

export default function AppHomePage() {
    const handleScroll = (e) => {
        e.preventDefault();
        const nextSection = document.getElementById('next-section');
        nextSection.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <>
            <div>
                <div className="hero-section">
                    <div className="hero-text">
                        <h2 className="hero-heading">Mallvit</h2>
                        <p className="hero-description">Finding your desires ASAP</p>
                        {/* <a href="https://www.simon.com/mall" className="hero-button">FIND A CENTER</a> */}
                    </div>
                    <picture className="hero-image">
                        <source media="(min-width: 768px)" srcset="https://cdn-fsly.yottaa.net/555a305b2bb0ac71b9002d22/4a6e24e07e33013b5e040ead9ecbf798.yottaa.net/v~4b.315.0.0/homepage_videos/simonherodesktoppropertyphotos.gif?yocs=D_NA_" />
                        <img src="https://cdn-fsly.yottaa.net/555a305b2bb0ac71b9002d22/4a6e24e07e33013b5e040ead9ecbf798.yottaa.net/v~4b.315.0.0/htmlcontent/SIMON.COM-HERO-MOBILE_1_20240118163812.gif?yocs=D_NA_" alt="Discover Simon" />
                    </picture>
                    <a class="scroll-arrow" href="#next-section" title="Find Center" onClick={handleScroll}>
                        <div class="scroll-arrow-circle">
                            <svg role="img" aria-label="Scroll Down" width="32" height="32" viewBox="0 0 24 24">
                                <path d="M12 16l-6-6h12z"/>
                            </svg>
                        </div>
                    </a>
                </div>
                <div id="next-section">
                    <MallList mallsList={malls}></MallList>
                    <section className="about">
                        <h2>About Mallvit</h2>
                        <p>Mallvit is your ultimate indoor navigation solution for shopping malls. Navigate effortlessly through any mall and find exactly what you need with ease.</p>
                    </section>
                </div>
            </div>
        </>
    );
}
