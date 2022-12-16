import React, { useState } from 'react';

const StateFunctionalCompo = () => {

    const [count, setCount] = useState(0);

    const clickData = () => {
        console.log("called");
        setCount(count + 1);
    }

    return (
        <>
            <div className="p-5">

                <h4 className='highlight mb-4'><a target="_blank" href="https://reactjs.org/docs/hooks-state.html">&clubs; State in FunctionalCompo :</a></h4>
                <p>
                    &clubs; In Functional Component <b className="highlight">We can not use State Directly</b>, For Using State in Functional compoenent <strong className="highlight">we have to use useState() Hook</strong>.
                </p>
                <p>
                    &clubs; That's Why Functional Component known as a <strong className="highlight">"StateLess Components"</strong>.
                </p>
                <p>
                    &clubs; <strong className="highlight">Hooks</strong> are a new addition in <strong className="highlight">React 16.8</strong> . <strong className="highlight">Hooks don’t work inside classes</strong>.
                </p>
                <p>
                    &clubs; <strong className="highlight">Hooks let you use state and other React features without writing a class</strong>.
                </p>

                <div className="bg-dark b_radius text-light p-4">
                    <ul>
                        <li>
                            <b className='text-warning'>In a class, we initialize the count state to 0 by setting this.state to &#123; count: 0 &#125; in the constructor :</b>
                        </li>
                        <hr className='w-100' />
                        <li>
                            <span className="purple">class</span> <span className="text-warning">Example</span> <span className="purple">extends</span> <span className="text-warning">React.Component</span> <span>&#123;</span>
                        </li>
                        <li>
                            <span className="text-primary ms-3">constructor</span><span>(</span><span>props</span><span>)</span> <span>&#123;</span>
                        </li>
                        <li>
                            <span className="purple ms-5">super</span><span>(</span>props<span>)</span> ;
                        </li>
                        <li>
                            <span className="purple ms-5">this</span><span className=" ">.</span>state <span>=</span> <span>&#123;</span>
                        </li>
                        <li>
                            <span className="text-primary ms-5">count</span><span>:</span> <span className="text-primary">0</span>
                        </li>
                        <li>
                            <span className="ms-4">&#125;</span> ;
                        </li>
                        <li>
                            <span className=" ">&#125;</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-dark b_radius text-light p-4 mt-2">
                    <ul>
                        <li>
                            <b className='text-warning'>In a function component, we have no this, so we can’t assign or read <strong className="highlight">this.state</strong>. Instead, we call the <strong className="highlight">useState</strong> Hook directly inside our component :</b>
                        </li>
                        <hr className='w-100' />
                        <li>
                            <span className="purple">import</span> React<span className="">,</span> <span className="">&#123;</span> useState <span className="">&#125;</span> <span className="purple">from</span> <span className="green">'react'</span> ;
                        </li>
                        <br />
                        <li>
                            <span className="purple">function</span> <span className="text-primary">Example</span><span>(</span><span>)</span> <span>&#123;</span>
                        </li>
                        <li>
                            <span className='ms-3'><small>// Declare a new state variable, which we'll call "count" //</small></span>
                        </li>
                        <li>
                            <span className="purple ms-3">const</span> <span>[ </span>count<span className="">,</span> setCount<span className=""> ]</span> <span className="">=</span> <span className="text-primary">useState</span><span>(</span><span className="text-primary">0</span><span>)</span> ;
                        </li>
                    </ul>
                </div>

                <div className='text-center mt-5 fs-2'>
                    {count}
                    <div className="">
                        <button className='btn' onClick={clickData}>Click Me</button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default StateFunctionalCompo;