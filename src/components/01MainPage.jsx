import React from 'react'
import HeaderFile from './HeaderFile'
import { Outlet } from 'react-router-dom';
import Footer from './Footer.jsx'

const MainPage = () => {
    return (
        <>
            <HeaderFile />
            <div className="Component_wrapper">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default MainPage;