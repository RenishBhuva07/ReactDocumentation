import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const IntroFunctionalCompo = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-4 text-center offset-md-8">
                    Intro Functional Component

                    <ul>
                        <li><Link to="stateinfunctional">State In functional</Link></li>
                        <li><Link to="ajaxinfunctional">Ajax</Link></li>
                        <li><Link to="apiinfunctional">API</Link></li>
                        <li><Link to="useeffectvslayouteffect">UseEffect Vs LayoutEffect</Link></li>
                    </ul>
                </div>
            </div>
            <div className="row border">
                <div className="col bg-white">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default IntroFunctionalCompo;