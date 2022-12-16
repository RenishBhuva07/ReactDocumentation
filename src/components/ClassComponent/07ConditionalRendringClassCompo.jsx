import React, { Component } from 'react';

class ConditionalRendringClassCompo extends Component {

    constructor(props) {
        super(props);

        this.state = { isLoggedIn: false, data: 55 }
    }

    loginchange = () => {
        // console.log("called");
        // this.setState({ isLoggedIn: true }) //For Single Click
        this.setState({ isLoggedIn: !this.state.isLoggedIn })  //For Toggle
    }

    render() {

        let dispData = null;
        // if (this.state.isLoggedIn) {
        //     if (this.state.data > 50) {
        //         dispData = <p>Valid</p>
        //     } else {
        //         dispData = <p>InValid</p>
        //     }
        // }
        if (this.state.isLoggedIn) {
            if (this.state.data > 50) {
                dispData = <p>Valid</p>
            }
        } else {
            dispData = <p>InValid</p>
        }

        return (
            <>
                <div className="p-5">

                    <h4 className='highlight mb-4'>&clubs; Conditional Rendering :</h4>

                    {dispData}

                    {this.state.isLoggedIn ? <h2>LoggedIn</h2> : <h2>LoggedOut</h2>}

                    {this.state.isLoggedIn.toString()}
                    <br />
                    <button className='btn' onClick={this.loginchange}>Click</button>

                </div>
            </>
        );

        // if (this.state.isLoggedIn) {
        //     return (
        //         <>
        //             <div className="p-5">
        //                 <h2>LoggedIn</h2>
        //                 {this.state.isLoggedIn.toString()}
        //                 <br />
        //                 <button onClick={this.loginchange}>Click</button>
        //             </div>
        //         </>
        //     );

        // } else {
        //     return (
        //         <>
        //             <div className="p-5">
        //                 <h2>LoggedOut</h2>
        //                 {this.state.isLoggedIn.toString()}
        //                 <br />
        //                 <button onClick={this.loginchange}>Click</button>
        //             </div>
        //         </>
        //     );

        // }
    }
}

export default ConditionalRendringClassCompo;