import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";

const App = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {});

  const showing = (show) => {
    setShow(show);
    console.log(show);
  };
  return (
    <>
      <Navbar show={show} showing={showing} />
      <Home />
    </>
  );
};

export default App;
