import React, { useRef } from "react";

const SignUp = () => {
  const idRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();

  const valueCheck = () => {
    const id = document.getElementById("id").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;

    if (id === "") {
      alert("아이디를 입력하세요.");
      idRef.current.focus();
      return false;
    }
    if (password === "") {
      alert("비밀번호를 입력하세요.");
      passwordRef.current.focus();
      return false;
    }
    if (name === "") {
      alert("이름을 입력하세요.");
      nameRef.current.focus();
      return false;
    }

    const checkId = /^[a-z0-9-_]+$/g;
    if (!checkId.test(id) || !(5 <= id.length && id.length <= 20)) {
      alert(
        "아이디는 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다."
      );
      idRef.current.focus();
      return false;
    }
    const checkPassword = /^[a-zA-Z0-9-_!@#$%^*+=]+$/g;
    if (
      !checkPassword.test(password) ||
      !(4 <= password.length && password.length <= 20)
    ) {
      alert(
        "비밀번호는 4~20자의 영어 대소문자, 숫자와 특수기호만 사용 가능합니다."
      );
      passwordRef.current.focus();
      return false;
    }
    const checkName = /^[a-zA-Z0-9가-힣-_!@#$%^*+=]+$/g;
    if (!checkName.test(name) || !(1 <= name.length && name.length <= 10)) {
      alert(
        "이름은 1~10자의 한글, 영어 대소문자, 숫자와 특수기호만 사용 가능합니다."
      );
      nameRef.current.focus();
      return false;
    }

    document.SignUpForm.submit();
  };

  return (
    <div id="signup">
      <h4 className="text-center">회원가입</h4>
      <form
        className="form"
        id="SignUpForm"
        name="SignUpForm"
        action="/signup"
        method="post"
      >
        <div className="field">
          <label htmlFor="id">
            <b>아이디</b>
          </label>
          <input
            name="id"
            id="id"
            ref={idRef}
            required
            minLength="5"
            maxLength="20"
            type="text"
            placeholder="아이디"
          />
        </div>
        <div className="field">
          <label htmlFor="password">
            <b>비밀번호</b>
          </label>
          <input
            name="password"
            id="password"
            ref={passwordRef}
            required
            minLength="4"
            maxLength="20"
            type="password"
            placeholder="비밀번호"
          />
        </div>
        <div className="field">
          <label htmlFor="name">
            <b>이름</b>
          </label>
          <input
            name="name"
            id="name"
            ref={nameRef}
            required
            minLength="1"
            maxLength="10"
            type="text"
            placeholder="이름"
          />
        </div>
        <div>
          <button
            className="btn btn-primary"
            type="button"
            onClick={valueCheck}
          >
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
