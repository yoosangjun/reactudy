import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Login from "./component/Login";
import { useLocation } from "react-router-dom";

const App = () => {
  const [user, setUser] = useState({});
  const [show, setShow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location) {
      setUser(location.state);
    }
    return () => {
      setUser(null);
    };
  }, [location]);
  console.log(location);
  console.log(user);
  return (
    <>
      <Navbar user={user} />
      <Home />
    </>
  );
};

export default App;
