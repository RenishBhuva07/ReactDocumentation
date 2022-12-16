import React, { Component } from 'react'

class ConstructorClassCompo extends Component {
    someData = "In";
    constructor() {
        super();
        // console.log("called Constructor");
        // this.clkfn = this.clkfn.bind(this); // [clkfn function Bind line]

        this.state = { data: "State Data" } // [State]
    }
    // clkfn() {
    //     console.log("clkfn Called");
    //     console.log(this.someData);
    // this.someData = "Testing"
    // }
    clickHandlerFunction = () => {
        console.log("clkfn Called");
        console.log(this.someData);
        this.someData = "In Class Component"

        this.setState({
            data: "New State Data Updated"
        })
    }

    render() {


        return (
            <>
                <div className='p-5'>

                    <h4 className='highlight mb-4'>&clubs; State in ClassCompo :</h4>
                    <p>
                        {this.someData}:<br />
                        React components has a <b className="highlight">built-in state object</b>. <b className="highlight">The state object</b> is where you <b className="highlight">store property values</b> that belongs to the component. When the state object changes, the component re-renders.
                    </p>
                    <p>
                        &clubs; Inside class if we are going to build a function we dsnt required to specify it with <b className='highlight'>function</b> keyword because of class is a collection of data member and member functions only.
                    </p>
                    <p>
                        <b className="highlight">&clubs; Keep These Two Points While Using State.</b><br />
                        &clubs; <b className='highlight'>State</b> should not be modified directly, but it can be modified with a special method called <b className="highlight">setState&#40;&#41;</b>.<br />
                        &clubs; <b className='highlight'>State affects the performance of your app,</b>and therefore it shouldn't be used <b className="highlight">unnecessarily</b>.
                    </p>

                    {/* <button onClick={this.clkfn()}>Click Me</button> Never called  a function with () because it will called function directly. */}
                    <button className='btn' onClick={this.clkfn}>Bind</button>
                    <br />
                    <br />
                    <p>&clubs; <b className='text-primary'>This</b> - keyword refers it selfs (Current Object)</p>

                    <button className='btn' onClick={this.clickHandlerFunction}>Called Without Bind</button>
                    <br />
                    <br />
                    <span className='highlight'>{this.state.data}</span>

                </div>
            </>
        )
    }
}

export default ConstructorClassCompo;