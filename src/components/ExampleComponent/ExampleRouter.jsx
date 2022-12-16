import React from 'react'
import { Routes, Route } from 'react-router-dom';
import IntroExampleCompo from './01IntroExampleCompo.jsx';

const ExampleCompoRouter = () => {
    return (
        <>
            <Routes>
                {/* <Route index element={<IntroExampleCompo />} /> */}
                <Route path="/" element={<IntroExampleCompo />} />
            </Routes>
        </>
    );
}

export default ExampleCompoRouter;