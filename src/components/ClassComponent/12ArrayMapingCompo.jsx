import React, { Component } from 'react';

class ArrayMapingCompo extends Component {
    render() {
        return (
            <>
                <div className="p-5">

                    <h4 className='highlight mb-4'><a target="_blank" href="https://www.javatpoint.com/react-map"> &clubs; Array map() :</a></h4>
                    <p>
                        <b className="highlight">map() :</b><br />
                        map() creates a new array from calling a function for every array element. map() calls a function once for each element in an array. map() does not execute the function for empty elements.
                    </p>

                    <div>
                        <ArrayAccessThrouProps menuitems={menuItems} />
                    </div>

                </div>
            </>
        );
    }
}

function ArrayAccessThrouProps(props) {
    console.log(props);
    const list = props.menuitems;
    // array.forEach(element => {

    // });
    const updatedList = list.map((listitems) => {
        return (<li>
            {listitems}
        </li>);
    });
    return (<ul>{updatedList}</ul>);
}
const menuItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const menuItems = { 1: "Renish", 2:"Parth"};


export default ArrayMapingCompo;