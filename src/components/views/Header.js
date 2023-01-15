/* eslint-disable */
import React from 'react';
import axios from 'axios';

function Header(){
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
            })
        }

        if([undefined, ""].indexOf(name) !== -1){
            alert("잘못된 접근입니다.");
            window.location.href = "/";
        }
        else{
            requestLogout();
        }
    }

    function getCookies(){
        function isCookie(obj){
            if(JSON.stringify(obj) === '[""]') return 0;
            else return Object.keys(obj).length;
        }

        let cookie = {};
        const allCookies = document.cookie.split('; ');
        allCookies.forEach(c =>{
            const temp = c.split('=');
            cookie[temp[0]] = temp[1];
        });

        const id = isCookie(allCookies) ? cookie['id'] : "";
        const name = isCookie(allCookies) ? cookie['name'] : "";
        const permission = isCookie(allCookies) ? cookie['permission'] : "";

        return [id, name, permission];
    }
    
    let data = getCookies();
    //const id = data[0];
    const name = data[1];
    const permission = data[2];
    
    if(['/signup', '/login'].indexOf(window.location.pathname) === -1){      
        // 비로그인 상태 랜더링
        if(name === "" || name == undefined){
            return(
                <div className="right navbar">
                    <a className="btn btn-outline-primary me-2" href="/login">
                        로그인
                    </a>
                    <a className="btn btn-primary" href="/signup">
                        회원가입
                    </a>
                </div>
            );
        }
        // 로그인 상태 랜더링
        else{
            return(
                <div className="right navbar">
                    {name}님 반갑습니다.&nbsp;&nbsp;
                    <a className="btn btn-primary" onClick={onLogoutHandler}>로그아웃</a>
                </div>
            );
        }
    }
}

export default Header;
