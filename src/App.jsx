import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Login from "./component/Login";

const App = () => {
  const [user, setUser] = useState({});
  const [show, setShow] = useState(false);
  const mola = 2;
  const userAdd = (userid, nickname) => {
    setUser({
      userid,
      nickname,
    });
    console.log(user);
  };
  console.log(mola);
  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <>
      <Navbar userAdd={userAdd} />
      <Home />
    </>
  );
};

export default App;
