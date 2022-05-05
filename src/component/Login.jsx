import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import styles from "../css/style.module.css";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({});
  const [Logined, setLogined] = useState(false);
  console.log(user);
  useEffect(() => {
    axios.get("http://localhost:3000/signup").then((response) => {
      console.log(response);
      setUser(response.data);
    });
  }, []);
  console.log(user);
  const navigator = useNavigate();
  let id, pw;
  const onChangeID = (e) => {
    id = e.target.value;
    console.log(id);
  };
  const onChangePW = (e) => {
    pw = e.target.value;
    console.log(pw);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (user.id === id && user.pw === pw) {
      console.log("login ok");
      setLogined(true);
      navigator("/");
    }
  };
  return (
    <>
      <Navbar />
      <div className={styles.loginForm}>
        <h1 className={`${styles.logo} ${styles.loginlogo}`}>
          <i>Gurim</i>
        </h1>
        <h5 className={styles.logo__dec}>구리지만 괜찮아...</h5>
        <form onSubmit={onSubmit} className={styles.form}>
          <div className={styles.inputbox}>
            <span>이메일 주소</span>
            <input
              type="email"
              name="id"
              placeholder="ex) love2ysj@nate.com"
              onChange={onChangeID}
              className={styles.input}
            />
          </div>
          <div className={styles.inputbox}>
            <span>비밀번호</span>
            <input
              type="password"
              name="pw"
              placeholder="비밀번호를 입력하세요"
              onChange={onChangePW}
              className={styles.input}
            />
          </div>
          <button className={styles.button}>로그인</button>
        </form>
      </div>
    </>
  );
};
export default Login;
