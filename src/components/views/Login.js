import React from 'react';

function Login() {
    return(
        <div id='login'>
            <h3 class="text-center">로그인</h3>
            <form class="form" id="LoginForm" action="/login" method="post">
                <div class="field">
                    <label for="id">
                        <b>아이디</b>
                    </label>
                    <input name="id" id="id" type="text" placeholder="ID" />
                </div>
                <div class="field">
                    <label for="password">
                        <b>비밀번호</b>
                    </label>
                    <input name="password" id="password" type="password" placeholder="Password" />
                </div>
                <div>
                    <button class="btn btn-outline-primary me-2" type="submit">로그인</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
