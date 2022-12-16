import React, { Component } from 'react';

class UnControlledClassCompo extends Component {

    constructor(props) {
        super(props);

        this.input = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // console.log(this.input.current.value);
        alert('The Name Is :' + this.input.current.value)
    };


    render() {
        return (
            <>
                <div className="p-5">

                    <h4 className='highlight mb-4'>&clubs; Uncontrolled Component :</h4>

                    <p>
                        In most cases, we recommend using <a target="_blank" href="https://reactjs.org/docs/uncontrolled-components.html#gatsby-focus-wrapper">controlled components</a> to implement forms. In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.
                    </p>
                    <p>
                        To write an uncontrolled component, instead of writing an event handler for every state update, you can <a href="/docs/refs-and-the-dom.html">use a ref</a> to get form values from the DOM.
                    </p>
                    <p>
                        For example, this code accepts a single name in an uncontrolled component:
                    </p>

                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name:
                            <input type="text" ref={this.input} />
                        </label>

                        <input className='btn ms-2' type="submit" value="Submit" />

                        <br />
                        {JSON.stringify(this.input)}
                    </form>

                </div>
            </>
        );
    }
}

export default UnControlledClassCompo;