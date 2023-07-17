import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../components";
import '../styles/components/MainLayout.css';

const MainLayout = () => {
    return (
        <div className={'main-layout'}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};