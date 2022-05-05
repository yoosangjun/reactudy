import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";

const App = () => {
  const [show, setShow] = useState(true);
  const [user, setUser] = useState({});
  const mola = "몰라";
  const userAdd = (userid, nickname) => {
    setUser({
      userid,
      nickname,
    });
    console.log(user);
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  const showing = (show) => {
    setShow(show);
    console.log(show);
  };
  return (
    <>
      <Navbar show={show} showing={showing} userAdd={userAdd} mola={mola} />
      <Home />
    </>
  );
};

export default App;
