import React from 'react';
import { useState } from 'react';

const APIFunctionalCompo = () => {

    const [data, setData] = useState();
    fetch('https://jsonplaceholder.typicode.com/todos').then((response) => response.json()).then
        ((response) => {
            // console.log(response)
            setData(response)
        });
    // fetch('https://jsonplaceholder.typicode.com/todos').then((response) => { return response.json() }).then((response) => console.log(response));
    // fetch('https://jsonplaceholder.typicode.com/todos').then((response) => console.log(response));

    return (
        <>
            <div className="p-5">

                <h4 className='highlight mb-4'><a target="_blank" href="https://reactjs.org/docs/faq-ajax.html#gatsby-focus-wrapper">&clubs; API : (Application Programming Interface)</a></h4>

                <p>
                    &clubs; <strong className="highlight">Application programming interfaces (APIs) are a way for one program to interact with another</strong>.
                </p>
                <p>
                    &clubs; <strong className="highlight">API calls are the medium by which they interact</strong>.
                </p>
                <p>
                    &clubs; <strong className="highlight">An API call, or API request, is a message sent to a server asking an API to provide a service or information</strong>.
                </p>

                <p>
                    {JSON.stringify(data)}
                    {/* {
                    Object.entries(data).map((v)=>{
                        console.log("test");
                    })} */}
                </p>

            </div>

        </>
    );
};

export default APIFunctionalCompo;


// fetch('http://example.com/movies.json')
//     .then((response) => response.json())
//     .then((data) => console.log(data));

// ----------JAVASCRIPT AJAX CALLING XML REQUEST START----------

// var XMLHttpRequest = new XMLHttpRequest();
// XMLHttpRequest.onreadystatechange = function() {
    //     if (XMLHttpRequest.readyState == XMLHttpRequest.DONE) {
        //         console.log(XMLHttpRequest.responseText);
//     }
// }
// XMLHttpRequest.open('GET', 'http://google.com', true);
// XMLHttpRequest.send(null);

// ----------JAVASCRIPT AJAX CALLING XML REQUEST START----------

// ----------JQUERY AJAX CALLING JSON START----------

// var request = $.ajax({
    //     type: 'GET',
//     url: "http://google.com",
//     async: true,
//     success: function() {
    //         console.log('sucess');
    //     }
    // });

    // ----------JQUERY AJAX CALLING JSON END----------