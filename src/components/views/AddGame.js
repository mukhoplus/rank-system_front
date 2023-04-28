import React, {useState, useEffect} from 'react'
import axios from 'axios';

function AddGame(){
    const valueCheck = ()=>{
        const win_user = document.getElementById("win_user");
        const lose_user = document.getElementById("lose_user");
        const win_race = document.getElementById("win_race");
        const lose_race = document.getElementById("lose_race");

        if(win_user.value === ""){
            alert('승리 선수를 선택하세요.');
            win_user.focus();
            return false;
        }
        if(lose_user.value === ""){
            alert('패배 선수를 선택하세요.');
            lose_user.focus();
            return false;
        }
        if(win_race.value === ""){
            alert('승리 선수 종족을 선택하세요.');
            win_race.focus();
            return false;
        }
        if(lose_race.value === ""){
            alert('패배 선수 종족을 선택하세요.');
            lose_race.focus();
            return false;
        }

        if(win_user.value === lose_user.value){
            alert('승리 선수와 패배 선수가 같습니다.');
            lose_user.focus();
            return false;
        }

        document.AddGameForm.submit();
    }
    
    const [gamers, setGamers] = useState([]);
    useEffect(()=>{
        axios.get('/getgamers')
        .then(response=>{
            setGamers(response.data);
        })
        .catch(error=>console.log(error))
    }, []);
    
    return(
        <div id='addgame'>
            <h4 className="text-center">전적 추가</h4>
            <form className="form" id="AddGameForm" name="AddGameForm" action="/addgame" method="post">
                <div>
                    <label for="win_user">
                        <b>승리 선수</b>
                    </label>
                    <select name="win_user" id="win_user">
                        <option value="">승리 선수</option>
                        {gamers.map((name) => (
                            <option value={name} key={name}>
                                {name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label for="win_race">
                        <b>승리 선수 종족</b>
                    </label>
                    <select name="win_race" id="win_race">
                        <option value="">종족 선택</option>
                        <option value="Terran">Terran</option>
                        <option value="Protoss">Protoss</option>
                        <option value="Zerg">Zerg</option>
                    </select>
                </div>
                <div>
                    <label for="lose_user">
                        <b>패배 선수</b>
                    </label>
                    <select name="lose_user" id="lose_user">
                        <option value="">패배 선수</option>
                        {gamers.map((name) => (
                            <option value={name} key={name}>
                                {name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label for="lose_race">
                        <b>패배 선수 종족</b>
                    </label>
                    <select name="lose_race" id="lose_race">
                        <option value="">종족 선택</option>
                        <option value="Terran">Terran</option>
                        <option value="Protoss">Protoss</option>
                        <option value="Zerg">Zerg</option>
                    </select>
                </div>
                <div>
                    <button className="btn btn-success" type="button" onClick={valueCheck}>전적 추가</button>
                </div>
            </form>
        </div>
    );
}

export default AddGame;
