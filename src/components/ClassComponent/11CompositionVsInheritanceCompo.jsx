import React, { Component } from 'react';

class CompositionVsInheritanceCompo extends Component {
    render() {
        return (
            <>
                <div className="p-5">

                    <h4 className='highlight mb-4'><a target="_blank" href="https://reactjs.org/docs/composition-vs-inheritance.html#gatsby-focus-wrapper"> &clubs; Composition Vs Inheritance :</a></h4>
                    <p>
                        React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components.
                    </p>
                    <p>
                        In this section, we will consider a few problems where developers new to React often reach for inheritance, and show how we can solve them with composition.
                    </p>

                    <Dialog title="Welcome" message="Thank you for visiting our spacecraft!">
                        Children Data
                    </Dialog>

                </div>
            </>
        );
    }
}
// function Dialog(props) {
//     console.log(props);

//     return (
//         <div className='border border-info rounded bg-info bg-opacity-10 d-inline-block p-4'>
//             {props.title}
//             <br />
//             {props.message}
//             <p className='fw-bold'>
//                 {props.children}
//             </p>
//         </div>
//     )
// }
function Dialog(props) {
    console.log(props);

    return (
        <FancyBorder color="red">
            Dialog Compo -
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className='fw-bold'>
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    )
}
function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

export default CompositionVsInheritanceCompo;