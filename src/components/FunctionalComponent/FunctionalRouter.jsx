import React from 'react'
import { Routes, Route } from 'react-router-dom';
import IntroFunctionalCompo from './01IntroFunctionalCompo.jsx';
import StateFunctionalCompo from './02StateFunctionalCompo.jsx';
import AjaxFunctionalCompo from './03AjaxFunctionalCompo.jsx';
import APIFunctionalCompo from './04APIFunctionalCompo.jsx';
import UseEffectVsLayoutEffectFunctionalCompo from './05UseEffectVsLayoutEffectFunctionalCompo.jsx';

const FunctionalCompoRouter = () => {
    return (
        <>
            <Routes>
                {/* <Route index element={<IntroFunctionalCompo />} /> */}
                <Route path="/" element={<IntroFunctionalCompo />} >
                    <Route path="stateinfunctional" element={<StateFunctionalCompo />} ></Route>
                    <Route path="ajaxinfunctional" element={<AjaxFunctionalCompo />} ></Route>
                    <Route path="apiinfunctional" element={<APIFunctionalCompo />} ></Route>
                    <Route path="useeffectvslayouteffect" element={<UseEffectVsLayoutEffectFunctionalCompo />} ></Route>
                </Route>
            </Routes>
        </>
    );
}

export default FunctionalCompoRouter;