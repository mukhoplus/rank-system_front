import React, { useEffect, useState } from "react";
import axios from "axios";

const AddGame = () => {
  const valueCheck = () => {
    const winUser = document.getElementById("winUser");
    const loseUser = document.getElementById("loseUser");
    const winRace = document.getElementById("winRace");
    const loseRace = document.getElementById("loseRace");

    if (winUser.value === "") {
      alert("승리 선수를 선택하세요.");
      winUser.focus();
      return false;
    }
    if (loseUser.value === "") {
      alert("패배 선수를 선택하세요.");
      loseUser.focus();
      return false;
    }
    if (winRace.value === "") {
      alert("승리 선수 종족을 선택하세요.");
      winRace.focus();
      return false;
    }
    if (loseRace.value === "") {
      alert("패배 선수 종족을 선택하세요.");
      loseRace.focus();
      return false;
    }

    if (winUser.value === loseUser.value) {
      alert("승리 선수와 패배 선수가 같습니다.");
      loseUser.focus();
      return false;
    }

    document.AddGameForm.submit();
  };

  const [gamers, setGamers] = useState([]);

  const getGamers = async () => {
    const response = await axios.get("/getgamers");
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
        action="/addgame"
        method="post"
      >
        <div>
          <label for="winUser">
            <b>승리 선수</b>
          </label>
          <select name="winUser" id="winUser">
            <option value="">승리 선수</option>
            {gamers.map((name) => (
              <option value={name} key={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label for="winRace">
            <b>승리 선수 종족</b>
          </label>
          <select name="winRace" id="winRace">
            <option value="">종족 선택</option>
            <option value="Terran">Terran</option>
            <option value="Protoss">Protoss</option>
            <option value="Zerg">Zerg</option>
          </select>
        </div>
        <div>
          <label for="loseUser">
            <b>패배 선수</b>
          </label>
          <select name="loseUser" id="loseUser">
            <option value="">패배 선수</option>
            {gamers.map((name) => (
              <option value={name} key={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label for="loseRace">
            <b>패배 선수 종족</b>
          </label>
          <select name="loseRace" id="loseRace">
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
