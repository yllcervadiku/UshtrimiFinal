import React from 'react';
import './style.css';
import aboutimg from "../../assets/about-img.png"

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us__container">
        <h2 className="about-us__title">About <span>Us</span></h2>
        <p className="about-us__subtitle">
          Magni quod blanditiis non minus sed aut voluptatem illum quisquam aspernatur ullam vel beatae rerum ipsum voluptatibus
        </p>
        <div className="about-us__content">
          <div className="about-us__image">
            <img src={aboutimg} alt="Finexo Illustration" />
          </div>
          <div className="about-us__text">
            <h3>We Are Finexo</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
            </p>
            <p>
              Molestiae odio earum non qui cumque provident voluptates, repellendus exercitationem, possimus at iste corrupti officiis unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam ab omnis quasi expedita.
            </p>
            <button className="about-us__button">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
