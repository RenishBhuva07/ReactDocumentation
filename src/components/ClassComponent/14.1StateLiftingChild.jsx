import React, { Component } from 'react';

class InputField extends Component {

    handleChange = (e) => {
        console.log("InputField handleChange", e.target.value);
        this.props.onTemperatureChange(e.target.value);
    };

    render() {

        // const temperature = this.props.temperature;
        // const scale = this.props.scale;

        return (
            <>

                <div className="p-5">

                    {/* <legend>Enter Temperature In {scaleNames[scale]}:</legend> */}
                    <input onChange={this.handleChange} />

                </div>

            </>
        );
    }
}

export default InputField;