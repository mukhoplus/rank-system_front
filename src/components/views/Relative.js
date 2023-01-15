import React, {useState, useEffect} from 'react'
import axios from 'axios';

function Record(){
    const valueCheck = ()=>{
        const user1 = document.getElementById("user1");
        const user2 = document.getElementById("user2");

        if(user1.value === ""){
            alert('선수 1을 선택하세요');
            user1.focus();
            return false;
        }
        if(user2.value === ""){
            alert('선수 2를 선택하세요');
            user2.focus();
            return false;
        }

        if(user1.value === user2.value){
            alert('선수 1과 선수 2가 같습니다.');
            user2.focus();
            return false;
        }
        
        document.RelativeForm.submit();
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
        <div id='relative'>
            <h4 className="text-center">상대 전적</h4>
            <form className="form" id="RelativeForm" name="RelativeForm" action="/viewrelative?user1={user1}&user2={user2}" method="get">
                <div className="field">
                    <label for="user1">
                        <b>선수 1</b>
                    </label>
                    <select name="user1" id="user1">
                        <option value="">선수 1</option>
                        {gamers.map((name) => (
                            <option value={name} key={name}>
                                {name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="field">
                    <label for="user2">
                        <b>선수 2</b>
                    </label>
                    <select name="user2" id="user2">
                        <option value="">선수 2</option>
                        {gamers.map((name) => (
                            <option value={name} key={name}>
                                {name}
                            </option>
                        ))}
                    </select>
                </div>               
                <div className="field">
                    <button className="btn btn-success" type="button" onClick={valueCheck}>상대 전적 조회</button>
                </div>
            </form>
        </div>
    );
}

export default Record;
