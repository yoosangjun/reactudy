import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/style.module.css";

const Navbar = (props) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.smallnavbar}>
        <Link to="/" className={styles.smalllink}>
          고객센터
        </Link>
        <Link to="/" className={styles.smalllink}>
          마이페이지
        </Link>
        <Link to="./signup" className={styles.smalllink}>
          회원가입
        </Link>
        <Link to="./signin" className={styles.smalllink}>
          로그인
        </Link>
      </div>
      <div className={styles.mainnavbar}>
        <div>
          <Link to="/">
            <h1 className={styles.logo}>
              <i>Gurim</i>
            </h1>
          </Link>
        </div>
        <div className={styles.navbar__list}>
          <Link to="/" className={styles.mainlink}>
            STYLE
          </Link>
          <Link to="/" className={styles.mainlink}>
            SHOP
          </Link>
          <Link to="/" className={styles.mainlink}>
            ABOUT
          </Link>
          <Link to="./signin" className={styles.mainlink}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
