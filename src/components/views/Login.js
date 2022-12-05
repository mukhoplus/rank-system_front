import React from 'react'

function Login() {
    return(
        <div id='login'>
            <form id="LoginForm" action="/login" method="post">
                <div>
                    <label for="id">아이디</label>
                    <input name="id" id="id" type="text" placeholder="ID" />
                </div>
                <div>
                    <label for="password">비밀번호</label>
                    <input name="password" id="password" type="password" placeholder="Password" />
                </div>
                <div>
                    <button type="submit">로그인</button>
                </div>
            </form>
        </div>
    )
}

export default Login
