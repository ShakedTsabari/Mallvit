import './AboutSection.css'
export default function AboutSecion(){
    const handleScroll = (id) => (e) => {
        e.preventDefault();
        const nextSection = document.getElementById(id);
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return(
        <div className='about'>
            <div className="about-image">
                <img src="https://static.wixstatic.com/media/11062b_7eaeffa2f9cf481a9fecc14787cbb470~mv2.jpg/v1/fill/w_538,h_556,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/pexels-matheus-natan-3297593-(1)%20(2).jpg" alt="About Mallvit" />
            </div>
            <div className="about-text">
                <h2>About Mallvit</h2>
                <h3>Our Journey</h3>
                <p>Discover the story of Mallvit. Learn about our passion for creating a vibrant shopping experience that caters to all. From our humble beginnings to becoming a hub for fashion, entertainment, and dining, we strive to exceed your expectations. Immerse yourself in our world where every visit is an adventure.</p>
                <button className="explore-button" type="button">Explore More</button>
            </div>
        </div>
    )
}