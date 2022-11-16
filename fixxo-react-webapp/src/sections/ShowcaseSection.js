import React from 'react'
import scimg1 from '../assets/images/showcaseImgLeft.png';
import scimg2 from '../assets/images/showcaseImgRight.png';

const ShowcaseSection = () => {
  return (
    <section className="showcase">
        <div className="container-fluid">
            <img className="scimgleft" src={scimg1} alt="Showcase" />
            <div className="middlecontent">
                <h1>SALE UP TO 50% OFF</h1>
                <p>Online shopping with free home delivery over $100</p>
                <button type="button" className="btn-theme">SHOP NOW</button>
            </div>
            <img className="scimgright" src={scimg2} alt="Showcase" />
        </div>
    </section>
  )
}

export default ShowcaseSection