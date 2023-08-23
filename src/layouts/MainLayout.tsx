import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../components";
import '../styles/components/MainLayout.css';
import {Footer} from "../components/Footer/Footer";

const MainLayout = () => {
    return (
        <div className={'main-layout'}>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export {MainLayout};