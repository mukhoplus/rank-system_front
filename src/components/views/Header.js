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
            });
        }
        requestLogout();
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
    
    if(['/addgamer', '/addgame'].indexOf(window.location.pathname) !== -1){
        if(permission !== 'true'){
            alert('권한이 없습니다.\n운영자에게 문의하세요.');
            window.location.href = "/";
        }
    }
    
    if(['/signup', '/login'].indexOf(window.location.pathname) === -1){        
        // 비로그인 상태 랜더링
        if(name === ""){
            return(
                <div class="right navbar">
                    <a class="btn btn-outline-primary me-2" href="/login">
                        로그인
                    </a>
                    <a class="btn btn-primary" href="/signup">
                        회원가입
                    </a>
                </div>
            );
        }
        // 로그인 상태 랜더링
        else{
            return(
                <div class="right navbar">
                    {name}님 반갑습니다.&nbsp;&nbsp;
                    <a class="btn btn-primary" onClick={onLogoutHandler}>로그아웃</a>
                </div>
            );
        }
    }
}

export default Header;
