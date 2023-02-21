import React from "react";
import "./styles.sass";

function Card({ img, text }) {
  return (
    <a href="#" className="card">
      <img src={img} alt="" className="card__pick" />
      <div className="card__title">{text}</div>
    </a>
  );
}

export default Card;
