import React, {useState, useEffect, useRef} from 'react';
import {useLocation} from 'react-router-dom';
import axios from 'axios';

function ViewRelative(){
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const user1 = searchParams.get('user1');
    const user2 = searchParams.get('user2');
    const [relative, setRelative] = useState([]);
    const bug = useRef(false);
    
    useEffect(()=>{
        bug.current = true;
        axios.get('/getrelative?user1='+user1+'&user2='+user2)
        .then(response=>{
            setRelative(response.data);
        })
        .catch(error=>console.log(error))
        // eslint-disable-next-line
    }, []);
    
    const races = ['Terran', 'Protoss', 'Zerg'];

    let allData = [];
    let raceData = [];
    let convertData = [{
        "name": "전체",
        "wins": 0,
        "loses": 0
    }];
    
    if(user1 === '' || user1 === undefined || user1 === null || user2 === '' || user2 === undefined || user2 === null){
        alert('잘못된 접근입니다.');
        window.location.href = "/relative";
    }
    if(user1 === user2){
        alert('선수 1과 선수2가 같습니다.');
        window.location.href = "/relative";
    }

    // 버그 해결용 임시 코드(설명: ViewRecord)
    if(bug.current){
        // TT, TP, TZ, PT, ..., ZP, ZZ
        for(let i=0; i<9; i++){
            let r = races[i%3];
            allData.push({
                "name": "vs "+r,
                "wins": relative[i][0],
                "loses": relative[i][1]
            });
            
        }
        
        // T, P, Z
        let tempW = 0;
        let tempL = 0;
        for(let i=0; i<9; i++){
            tempW += allData[i]["wins"];
            tempL += allData[i]["loses"];

            if(i % 3 === 2){
                raceData.push({
                    "name": races[(i+1)/3 -1],
                    "wins": tempW,
                    "loses": tempL
                });
                tempW = 0;
                tempL = 0;
            }
        }

        // 전체 전적 갱신
        for(let i=0; i<3; i++){
            convertData[0]["wins"] += raceData[i]["wins"];
            convertData[0]["loses"] += raceData[i]["loses"];
        }
        // 종족/종족별 세부 전적 순서대로 추가
        for(let i=0; i<9; i++){
            // 세부 입력 전 종족 전적 추가
            if(i%3 === 0)
                convertData.push(raceData[i/3]);
            convertData.push(allData[i]);
        }
    }

    return(
        <div id='relative'>
            <h4>{user1} vs {user2}</h4>
            <table className="table table-striped table-hover">
                <thead>
                    <th align="center">구분</th>
                    <th align="center">전적</th>
                    <th align="center">승</th>
                    <th align="center">패</th>
                    <th align="center">승률</th>
                </thead>
                <tbody>
                    {convertData.map((data) => (
                        <tr align="center">
                            <td>
                                {data["name"]}
                            </td>
                            <td>
                                {data["wins"] + data["loses"]}
                            </td>
                            <td>
                                {data["wins"]}
                            </td>
                            <td>
                                {data["loses"]}
                            </td>
                            <td>
                                {getWin_Rate(data["wins"], data["loses"])}%
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function getWin_Rate(win, lose){
    const wl = win + lose;

    if(wl === 0)
        return 0; // 전적이 없으면 0 반환
    
    let win_rate = win / wl * 100;
    // eslint-disable-next-line
    if(win_rate == win_rate.toFixed(2)) // float형과 소수 아래 2번째 자리까지 반올림 한 값이 같은가?(==)
        return win_rate; // 같으면 소숫점 없는 값으로 반환(int)
    else
        return win_rate.toFixed(2) // 소숫점이 있으면 소수 아래 2번째 자리까지 반올림 한 값으로 반환(float)
}

export default ViewRelative;
