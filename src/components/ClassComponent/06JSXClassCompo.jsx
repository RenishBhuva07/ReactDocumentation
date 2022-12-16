import React, { Component } from 'react';

class JSXClassCompo extends Component {
    render() {
        const name = 'Renish Bhuva';
        const element = <h1>Hello, {name}</h1>;

        return (
            <>

                <div className="p-5">

                    <h4 className='highlight mb-4'>&clubs; JSX :</h4>
                    <p>
                        <b className="highlight">JSX stands for "Javascript XML".</b><br />
                        JSX is a <b className="highlight">Syntax Extension</b> of Javascript.<br />
                        JSX allows us to <b className="highlight">write HTML directly into React</b>.
                    </p>

                    <div className="bg-dark b_radius text-light p-4">
                        <ul>
                            <li><b className='text-warning'>Example-1 :</b></li>
                            <hr />
                            <li>
                                <p><span className='purple'>const </span>name = <span className="green"> 'Renish Bhuva' </span>;</p>
                            </li>
                            <li>
                                <p><span className='purple'>const </span>element = <span className="red">&#60;h1&#62;</span><span> Hello, &#123; name &#125; </span><span className="red">&#60;/ h1&#62;</span> ;</p>
                            </li>
                            <li><b className='text-warning'>Output :</b></li>
                            <li>
                                {element}
                            </li>
                        </ul>
                    </div>

                    <div className="bg-dark b_radius text-light p-4 mt-2">
                        <ul>
                            <li><b className='text-warning'>Example-2 :</b></li>
                            <hr />
                            <li>
                                <p>5+5 = &#123; 5 + 5 &#125;</p>
                            </li>
                            <li><b className='text-warning'>Output :</b></li>
                            <li>
                                <p>5+5={5 + 5}</p>
                            </li>
                        </ul>
                    </div>

                </div>

            </>
        );
    }
}

export default JSXClassCompo;