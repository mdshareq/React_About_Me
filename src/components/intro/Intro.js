import React from "react";
import "./Intro.css";
import Me from "../../images/intro-img.jpg";

export default function Intro() {
  return (
    <div className="intro-main">
      <div className="intro-left">
        <div className="intro-left-wapper">
          <h2 className="i-intro">Hello, My Name is</h2>
          <h1 className="i-name">
            Mohammed <br />
            Sharequddin Quadry
          </h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI Designer</div>
              <div className="i-title-item">Azure Administrator</div>
              <div className="i-title-item">Azure Security Engineer</div>
              <div className="i-title-item">Administrator</div>
            </div>
          </div>
          <div className="i-desc">
            IT Professional with over 3 Years of IT industry experience. <br />
            Skilled in Microsoft Azure, JavaScript, HTML, CSS, React.Js, Unix
            Shell Scripting, Python Programming Fundamentals, SQL. <br />
            <br />
            Microsoft Certificated Azure Associate (AZ-104, AZ-500).
          </div>
        </div>
      </div>

      <div className="intro-right">
        <div className="intro-bg"></div>
        <img src={Me} alt="Me" className="intro-image"></img>
      </div>
    </div>
  );
}
