import React from "react";
import "./About.css";
import abtimg from "../../images/abt-img.jpg";
import award from "../../images/award.png";
import award1 from "../../images/award1.png";

export default function About() {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-left-card">
          <img src={abtimg} alt="Me" className="intro-image"></img>
        </div>
      </div>

      <div className="about-right">
        <h1 className="about-heading">About Me</h1>
        <p className="about-sub">
          Currently Working As A System Engineer In Infosys
        </p>
        <p className="about-body">
          IT Professional with 3+ Years of IT industry experience in the field
          of Azure, Windows Administration, Windows and Application support,
          Managing users, VM and device, aslo skilled in JavaScript, HTML, CSS,
          React.Js and MS Certificated (AZ-104, AZ-500).
        </p>
        <div className="award-img">
          <img src={award} alt="award" className="award-image"></img>
          <img src={award1} alt="award1" className="award1-image"></img>
        </div>
      </div>
    </div>
  );
}
