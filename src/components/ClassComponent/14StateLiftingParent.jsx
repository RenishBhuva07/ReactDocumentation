import React, { Component } from 'react';
import TemperatureInput from './14.1StateLiftingChild.jsx';

class StateLiftingParent extends Component {

    handleCelciusChange = (data) => {
        console.log("ParentMainFile handleCelciusChange", data);
    };

    render() {
        return (
            <>
                <div className="p-5">
                    <h4 className='highlight mb-4'><a target="_blank" href='https://reactjs.org/docs/lifting-state-up.html'> &clubs; State Lifting :</a></h4>

                    <TemperatureInput scale="c" temperature='-25' onTemperatureChange={this.handleCelciusChange} />
                </div>
            </>
        );
    }
}

export default StateLiftingParent;