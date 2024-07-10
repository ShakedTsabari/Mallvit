
export default function MallHeader({mall}){
    return (
        <div>
            <div className="hero-section">
                <div className="hero-image">
                    <picture>
                        <img src={mall.img} alt={mall.title} />
                    </picture>
                </div>
                <div className="hero-text">
                <h1 className="hero-heading">{mall.title}</h1>
                <p className="hero-description">Welcome to the mall</p>
                </div>
            </div>
        </div>
    )
}