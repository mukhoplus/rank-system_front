import React, { useEffect, useState } from "react";
import axios from "axios";

const NameRanking = () => {
  const getNameRanking = async () => {
    const response = await axios.get("/getnameranking");
    setNameRanking(response.data);
  };

  const [nameRanking, setNameRanking] = useState([]);

  useEffect(() => {
    getNameRanking();
  }, []);

  return (
    <div id="nameranking">
      <h4>개인 랭킹</h4>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th align="center">순위</th>
            <th align="center">이름</th>
            <th align="center">점수</th>
            <th align="center">전적</th>
            <th align="center">승</th>
            <th align="center">패</th>
            <th align="center">승률</th>
          </tr>
        </thead>
        <tbody>
          {nameRanking.map((gamer) => (
            <tr align="center" key={gamer["rankNum"]}>
              <td>{gamer["rankNum"]}</td>
              <td>{gamer["name"]}</td>
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

export default NameRanking;
