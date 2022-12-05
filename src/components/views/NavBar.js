import React from 'react'
import {NavLink} from "react-router-dom"

function NavBar(){
    return(
        <nav>
            <div>
                <NavLink to="/">
                    메인 페이지
                </NavLink>
            </div>
            <div>
                <NavLink to="/">
                    선수 추가
                </NavLink>
            </div>
            <div>
                <NavLink to="/">
                    전적 추가
                </NavLink>
            </div>
        </nav>
    );
}

export default NavBar
