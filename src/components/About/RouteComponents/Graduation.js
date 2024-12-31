import React from "react";

import "../../../styles/About/Route/Graduation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const Graduation = () => {
  return (
    <>
      <div className="graduation">
        <div className="graduation__container">
          <div className="graduation__header">
            <h2 className="graduation__number">
              0<span>4</span>
            </h2>
            <h1 data-aos="fade-down" data-aos-offset="0">
              E<span>ngineering</span>.
            </h1>
          </div>

          <div className="graduation__description">
            <h1>North Western University, Khulna, Bangladesh.</h1>
            <h2>
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="internships__calendar"
              />
              &nbsp;&nbsp;01/01/2020 - 31/05/2024
            </h2>
            <p>
              🎓 Student of North Western University <br />
              💻 Department: Computer Science & Engineering (CSE)
              <br />
              ✨ Passionate Learner: Always eager to explore new technologies
              and trends in the tech world.
              <br />
              📚 Focused Areas: Programming, web development, and
              problem-solving. 🖥️ Skills: Proficient in MERN stack development,
              front-end design, and responsive web solutions. <br />
              🌟 Achievements: Completed 10+ projects and earned certifications
              showcasing expertise. <br />
              🔍 Goal: Becoming an advanced full-stack developer. <br />
              🤝 Collaboration: Open to working on innovative and exciting
              projects. <br />
              🌐 Vision: To create impactful software solutions that make a
              difference. <br />
              🚀 Motto: Keep learning, keep growing! 🌱
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Graduation;
