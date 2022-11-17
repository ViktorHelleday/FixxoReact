import React from 'react'
import leftImg from '../assets/images/pamelaReif.png'
import rightImg from '../assets/images/letsBe.png'

const InspoSection = () => {
  
  return (
    <section className="inspo">
        <div className="inspoLeft">
            <img src={leftImg} alt="Showcase" />
            <h1>Pamela Reif's</h1>
            <h2>Top Picks</h2>
            <button className="btn-theme">SHOP NOW</button>
        </div>
        <div className="inspoRight">
        <img src={rightImg} className="concious" alt="Showcase" />
            <h1>Let's Be</h1>
            <h2>Concious</h2>
            <button className="btn-theme">FLASH SALE</button>
        </div>
    </section>
  )
}

export default InspoSection