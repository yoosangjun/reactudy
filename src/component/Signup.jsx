import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import styles from "../css/style.module.css";

const Signup = () => {
  const navigator = useNavigate();
  let id, pw, verifypw, nickname, email;
  const onChangeID = (e) => {
    id = e.target.value;
    console.log(id);
  };
  const onChangeNick = (e) => {
    nickname = e.target.value;
    console.log(nickname);
  };
  const onChangeEmail = (e) => {
    email = e.target.value;
    console.log(email);
  };
  const onChangePW = (e) => {
    pw = e.target.value;
    console.log(pw);
  };
  const onChangePW2 = (e) => {
    verifypw = e.target.value;
    console.log(verifypw);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/signup", {
      userinfo: {
        createdate: Date.now(),
        id,
        pw,
        email,
        nickname,
      },
    });
    alert("가입이 완료되었습니다.");
    navigator("/");
  };
  return (
    <>
      <Navbar />
      <div className={styles.loginForm}>
        <h1 className={`${styles.logo} ${styles.loginlogo}`}>
          <i>회원가입</i>
        </h1>
        <h5 className={styles.logo__dec}>구리지만 괜찮아...</h5>
        <form onSubmit={onSubmit} className={styles.form}>
          <div className={styles.inputbox}>
            <span>아이디</span>
            <input
              type="text"
              name="id"
              placeholder="ex) love2ysj@nate.com"
              onChange={onChangeID}
              className={styles.input}
            />
          </div>
          <div className={styles.inputbox}>
            <span>닉네임</span>
            <input
              type="text"
              name="nickname"
              placeholder="닉네임을 입력하세유"
              onChange={onChangeNick}
              className={styles.input}
            />
          </div>
          <div className={styles.inputbox}>
            <span>이메일 주소</span>
            <input
              type="email"
              name="email"
              placeholder="E-mail을 입력하세유"
              onChange={onChangeEmail}
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
          <div className={styles.inputbox}>
            <span>비밀번호 확인</span>
            <input
              type="password"
              name="pw2"
              placeholder="비밀번호를 한번 더 입력하세요"
              onChange={onChangePW2}
              className={styles.input}
            />
          </div>
          <button className={styles.button}>회원가입</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
