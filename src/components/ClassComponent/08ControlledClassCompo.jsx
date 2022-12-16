import React, { Component } from 'react';

class ControlledClassCompo extends Component {

    constructor(props) {
        super(props);

        this.state = { value: '' };

        // this.inputData = this.inputData.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    inputData = (anything) => {
        console.log(anything);
        console.log(anything.target);
        console.log(anything.target.value);

        // this.setState({ value: "Test" })
        this.setState({ value: anything.target.value })
    };
    handleSubmit = () => {

    };

    render() {
        return (
            <>
                <div className="p-5">

                    <h4 className='highlight mb-4'>&clubs; Controlled Component :</h4>

                    <p>
                        In HTML, form elements such as <code class="gatsby-code-text">&lt;input&gt;</code>, <code class="gatsby-code-text">&lt;textarea&gt;</code>, and <code class="gatsby-code-text">&lt;select&gt;</code> typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with <code>setState()</code>.
                    </p>
                    <p>
                        We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled component”.
                    </p>
                    <p>
                        For example, if we want to make the previous example log the name when it is submitted, we can write the form as a controlled component:
                    </p>

                    <form onSubmit={this.handleSubmit} >
                        <label>
                            Name:
                            <input type="text" value={this.state.value} onChange={this.inputData} />
                        </label>
                        <input className='btn ms-2' type="submit" value="Submit" />
                        <br />
                        {this.state.value}
                    </form>
                </div>
            </>
        );
    }
}

export default ControlledClassCompo;