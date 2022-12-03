import React from "react";
import "../App.css";

export default function Avatar({ image }) {
  return (
    <>
      <img src={image} alt="glamour" className="mainimg" />
    </>
  );
}
