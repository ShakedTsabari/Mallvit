import NavBar from "./NavBar"

export default function MallHeader({mall}){
    const handleScroll = (e) => {
        e.preventDefault();
        const nextSection = document.getElementById('next-section');
        nextSection.scrollIntoView({ behavior: 'smooth' });
      };
    return (
        <div>
            <div className="hero-section">
                <div className="hero-image">
                    <picture>
                        <img src="https://www.azrieligroup.com/wp-content/uploads/2021/01/az_header.jpg" alt="Ayalon Mall" />
                    </picture>
                </div>
                <div className="hero-text">
                <h1 className="hero-heading">{mall.name}</h1>
                <p className="hero-description">Welcome to the mall</p>
                <a href="#about" className="hero-button">Learn More</a>
                </div>
                <a href="#about" className="scroll-arrow" onClick={handleScroll}>
                <div className="scroll-arrow-circle">
                    <svg viewBox="0 0 24 24">
                    <path d="M12 16l-6-6h12z" />
                    </svg>
                </div>
                </a>
            </div>
            <div id="next-section">
                <div id="about" className="about">
                    <h2 >{`About ${mall.name}`}</h2>
                    {/* <p>{mall.info}</p> */}
                    <p>Ayalon Mall is a large shopping mall located in Ramat Gan, Israel. It is the first mall in Israel to have a large shopping complex outside the city center with a parking lot surrounding it.<br /> 
                    Ayalon Mall is also notable for its owner, David Azrieli, inventing the word for “mall” in Hebrew for this mall, “kanyon”.</p>
                </div>
                <NavBar mall={mall} />
            </div>
        </div>
    )
}