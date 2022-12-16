import React, { Component } from 'react'
// importing HighOrder file
import EnhancedComponent from './15HighOrderCompo'

class App extends Component {
    render() {
        // Destructuring the props
        const { show, handleclick } = this.props

        // Calling out the props
        return (
            <>
                <>
                    <div className="p-5 h-100">

                        <h4 className='highlight mb-4'><a target="_blank" href='https://reactjs.org/docs/higher-order-components.html'> &clubs; High Order Component (HOC) :</a></h4>

                        <p>
                            &clubs; A higher-order component (HOC) <strong className="highlight">is an advanced technique in React for reusing component functionality logic</strong>.<strong className="highlight"> It simply takes the original component and returns the enhanced component.</strong>
                        </p>
                        <p>
                            &clubs; HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.
                        </p>
                        <p>
                            &clubs; Concretely, <strong className="highlight">a higher-order component is a function that takes a component and returns a new component.</strong>
                        </p>
                        <p>
                            &clubs; Whereas a <b className="highlight">component transforms props into UI</b>, <strong className="highlight">a higher-order component transforms a component into another component.</strong>
                        </p>

                        <div className="bg-dark b_radius text-light p-4">
                            <ul>
                                <li><b className='text-warning'>Syntax :</b></li>
                                <li>
                                    <code className='text-light'><span className='purple'>const</span> <span class="text-whit">EnhancedComponent =</span> <span class="text-primary">higherOrderComponent</span>(<span class="text-white">Wrapped-OriginalComponent</span>);</code>
                                </li>
                            </ul>
                        </div>

                        <div className='d-flex bg-dark b_radius flex-column justify-content-center align-items-center h-200 mt-2'>
                            {/* <EnhancedComponent show="a" handleclick="handleclick"/> */}
                            {/* <button onClick={handleclick}>{show}sdf</button>  */}
                            <button className='btn px-4 fs-1' onClick={handleclick}>{show}</button>
                            <p className='text-warning'>Click Me</p>
                        </div >
                    </div>
                </>
            </>
        )
    }
}


export default EnhancedComponent(App);
