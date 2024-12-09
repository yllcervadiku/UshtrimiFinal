import React from "react";
import "./style.scss";

const services = [
  {
    id: 1,
    title: "CURRENCY WALLET",
    description:
      "Fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
    icon: "https://via.placeholder.com/100", // Replace with actual service icon URL
  },
  {
    id: 2,
    title: "SECURITY STORAGE",
    description:
      "Fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
    icon: "https://via.placeholder.com/100", // Replace with actual service icon URL
  },
  {
    id: 3,
    title: "EXPERT SUPPORT",
    description:
      "Fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
    icon: "https://via.placeholder.com/100", // Replace with actual service icon URL
  },
];

const Services = () => {
  return (
    <section className="services">
      <h2 className="services__title">
        Our <span>Services</span>
      </h2>
      <p className="services__subtitle">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration.
      </p>
      <div className="services__grid">
        {services.map((service) => (
          <div key={service.id} className="services__card">
            <img
              src={service.icon}
              alt={service.title}
              className="services__icon"
            />
            <h3 className="services__card-title">{service.title}</h3>
            <p className="services__description">{service.description}</p>
            <a href="#!" className="services__link">
              Read More
            </a>
          </div>
        ))}
      </div>
      <button className="services__button">View All</button>
    </section>
  );
};

export default Services;
