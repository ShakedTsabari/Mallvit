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
                <p> While navigating the maze-like aisles of a local mall, three computer science students sparked an idea born out of a common frustration: getting lost. 
                    This challenge inspired us to create Mallvit, a website for indoor mall navigation, initially developed as our university final project. 
                    <br></br>
                    <br></br>
                    Driven by our passion for technology and problem-solving, we transformed Mallvit into a dynamic platform that enhances shopping experiences by ensuring no visitor ever feels lost again.
                    <br></br>
                    <br></br> 
                    Building on our initial success, we expanded Mallvit’s vision to foster a vibrant community centered around malls. Now, users can not only navigate effortlessly but also share and discover real-time updates on sales, traffic, and events, making every mall visit uniquely informative and interactive.
                </p>
            </div>
        </div>
    )
}