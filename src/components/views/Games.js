import React, {useState, useEffect} from 'react'
import axios from 'axios';

function Games(){
    const [games, setGames] = useState([]);
    useEffect(()=>{
        axios.get('/getgames')
        .then(response=>{
            setGames(response.data);
        })
        .catch(error=>console.log(error))
    }, []);

    return(
        <div id="games">
            <h4>전적 목록</h4>
            <table class="table table-striped table-hover">
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
                            <td>
                                {game["game_number"]}
                            </td>
                            <td>
                                {game["win_user"]}({game["win_race"]})
                            </td>
                            <td>
                                {game["lose_user"]}({game["lose_race"]})
                            </td>
                            <td>
                                {game["point"]}
                            </td>
                            <td>
                                {game["writer"]}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Games;
