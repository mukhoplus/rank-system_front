import React from 'react'

function SignUp(){
    const valueCheck = ()=>{
        const id = document.getElementById("id").value;
        const password = document.getElementById("password").value;
        const name = document.getElementById("name").value;

        if(id === ""){
            alert('아이디를 입력하세요.');
            id.focus();
            return false;
        }
        if(password === ""){
            alert('비밀번호를 입력하세요.');
            password.focus();
            return false;
        }
        if(name === ""){
            alert('이름을 입력하세요.');
            name.focus();
            return false;
        }

        let checkId = /^[a-z0-9-_]+$/g;
        if(!checkId.test(id) || !(5 <= id.length && id.length <= 20)){
            alert('아이디는 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.');
            id.focus();
            return false;
        }
        let checkPassword = /^[a-zA-Z0-9-_!@#$%^*+=]+$/g;
        if(!checkPassword.test(password) || !(4 <= password.length && password.length <= 20)){
            alert('비밀번호는 4~20자의 영어 대소문자, 숫자와 특수기호만 사용 가능합니다.');
            password.focus();
            return false;
        }
        let checkName = /^[a-zA-Z0-9가-힣-_!@#$%^*+=]+$/g;
        if(!checkName.test(name) || !(1 <= name.length && name.length <= 10)){
            alert('이름은 1~10자의 한글, 영어 대소문자, 숫자와 특수기호만 사용 가능합니다.');
            name.focus();
            return false;
        }

        document.SignUpForm.submit();
    }
    return(
        <div id='signup'>
            <form id="SignUpForm" name="SignUpForm" action="/signup" method="post">
                <div>
                    <label for="id">아이디</label>
                    <input name="id" id="id" required minlength='5' maxlength='20' type="text" placeholder="ID" />
                </div>
                <div>
                    <label for="password">비밀번호</label>
                    <input name="password" id="password" required minlength='4' maxlength='20' type="password" placeholder="Password" />
                </div>
                <div>
                    <label for="name">이름</label>
                    <input name="name" id="name" required minlength='1' maxlength='10' type="text" placeholder="Name" />
                </div>
                <div>
                    <button type="button" onClick={valueCheck}>회원가입</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp
