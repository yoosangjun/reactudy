import React, { useState } from "react";
import Avatar from "./Avatar";
import "../App.css";

export default function Profile({
  image,
  name,
  title,
  isNew,
  handleclick,
  number,
}) {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const handleClick1 = () => {
    setCount1(count1 + 1);
    handleclick();
  };
  const handleClick2 = () => {
    setCount2(count2 + 1);
    handleclick();
  };
  return (
    <div className="Profilebox">
      <Avatar image={image} isNew={isNew} />
      <h2>{name}</h2>
      <p>{title}</p>
      <p>
        숫자1 : {count1} / {number}
      </p>
      <p>
        숫자2 : {count2} / {number}
      </p>
      <button className="btn" onClick={handleClick1}>
        1추가
      </button>
      <button className="btn" onClick={handleClick2}>
        2추가
      </button>
    </div>
  );
}
