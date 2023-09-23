import React, { useEffect, useState } from "react";
import axios from "axios";

function NameRanking() {
  const [nameRanking, setNameRanking] = useState([]);
  useEffect(() => {
    axios
      .get("/getnameranking")
      .then((response) => {
        setNameRanking(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div id="nameranking">
      <h4>개인 랭킹</h4>
      <table className="table table-striped table-hover">
        <thead>
          <th align="center">순위</th>
          <th align="center">이름</th>
          <th align="center">점수</th>
          <th align="center">전적</th>
          <th align="center">승</th>
          <th align="center">패</th>
          <th align="center">승률</th>
        </thead>
        <tbody>
          {nameRanking.map((gamer) => (
            <tr align="center">
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
}

export default NameRanking;
