import React, {useState, useEffect} from 'react'
import axios from 'axios';

function Main(){
    const [ranking, setRanking] = useState([]);
    useEffect(()=>{
        axios.get('/ranking')
        .then(response=>{
            setRanking(response.data);
        })
        .catch(error=>console.log(error))
    }, []);

    const convert_race = {
        "Terran": "T",
        "Protoss": "P",
        "Zerg": "Z"
    }
    return(
        <body>
            <div>
                <h3>랭킹</h3>
            </div>
            <table>
                <th align="center">순위</th>
                <th align="center">이름(종족)</th>
                <th align="center">점수</th>
                <th align="center">전적</th>
                <th align="center">승</th>
                <th align="center">패</th>
                <th align="center">승률</th>
                {ranking.map((gamer) => (
                    <tr align="center">
                        <td>
                            {gamer["rank_num"]}
                        </td>
                        <td>
                            {gamer["name"]}({convert_race[gamer["race"]]})
                        </td>
                        <td>
                            {gamer["rating"]}
                        </td>
                        <td>
                            {gamer["wins"] + gamer["loses"]}
                        </td>
                        <td>
                            {gamer["wins"]}
                        </td>
                        <td>
                            {gamer["loses"]}
                        </td>
                        <td>
                            {gamer["win_rate"]}%
                        </td>
                    </tr>
                ))}
            </table>
        </body>
    );
}

export default Main
