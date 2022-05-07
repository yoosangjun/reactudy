import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import styles from "../css/style.module.css";
import axios from "axios";

const Login = (props) => {
  const [users, setUsers] = useState({});
  const [db, setDb] = useState(false);
  console.log(db);
  const getGo = async () => {
    try {
      const response = await axios.get("http://localhost:3004/signup");
      setUsers(response.data);
      users ? setDb(true) : setDb(false);
      console.log(`db 겟스타트 완료 정보 => `, users);
    } catch (err) {
      console.log("Error >>", err);
    }
  };
  useEffect(() => {
    console.log(`Login 페이지 첫 실행 db데이터 겟 스타트`);
    getGo();
    return () => {
      //해당 페이지를 벗어날때 === 아직 로그아웃을 구현하지 않아서 해당 데이터를 지움
      setUsers(null);
      console.log(`페이지 벗어날때 정보 => `);
      console.log(users);
    };
  }, [db]);

  const navigator = useNavigate();
  let userid,
    pw,
    nickname,
    index = 0;
  const onChangeID = (e) => {
    userid = e.target.value;
    console.log(userid);
  };
  const onChangePW = (e) => {
    pw = e.target.value;
    console.log(pw);
  };
  const Loginlogic = useCallback(() => {
    console.log(users[index].userinfo.userid === userid);
    while (index < users.length) {
      console.log(users[index].userinfo.nickname);
      if (
        users[index].userinfo.userid === userid &&
        users[index].userinfo.pw === pw
      ) {
        nickname = users[index].userinfo.nickname;
        console.log(index);
        console.log(users[index].userinfo.nickname);
        console.log(nickname);
        console.log(userid);
        console.log("login ok");
        navigator("/", {
          state: {
            userid,
            nickname,
          },
        });
        index++;
        return;
      } else {
        alert("아이디나 비밀번호를 확인하세요.");
        return;
      }
    }
  }, [users]);
  const onSubmit = (e) => {
    e.preventDefault();
    Loginlogic();
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
