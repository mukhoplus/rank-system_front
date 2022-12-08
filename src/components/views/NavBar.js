import React from 'react'

function NavBar(){
    return(
        <nav>
            <div>
                <a href="/">
                    메인 페이지
                </a>
            </div>
            <div>
                <a href="/addgamer">
                    선수 추가
                </a>
            </div>
            <div>
                <a href="/addgame">
                    전적 추가
                </a>
            </div>
        </nav>
    );
}

export default NavBar
