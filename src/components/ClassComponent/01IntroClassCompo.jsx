import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const IntroFunctionalCompo = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-4 text-center offset-md-4">
                    Intro Class Component

                    <ul>
                        <li><Link to="constructor">Constructor</Link></li>
                        <li><Link to="stateinclass">State</Link></li>
                        <li><Link to="propsinclass">Props</Link></li>
                        <li><Link to="lifecycleinclass">LifeCycle</Link></li>
                        <li><Link to="JSXinclass">JSX</Link></li>
                        <li><Link to="conditionalrendering">Conditional Rendering</Link></li>
                        <li><Link to="controlledcompo">Controlled Component</Link></li>
                        <li><Link to="uncontrolledcompo">UnControlled Component</Link></li>
                        <li><Link to="spreadvsrest">Spread Operator Vs Rest Parameter</Link></li>
                        <li><Link to="compositionvsinheritance">Composition Vs Inheritance</Link></li>
                        <li><Link to="arraymaping">Array map()</Link></li>
                        <li><Link to="cssexample">CSS Example</Link></li>
                        <li><Link to="stateliftinginclass">State Lifting</Link></li>
                        <li><Link to="highordercomponent">High Order Component</Link></li>
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