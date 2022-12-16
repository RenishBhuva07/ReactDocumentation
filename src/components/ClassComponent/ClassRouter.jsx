import React from 'react'
import { Routes, Route } from 'react-router-dom';
import IntroClassCompo from './01IntroClassCompo.jsx';
import ConstructorClassCompo from './02ConstructorClassCompo.jsx';
import StateClassCompo from './03StateClassCompo.jsx';
import PropsClassCompo from './04PropsClassCompo.jsx';
import LifeCycleClassCompo from './05LifeCycleClassCompo.jsx';
import JSXClassCompo from './06JSXClassCompo.jsx';
import ConditionalRendringClassCompo from './07ConditionalRendringClassCompo.jsx';
import ControlledClassCompo from './08ControlledClassCompo.jsx';
import UnControlledClassCompo from './09UnControlledClassCompo.jsx';
import SpreadVsRestCompo from './10SpreadVsRestCompo.jsx';
import CompositionVsInheritanceCompo from './11CompositionVsInheritanceCompo.jsx';
import ArrayMapingCompo from './12ArrayMapingCompo.jsx';
import CssExampleCompo from './13CssExampleCompo.jsx';
import StateLiftingCompo from './14StateLiftingParent.jsx';
import HighOrderCompoEx from './15HOC/15.1App';

const ClassCompoRouter = () => {
    return (
        <>
            <Routes>
                {/* <Route index element={<IntroClassCompo />} /> */}
                <Route path="/" element={<IntroClassCompo />} >
                    <Route path="constructor" element={<ConstructorClassCompo />}></Route>
                    <Route path="stateinclass" element={<StateClassCompo />}></Route>
                    <Route path="propsinclass" element={<PropsClassCompo />}></Route>
                    <Route path="lifecycleinclass" element={<LifeCycleClassCompo />}></Route>
                    <Route path="JSXinclass" element={<JSXClassCompo />}></Route>
                    <Route path="conditionalrendering" element={<ConditionalRendringClassCompo />}></Route>
                    <Route path="controlledcompo" element={<ControlledClassCompo />}></Route>
                    <Route path="uncontrolledcompo" element={<UnControlledClassCompo />}></Route>
                    <Route path="spreadvsrest" element={<SpreadVsRestCompo />}></Route>
                    <Route path="compositionvsinheritance" element={<CompositionVsInheritanceCompo />}></Route>
                    <Route path="arraymaping" element={<ArrayMapingCompo />}></Route>
                    <Route path="cssexample" element={<CssExampleCompo />}></Route>
                    <Route path="stateliftinginclass" element={<StateLiftingCompo />}></Route>
                    <Route path="highordercomponent" element={<HighOrderCompoEx />}></Route>
                </Route>
            </Routes >
        </>
    );
}

export default ClassCompoRouter;