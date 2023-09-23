import React, { useEffect, useState } from "react";
import axios from "axios";

function Games() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    axios
      .get("/getgames")
      .then((response) => {
        setGames(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div id="games">
      <h4>전적 목록</h4>
      <table className="table table-striped table-hover">
        <thead>
          <th align="center">게임 번호</th>
          <th align="center">승자</th>
          <th align="center">패자</th>
          <th align="center">증감 점수</th>
          <th align="center">기록자</th>
        </thead>
        <tbody>
          {games.map((game) => (
            <tr align="center">
              <td>{game["gameNumber"]}</td>
              <td>
                {game["winUser"]}({game["winRace"]})
              </td>
              <td>
                {game["loseUser"]}({game["loseRace"]})
              </td>
              <td>{game["point"]}</td>
              <td>{game["writer"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Games;
