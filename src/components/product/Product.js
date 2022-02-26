import React from "react";
import "./Product.css";

export default function Product({ img, link }) {
  return (
    <div className="prod-card">
      <div className="prod-brower">
        <div className="brower-circle"></div>
        <div className="brower-circle"></div>
        <div className="brower-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="prod-img"></img>
      </a>
    </div>
  );
}
