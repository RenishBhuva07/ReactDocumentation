import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/01MainPage.jsx';
import ExampleCompo from './components/02ExmpleCompo.jsx';

const MainRouter = () => {
    // If you write the "import syntax" in the Curly braces make sure you have to write a "Return" keyword. 

    // const ExampleCompoLazy = React.lazy(() => import("./components/ExampleComponent/ExampleRouter"))

    const ExampleCompoLazy = React.lazy(() => { return import("./components/ExampleComponent/ExampleRouter") })
    const ClassCompoLazy = React.lazy(() => { return import("./components/ClassComponent/ClassRouter") })
    const FunctionalCompoLazy = React.lazy(() => { return import("./components/FunctionalComponent/FunctionalRouter") })
    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage />} >
                    <Route path="example" element={<ExampleCompo />} />
                    <Route path="example/*" element={<ExampleCompo />} >
                        <Route path="examplecompo/*" element={<Suspense fallback={<h1>Loding....</h1>}><ExampleCompoLazy /></Suspense>} />
                        <Route path="classcompo/*" element={<Suspense fallback={<h1>Loding....</h1>}><ClassCompoLazy /></Suspense>} />
                        <Route path="functionalcompo/*" element={<Suspense fallback={<h1>Loding....</h1>}><FunctionalCompoLazy /></Suspense>} />
                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default MainRouter;