import React, { Component } from 'react';
import styledComponents from 'styled-components';

class CssExampleCompo extends Component {
    render() {

        const customCss = {
            color: "blue",
            backgroundColor: "orange"
        };

        const Button = styledComponents.button`
            color: palevioletred;
            font-size: 1em;
            margin: 1em;
            padding: 0.25em 1em;
            border: 2px solid palevioletred;
            border-radius: 3px;
        `;

        const Wrapper = styledComponents.section`
            padding: 4em;
            background: papayawhip;
        `;

        const txtc = {
            color: "blue",
            backGround: "yellow"
        };
        const txts = {
            fontSize: "80px"
        };

        return (
            <>
                <div className="p-5">

                    <h4 className='highlight mb-4'><a target="_blank" href='https://reactjs.org/docs/faq-styling.html#gatsby-focus-wrapper'> &clubs; Styling and CSS :</a></h4>

                    <p style={customCss}>Testing</p>

                    <Button>BTN</Button>

                    <Wrapper>Hello World !</Wrapper>

                    <h1 style={{ ...txtc, ...txts }}>Hello Wolrd !</h1>

                </div>
            </>
        );
    }
}

export default CssExampleCompo;