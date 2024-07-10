import ScrollingArrow from '../../../../partials/ScrollingArrow';


export default function Header(){
    return (
    <div className="hero-section">
        <div className="hero-text">
            <h2 className="hero-heading">Mallvit</h2>
            <p className="hero-description">Finding your desires ASAP</p>
        </div>
        <picture className="hero-image">
            <source media="(min-width: 768px)" srcSet="https://cdn-fsly.yottaa.net/555a305b2bb0ac71b9002d22/4a6e24e07e33013b5e040ead9ecbf798.yottaa.net/v~4b.315.0.0/homepage_videos/simonherodesktoppropertyphotos.gif?yocs=D_NA_" />
            <img src="https://cdn-fsly.yottaa.net/555a305b2bb0ac71b9002d22/4a6e24e07e33013b5e040ead9ecbf798.yottaa.net/v~4b.315.0.0/htmlcontent/SIMON.COM-HERO-MOBILE_1_20240118163812.gif?yocs=D_NA_" alt="Discover Simon" />
        </picture>
        <ScrollingArrow targetId="section1" tooltip="find center"/>
    </div>
    )
}