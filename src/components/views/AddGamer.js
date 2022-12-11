import React from 'react'

function AddGamer(){
    return(
        <body>
            <h3>선수 추가</h3>
            <div id='addgamer'>
                <form id="AddGamerForm" action="/addgamer" method="post">
                    <div>
                        <label for="name">이름</label>
                        <input name="name" id="name" required minlength='1' maxlength='10' type="text" placeholder="Name" title="1~10자를 입력하세요." />
                    </div>
                    <div>
                        <button type="submit">선수 추가</button>
                    </div>
                </form>
            </div>
        </body>
        
    )
}

export default AddGamer
