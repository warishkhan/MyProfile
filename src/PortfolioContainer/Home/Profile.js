import React from "react";
import Typical from "react-typical";
import "./Profile.css"

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/profile.php?id=100014296211188">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/warish-khan-a577b9220/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/demon_king_01_/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCtMzUQtrV6TOsPpcjc6CIEg">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://github.com/warishkhan">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Warish</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full Stack Developer😎",
                    1000,
                    "MERN stack dev😎",
                    1000,
                    "Full Stack Android Developer😎",
                    1000,
                    "UX/UI Designer😎",
                    1000,
                    "React/React Native Developer😎",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a href="warish.pdf" download="Warish warish.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
