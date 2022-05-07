import React from "react";
import styles from "../css/style.module.css";
import Navbar from "./Navbar";

const Home = (props) => {
  const imgurl =
    "https://velog.velcdn.com/images/leejh9022/post/da20dd70-fd30-44ea-9f31-38aa8a56a3c6/reactjs-thumb.jpg";
  return (
    <>
      <Navbar />
      <img src={imgurl} alt="homeimg" className={styles.homeimg} />
    </>
  );
};

export default Home;
