import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import styles from "../css/style.module.css";
import axios from "axios";

const Login = (props) => {
  const [users, setUsers] = useState({});
  const getgo = async () => {
    try {
      const response = await axios.get("http://localhost:3004/signup");
      setUsers(response.data);
    } catch (err) {
      console.log("Error >>", err);
    }
  };
  useEffect(() => {
    getgo();
  }, []);
  console.log(users);
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
    let index = 0;
    console.log(users[index].userinfo.userid === id);
    while (index < users.length) {
      if (
        users[index].userinfo.userid === id &&
        users[index].userinfo.pw === pw
      ) {
        console.log(index);
        console.log("login ok");
        props.userAdd(id, pw);
        navigator("/");
        return;
      } else {
        alert("아이디나 비밀번호를 확인하세요.");
      }
      console.log(users[index]);
      index++;
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
