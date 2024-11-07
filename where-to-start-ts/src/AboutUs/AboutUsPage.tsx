import React from 'react';
//import './index.css';
import AboutUsBackgroundImage from '../assets/AboutUsBackground.jpg';

function AboutUs() {
  return (
    <div
      className="background-container"
      style={{ backgroundImage: `url(${AboutUsBackgroundImage})` }}
    >
      <div className="content-box about-box">
        <h2>About Us (TBD)</h2>x
        <p>
          Lorem ipsum dolor sit amet consectetur. Sed nibh lacus diam in nisi. Sed adipiscing nisi id faucibus diam enim convalis egestas dictumst.
          Posuere et elit cursus euismod consectetur blandit eros facilisi. A ornare sapien viverra adipiscing pellentesque metus sem eu. (placeholder texts)
        </p>
      </div>
      <div className="content-box values-box">
        <h2>Our Core Values</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Sed nibh lacus diam in nisi. Sed adipiscing nisi id faucibus diam enim convalis egestas dictumst.
          Posuere et elit cursus euismod consectetur blandit eros facilisi. A ornare sapien viverra adipiscing pellentesque metus sem eu. (placeholder texts)
        </p>
      </div>
    </div>
  );
}

export default AboutUs;