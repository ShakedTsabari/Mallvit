import './MallHeader.css';
import ScrollingArrow from '../../../../partials/ScrollingArrow';

export default function MallHeader({ mall }) {
  return (
    <>
    <div className="hero-section-mall">
      <div className="hero-image-mall">
        <picture>
          <img src={mall.img} alt={mall.title} />
        </picture>
      </div>
      <div className="hero-text-mall">
        <h1 className="hero-heading-mall">{mall.title}</h1>
        <p className="hero-description-mall">Welcome to the mall</p>
      </div>
    </div>
    {/* <ScrollingArrow targetId="section1" tooltip="find center" /> */}
    </>
  );
}
