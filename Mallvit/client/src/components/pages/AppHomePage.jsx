import { malls } from '../../utils/data';
import './AppHomePage.css';
import MallList from '../partials/MallList';

export default function AppHomePage() {
    return (
        <>
            <div>
                <header>
                    <section className="homepage-picture">
                        <picture style={{ width: '100%', height: '30%' }}>
                            <source media="(min-width: 768px)" srcSet="https://cdn-fsly.yottaa.net/555a305b2bb0ac71b9002d22/4a6e24e07e33013b5e040ead9ecbf798.yottaa.net/v~4b.315.0.0/homepage_videos/simonherodesktoppropertyphotos.gif?yocs=D_NA_" />
                            <img alt="home-page-pic" id="heroImage" src="https://cdn-fsly.yottaa.net/555a305b2bb0ac71b9002d22/4a6e24e07e33013b5e040ead9ecbf798.yottaa.net/v~4b.315.0.0/htmlcontent/SIMON.COM-HERO-MOBILE_1_20240118163812.gif?yocs=D_NA_" style={{ width: '100%', height: '30%' }} />
                        </picture>
                    </section>
                </header>
                <MallList mallsList={malls}></MallList>
                <section className="about">
                    <h2>About Mallvit</h2>
                    <p>Mallvit is your ultimate indoor navigation solution for shopping malls. Navigate effortlessly through any mall and find exactly what you need with ease.</p>
                </section>
            </div>
        </>
    );
}