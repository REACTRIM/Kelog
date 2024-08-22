import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useEffect } from "react";
import { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const RegisterComponent = ({ onClickLogin, onClickLR }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const createdUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(createdUser);
      console.log("성공");
      onClickLogin();
      navigate("/");
    } catch (error) {
      alert("실패");
      console.error(error);
    }
  };

  return (
    <div className="loginDiv">
      <div className="X-button">
        <svg
          onClick={onClickLogin}
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          tabIndex="1"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
        </svg>
      </div>
      <div className="loginInput">
        <div>
          <h2>회원가입</h2>
          <section>
            <h4>이메일로 회원가입</h4>
            <form>
              <input
                className="formInput"
                placeholder="이메일을 입력하세요."
                type="email"
                onChange={onChangeEmail}
                autoComplete="email"
              />
              <input
                className="formInput"
                placeholder="닉네임을 입력하세요."
                type="text"
                onChange={onChangeNickname}
                autoComplete="username"
              />
              <input
                className="formInput"
                placeholder="비밀번호를 입력하세요."
                type="password"
                onChange={onChangePassword}
                autoComplete="current-password"
              />
              <button onClick={onSubmit}>회원가입</button>
            </form>
          </section>
        </div>
        <div className="moveToRegister">
          <span>이미 회원이신가요?</span>
          <div onClick={onClickLR}>로그인</div>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
