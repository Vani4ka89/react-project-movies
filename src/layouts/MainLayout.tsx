import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../components";
import '../styles/components/MainLayout.css';
import {Footer} from "../components/Footer/Footer";
import {useAppSelector} from "../hooks";

const MainLayout = () => {
    const {lightTheme} = useAppSelector(state => state.themeReducer);

    return (
        <div className={`${lightTheme?'light-theme': 'main-layout'}`}>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export {MainLayout};