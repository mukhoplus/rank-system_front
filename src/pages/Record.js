import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const Record = () => {
  const nameRef = useRef();

  const valueCheck = () => {
    const name = document.getElementById("name");

    if (name.value === "") {
      alert("이름을 선택하세요");
      nameRef.current.focus();
      return false;
    }

    document.RecordForm.submit();
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
    <div id="record">
      <h4 className="text-center">선수 조회</h4>
      <form
        className="form"
        id="RecordForm"
        name="RecordForm"
        action="/viewrecord?name={name}"
        method="get"
      >
        <div className="field">
          <label htmlFor="name">
            <b>이름</b>
          </label>
          <select name="name" id="name" ref={nameRef}>
            <option value="">이름</option>
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
            선수 조회
          </button>
        </div>
      </form>
    </div>
  );
};

export default Record;
