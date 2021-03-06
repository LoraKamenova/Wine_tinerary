import './Aside.css'
import AsideItem from "./AsideItem/AsideItem";
import Footer from "../Footer/Footer";

import {Link, NavLink} from "react-router-dom";
import React, {useContext} from 'react';
import UserContext from "../../../Context";
import {useHistory} from 'react-router-dom';

const Aside = () => {
    const context = useContext(UserContext);
    const history = useHistory();

    const loggedIn = context.user && context.user.loggedIn;

    const logOut = () => {
        context.logOut()
        history.push('/')
    }


    if (loggedIn) {
        return (
            <aside className="aside-navigation-wrapper">
                <div className="site-name-container">
                    <h1 className="site-name">Винoписи</h1>;
                </div>
                <div className="aside-navigation">
                    <ul className="aside-navigation-list">
                        <NavLink activeClassName="selected-aside-item" exact={true}
                                 to="/home"><AsideItem>НАЧАЛО</AsideItem></NavLink>
                        <NavLink activeClassName="selected-aside-item" exact={true}
                                 to="/journal"><AsideItem>ПЪТЕПИСИ</AsideItem></NavLink>
                        <NavLink activeClassName="selected-aside-item" exact={true}
                                 to="/destination"><AsideItem>ДЕСТИНАЦИИ</AsideItem></NavLink>
                        <NavLink activeClassName="selected-aside-item" exact={true}
                                 to="/wine/top"><AsideItem>ВИНЕН ЛИСТ</AsideItem></NavLink>
                        <NavLink activeClassName="selected-aside-item" exact={true}
                                 to="/dictionary/all"><AsideItem>РЕЧНИК</AsideItem></NavLink>
                        <NavLink activeClassName="selected-aside-item" exact={true}
                                 to="/profile"><AsideItem>ПРОФИЛ</AsideItem></NavLink>
                        <NavLink onClick={logOut} to="/"><AsideItem>ИЗХОД</AsideItem></NavLink>
                    </ul>
                </div>

                <Footer/>
            </aside>
        )
    } else {
        return (
            <aside className="aside-navigation-wrapper">
                <div className="site-name-container">
                </div>

                <div className="aside-navigation">
                    <ul className="aside-navigation-list">
                        <NavLink activeClassName="selected-aside-item" exact={true}
                                 to="/"><AsideItem>НАЧАЛО</AsideItem></NavLink>
                        <NavLink activeClassName="selected-aside-item" exact={true}
                                 to="/register"><AsideItem>РЕГИСТРАЦИЯ</AsideItem></NavLink>
                        <NavLink activeClassName="selected-aside-item" exact={true}
                                 to="/login"><AsideItem>ВХОД</AsideItem></NavLink>

                    </ul>
                </div>

                <Footer/>
            </aside>
        )
    }
}

export default Aside;
