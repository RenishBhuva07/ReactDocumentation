import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const ExampleCompo = () => {
    return (
        <>
            {/* Example Component */}
            <div className="container-fluid bg-happy">
                <div className="container">
                    <div className="row text-center pt-2">
                        <h2 className="text-center">React Components</h2>
                        <div className="col-4">
                            <Link to="examplecompo">
                                <h4>Example Component</h4>
                            </Link>
                        </div>
                        <div className="col-4">
                            <Link to="classcompo">
                                <h4>Class Component</h4>
                            </Link>
                        </div>
                        <div className="col-4">
                            <Link to="functionalcompo">
                                <h4>Fucntional Component</h4>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container">
                <Outlet></Outlet>
            </div>
        </>
    );
}

export default ExampleCompo;