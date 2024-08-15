import {NavLink} from "react-router-dom";
import React from "react";
import GlobalSVGSelector from "../../assets/icons/GlobalSVGSelector";

import s from './Header.module.css'


function Header() {
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <NavLink to={'/'}><GlobalSVGSelector /></NavLink>
                </div>
                <div className={s.title}>Allrecipes React App</div>
            </div>
        </header>
    );
};

export default Header;