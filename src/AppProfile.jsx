import React, { useEffect, useState } from "react";
import "./App.css";
import Avatar from "./component/Avatar";
import Profile from "./component/Profile";
import sexy from "./imgs/글래머.jpg";

export default function AppProfile() {
  const [number, setNumber] = useState(0);
  const handleclick = () => {
    setNumber((prev) => prev + 1);
    console.log(number);
  };
  return (
    <>
      <section className="Appbox">
        <h2>
          토탈숫자 : {number} {number > 10 ? "👍" : ""}
        </h2>
        <Avatar image={sexy} isNew={true} />
        <Profile
          image={sexy}
          name="봉구"
          title="온카버프개발자"
          handleclick={handleclick}
          number={number}
        />
      </section>
    </>
  );
}
