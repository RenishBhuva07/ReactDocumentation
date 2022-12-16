import React, { Component } from 'react'

class ConstructorClassCompo extends Component {

    constructor() {
        super();
        console.log("called");
    }

    render() {
        return (
            <>
                <div className='p-5'>

                    <h4 className='highlight mb-4'>&clubs; Constructor :</h4>
                    <p>
                        The constructor is a method which is <b className="highlight">automatically called during the creation of an object in a class</b>.<br />
                        The constructor in a React component is called before the component is mounted.
                    </p>

                    <div className="bg-dark b_radius text-light p-4">
                        <ul>
                            <li><b className='text-warning'>Syntax :</b></li>
                            <hr />
                            <li>
                                <span>Constructor&#40;props&#41;&#123;</span>
                            </li>
                            <li>
                                <span><span className='text-primary ms-3'>super</span>&#40;props&#41;;</span>
                            </li>
                            <li>
                                <span>&#125;</span>
                            </li>
                        </ul>
                    </div>
                    <p>
                        <b>&clubs; In React, constructors are mainly used for two purposes:</b><br />
                        1-It used for initializing the local state of the component by assigning an object to <b className="highlight">this.state</b>.<br />
                        2-It used for <b className="highlight">binding</b> event handler methods that occur in your component.
                    </p>
                    <p>
                        &clubs; You cannot call <b className="highlight">setState&#40;&#41;</b> method directly in the constructor&#40;&#41;. If the component needs to use local state, you need directly to use 'this.state' to assign the initial state in the constructor. <b className="highlight">The constructor only uses this.state to assign initial state</b>, and all other methods need to use set.state&#40;&#41; method.
                    </p>

                </div>
            </>
        )
    }
}

export default ConstructorClassCompo;