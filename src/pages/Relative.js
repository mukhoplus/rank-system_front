import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const Record = () => {
  const user1Ref = useRef();
  const user2Ref = useRef();

  const valueCheck = () => {
    const user1 = document.getElementById("user1");
    const user2 = document.getElementById("user2");

    if (user1.value === "") {
      alert("선수 1을 선택하세요");
      user1Ref.current.focus();
      return false;
    }
    if (user2.value === "") {
      alert("선수 2를 선택하세요");
      user2Ref.current.focus();
      return false;
    }

    if (user1.value === user2.value) {
      alert("선수 1과 선수 2가 같습니다.");
      user2Ref.current.focus();
      return false;
    }

    document.RelativeForm.submit();
  };

  const getGamers = async () => {
    const response = await axios.get("/gamer");
    setGamers(response.data);
  };

  const [gamers, setGamers] = useState([]);

  useEffect(() => {
    getGamers();
  }, []);

  return (
    <div id="relative">
      <h4 className="text-center">상대 전적</h4>
      <form
        className="form"
        id="RelativeForm"
        name="RelativeForm"
        action="/viewrelative?user1={user1}&user2={user2}"
        method="get"
      >
        <div className="field">
          <label htmlFor="user1">
            <b>선수 1</b>
          </label>
          <select name="user1" id="user1" ref={user1Ref}>
            <option value="">선수 1</option>
            {gamers.map((name) => (
              <option value={name} key={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="user2">
            <b>선수 2</b>
          </label>
          <select name="user2" id="user2" ref={user2Ref}>
            <option value="">선수 2</option>
            {gamers.map((name) => (
              <option value={name} key={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <button
            className="btn btn-success"
            type="button"
            onClick={valueCheck}
          >
            상대 전적 조회
          </button>
        </div>
      </form>
    </div>
  );
};

export default Record;
