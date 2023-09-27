import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const ViewRecord = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name");
  const [record, setRecord] = useState([]);
  const bug = useRef(false);

  useEffect(() => {
    bug.current = true;
    axios
      .get("/getrecord?name=" + name)
      .then((response) => {
        setRecord(response.data);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line
  }, []);

  let gamer = {};
  gamer["name"] = "전체";
  gamer["wins"] = 0;
  gamer["loses"] = 0;

  record.map((datas) =>
    // eslint-disable-next-line
    datas.map((data) => {
      gamer["wins"] += data["wins"];
      gamer["loses"] += data["loses"];
    })
  );

  if (name === "" || name === undefined || name === null) {
    alert("잘못된 접근입니다.");
    window.location.href = "/record";
  }

  // 버그 해결용 임시 코드
  // viewrecord 경로로 실행됐을 때 record를 불러오기 전에 한번 실행되고, 불러오고 나서 한번 실행하는 버그가 있음
  // bug가 true면 useEffect로 record를 불러왔다는 의미
  if (bug.current && !record.length) {
    alert("해당 선수가 없습니다.");
    window.location.href = "/record";
  } else if (bug.current) {
    return (
      <div id="record">
        <h4>{name}</h4>
        <table className="table table-striped table-hover">
          <thead>
            <th align="center">종족</th>
            <th align="center">전적</th>
            <th align="center">승</th>
            <th align="center">패</th>
            <th align="center">승률</th>
          </thead>
          <tbody>
            {
              <tr align="center">
                <td>{gamer["name"]}</td>
                <td>{gamer["wins"] + gamer["loses"]}</td>
                <td>{gamer["wins"]}</td>
                <td>{gamer["loses"]}</td>
                <td>{getWinRate(gamer["wins"], gamer["loses"])}%</td>
              </tr>
            }
            {record.map((datas) =>
              datas.map((data) => (
                <tr align="center">
                  <td>{data["race"]}</td>
                  <td>{data["wins"] + data["loses"]}</td>
                  <td>{data["wins"]}</td>
                  <td>{data["loses"]}</td>
                  <td>{getWinRate(data["wins"], data["loses"])}%</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    );
  }
};

function getWinRate(win, lose) {
  const wl = win + lose;

  if (wl === 0) return 0; // 전적이 없으면 0 반환

  let winRate = (win / wl) * 100;
  // eslint-disable-next-line
  if (winRate == winRate.toFixed(2))
    // float형과 소수 아래 2번째 자리까지 반올림 한 값이 같은가?(==)
    return winRate; // 같으면 소숫점 없는 값으로 반환(int)
  else return winRate.toFixed(2); // 소숫점이 있으면 소수 아래 2번째 자리까지 반올림 한 값으로 반환(float)
}

export default ViewRecord;
