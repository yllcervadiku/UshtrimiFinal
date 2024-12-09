import React from "react";
import "./Hero.scss";
import heroimage from "../../assets/slider-img.png"

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>CRYPTO <br /> CURRENCY</h1>
        <p>
          Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam
          fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat
          molestias, veniam, vel architecto veritatis delectus repellat modi
          impedit sequi.
        </p>
        <button className="btn">Read More</button>
      </div>
      <div className="hero-image">
        <img
          src={heroimage}
          alt="Floating crypto illustration"
          className="floating"
        />
      </div>
      <div className="hero-curve">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="curve-svg"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,290L60,281.3C120,273,240,257,360,245.3C480,233,600,225,720,234.7C840,245,960,273,1080,273.3C1200,273,1320,245,1380,229.3L1440,214L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
