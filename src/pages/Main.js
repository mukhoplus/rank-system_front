import React, { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {
  const getRanking = async () => {
    const response = await axios.get("/ranking");
    setRanking(response.data);
  };

  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    getRanking();
  }, []);

  const convertRace = {
    Terran: "T",
    Protoss: "P",
    Zerg: "Z",
  };

  return (
    <div id="ranking">
      <h4>랭킹</h4>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th align="center">순위</th>
            <th align="center">이름(종족)</th>
            <th align="center">점수</th>
            <th align="center">전적</th>
            <th align="center">승</th>
            <th align="center">패</th>
            <th align="center">승률</th>
          </tr>
        </thead>
        <tbody>
          {ranking.map((gamer) => (
            <tr align="center" key={gamer["rankNum"]}>
              <td>{gamer["rankNum"]}</td>
              <td>
                {gamer["name"]}({convertRace[gamer["race"]]})
              </td>
              <td>{gamer["rating"]}</td>
              <td>{gamer["wins"] + gamer["loses"]}</td>
              <td>{gamer["wins"]}</td>
              <td>{gamer["loses"]}</td>
              <td>{gamer["winRate"]}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Main;
