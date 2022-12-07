import React, {useState, useEffect} from 'react'
import axios from 'axios';

function Header(){
    const onLoginHandler = ()=>{
        window.location.href = "/login";
    }
    const onSignUpHandler = ()=>{
        window.location.href = "/signup";
    }
    const onLogoutHandler = ()=>{
        async function requestLogout(){
            await axios.delete('/logout')
            .then(response=>{
                if(response.data){
                    alert("로그아웃되었습니다.");
                }
                else{
                    alert("잘못된 접근입니다.");
                }
                window.location.href = "/";
            });
        }
        requestLogout();
    }
    
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [permission, setPermission] = useState('');
    
    useEffect(()=>{
        function getInfo(){
            axios.get('/hello')
            .then(response=>{
                setId(response.data.id);
                setName(response.data.name);
                setPermission(response.data.permission);
            })
            .catch(error=>console.log(error))
        }
        
        getInfo();
    }, []);

    if(['/signup', '/login'].indexOf(window.location.pathname) === -1){
        // 비로그인 상태 랜더링
        if(name === ""){
            return(
                <body>
                    <div>
                        <button onClick={onLoginHandler}>로그인</button>
                        <button onClick={onSignUpHandler}>회원가입</button>
                    </div>
                </body>
            );
        }
        // 로그인 상태 랜더링
        else{
            return(
                <body>
                    <div>
                        <h3>{name}님 반갑습니다.</h3>
                        <button onClick={onLogoutHandler}>로그아웃</button>
                    </div>
                </body>
            );
        }
    }

}

export default Header
