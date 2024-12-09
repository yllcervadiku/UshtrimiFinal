import React, { useState } from "react";
import "./style.scss";
import image1 from "../../assets/client1.jpg"
import image2 from "../../assets/client2.jpg"


const testimonials = [
  {
    id: 1,
    name: "LusDen",
    position: "CEO",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    image: `${image1}`,
  },
  {
    id: 2,
    name: "Zen Court",
    position: "Senior Developer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
    image: `${image2}`,
  },
  {
    id: 3,
    name: "John Doe",
    position: "Junior Developer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
    image: `${image1}`,
  },
  {
    id: 4,
    name: "Jane Smith",
    position: "Devops",
    text: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
    image: `${image2}`,
  },
  {
    id: 5,
    name: "Sam Wilson",
    position: "magna aliqua. Ut",
    text: " incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
    image: `${image1}`,
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="testimonial-slider">
      <h2 className="testimonial-slider__title">
        What says our <span>Customers</span>
      </h2>
      <div className="testimonial-slider__content">
        {testimonials.map((testimonial, index) => {
          const isVisible =
            index === currentIndex ||
            index === (currentIndex + 1) % testimonials.length;

          return (
            <div
              key={testimonial.id}
              className={`testimonial-slider__card ${
                isVisible ? "visible" : "hidden"
              }`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-slider__image"
              />
              <h3 className="testimonial-slider__name">
                {testimonial.name}
              </h3>
              <p className="testimonial-slider__position">
                {testimonial.position}
              </p>
              <p className="testimonial-slider__text">
                {testimonial.text}
              </p>
            </div>
          );
        })}
      </div>
      <div className="testimonial-slider__controls">
        <button onClick={handlePrev}>&lt;</button>
        <button onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
