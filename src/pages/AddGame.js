import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const AddGame = () => {
  const winUserRef = useRef();
  const loseUserRef = useRef();
  const winRaceRef = useRef();
  const loseRaceRef = useRef();

  const valueCheck = () => {
    const winUser = document.getElementById("winUser");
    const loseUser = document.getElementById("loseUser");
    const winRace = document.getElementById("winRace");
    const loseRace = document.getElementById("loseRace");

    if (winUser.value === "") {
      alert("승리 선수를 선택하세요.");
      winUserRef.current.focus();
      return false;
    }
    if (loseUser.value === "") {
      alert("패배 선수를 선택하세요.");
      loseUserRef.current.focus();
      return false;
    }
    if (winRace.value === "") {
      alert("승리 선수 종족을 선택하세요.");
      winRaceRef.current.focus();
      return false;
    }
    if (loseRace.value === "") {
      alert("패배 선수 종족을 선택하세요.");
      loseRaceRef.current.focus();
      return false;
    }

    if (winUser.value === loseUser.value) {
      alert("승리 선수와 패배 선수가 같습니다.");
      loseUserRef.current.focus();
      return false;
    }

    document.AddGameForm.submit();
  };

  const [gamers, setGamers] = useState([]);

  const getGamers = async () => {
    const response = await axios.get("/gamer");
    setGamers(response.data);
  };

  useEffect(() => {
    getGamers();
  }, []);

  return (
    <div id="addgame">
      <h4 className="text-center">전적 추가</h4>
      <form
        className="form"
        id="AddGameForm"
        name="AddGameForm"
        action="/game"
        method="post"
      >
        <div>
          <label htmlFor="winUser">
            <b>승리 선수</b>
          </label>
          <select name="winUser" id="winUser" ref={winUserRef}>
            <option value="">승리 선수</option>
            {gamers.map((name) => (
              <option value={name} key={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="winRace">
            <b>승리 선수 종족</b>
          </label>
          <select name="winRace" id="winRace" ref={winRaceRef}>
            <option value="">종족 선택</option>
            <option value="Terran">Terran</option>
            <option value="Protoss">Protoss</option>
            <option value="Zerg">Zerg</option>
          </select>
        </div>
        <div>
          <label htmlFor="loseUser">
            <b>패배 선수</b>
          </label>
          <select name="loseUser" id="loseUser" ref={loseUserRef}>
            <option value="">패배 선수</option>
            {gamers.map((name) => (
              <option value={name} key={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="loseRace">
            <b>패배 선수 종족</b>
          </label>
          <select name="loseRace" id="loseRace" ref={loseRaceRef}>
            <option value="">종족 선택</option>
            <option value="Terran">Terran</option>
            <option value="Protoss">Protoss</option>
            <option value="Zerg">Zerg</option>
          </select>
        </div>
        <div>
          <button
            className="btn btn-success"
            type="button"
            onClick={valueCheck}
          >
            전적 추가
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddGame;
