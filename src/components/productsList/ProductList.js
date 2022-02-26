import React from "react";
import Product from "../product/Product";
import { projects } from "../../Data";

import "./ProductList.css";
console.log(projects);
export default function ProductList() {
  return (
    <div className="prod">
      <div className="prod-text">
        <h1 className="prod-heading">My Projects</h1>
        <p className="prod-body">
          Below are few of the my projects that are uploded in Github...
        </p>
      </div>
      <div className="prod-list">
        {projects.map((i) => (
          <Product key={i.id} img={i.img} link={i.link} />
        ))}
      </div>
    </div>
  );
}
