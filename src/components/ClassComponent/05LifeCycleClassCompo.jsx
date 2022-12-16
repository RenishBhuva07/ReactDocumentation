import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LifeCycleClassCompo extends Component {
    constructor(props) {
        super(props);

        console.log("constructor");
        this.state = { data: "State Data" }
    }

    // componentWillMount() {
    //     console.log("componentWillMount");
    // }

    componentDidMount() {
        console.log("componentDidMount");
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log("componentWillReceiveProps");
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        // return false;
        return true;
    }

    // componentWillUpdate(nextProps, nextState) {
    //     console.log("componentWillUpdate");
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log("componentDidUpdate");
    // }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    clickHandle = () => {
        console.log("Clicked");
        this.setState({ data: "Life Cycles Called In Console Log." })
    }

    render() {
        console.log("render");
        return (
            <>
                <div className='p-5'>

                    <h4 className='highlight mb-4'>&clubs; Life Cycles :</h4>

                    <br />
                    {/* <input type="text" name="" value="" id="" /> */}
                    {this.state.data}
                    <br />
                    <button className='btn' onClick={this.clickHandle}>Click Me</button>
                </div>
            </>
        );
    }
}

LifeCycleClassCompo.propTypes = {

};

export default LifeCycleClassCompo;