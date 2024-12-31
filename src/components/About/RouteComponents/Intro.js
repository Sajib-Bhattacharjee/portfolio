import React from "react";

import "../../../styles/About/Route/Intro.scss";
const Intro = () => {
  return (
    <>
      <div className="about-intro">
        <div className="about-intro__container">
          <div className="about-intro__header">
            <h2 className="about-intro__number">
              0<span>1</span>
            </h2>
            <h1 data-aos="fade-down" data-aos-offset="0">
              H<span>ello</span>.
            </h1>
          </div>
          <div className="about-intro__description">
            <p data-aos="fade-right">
              I am <span>Sajib Bhattacharjee</span>
            </p>
            <p data-aos="fade-right" data-aos-delay="200">
              I enjoy building websites and always enthusiastic about creating
              new front-end features.
            </p>
            <p data-aos="fade-right" data-aos-delay="400">
              Passionate front-end Developer with more than 1.5 years of
              experience in developing highly adaptive and responsive websites
              using React and Vue.
            </p>
            <p data-aos="fade-right" data-aos-delay="600">
              I also have basic understanding of server side development using
              Node.js, Express.js and MongoDB
            </p>
            <p data-aos="fade-right" data-aos-delay="800">
              💻 Front-End Enthusiast: Skilled in building dynamic and engaging
              user interfaces with modern frameworks like React and Vue. <br />
              🌐 Responsive Design: Dedicated to crafting highly adaptive
              websites that look great on any device.
              <br />
              ✨ Creative Mindset: Always excited to implement new features and
              enhance user experiences.
              <br />
              🔧 Tech Stack: Proficient in HTML, CSS, JavaScript, React, and
              Vue.js. <br />
              🌱 Backend Basics: Familiar with server-side technologies like
              Node.js, Express.js, and MongoDB. <br />
              📚 Lifelong Learner: Continuously improving skills and exploring
              the latest web development trends. 🤝 Collaborative Spirit:
              Thrives in teamwork and enjoys coll
              <br />
              aborating on innovative projects. <br />
              🚀 Goal-Oriented: Aiming to create seamless and impactful digital
              solutions for users. <br />
              🎯 Vision: Bridging the gap between design and functionality with
              modern web practices. <br />
              💡 Motto: Innovate, adapt, and deliver exceptional web
              experiences.
            </p>

            <div className="about-intro__emoji">:&nbsp;)</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
