import React from 'react'

function SignUp(){

    return(
        <div id='signup'>
            <form id="SignUpForm" action="/signup" method="post">
                <div>
                    <label for="id">아이디</label>
                    <input name="id" id="id" required minlength='5' maxlength='20' type="text" placeholder="ID" title="5~10자를 입력하세요." />
                </div>
                <div>
                    <label for="password">비밀번호</label>
                    <input name="password" id="password" required minlength='4' maxlength='20' type="password" placeholder="Password" title="4~20자를 입력하세요." />
                </div>
                <div>
                    <label for="name">이름</label>
                    <input name="name" id="name" required minlength='1' maxlength='10' type="text" placeholder="Name" title="1~10자를 입력하세요." />
                </div>
                <div>
                    <button type="submit">회원가입</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp
