import React from 'react';

const AjaxFunctionalCompo = () => {
    return (
        <>
            <div className="p-5">

                <h4 className='highlight mb-4'><a target="_blank" href="https://www.google.com/search?q=what+is+ajax+in+react+js&oq=what+is+ajax+in+re&aqs=chrome.1.0i512l2j69i57j0i22i30l7.7477j0j7&sourceid=chrome&ie=UTF-8">&clubs; Ajax : (Asynchronous JavaScript and XML)</a></h4>

                <p>
                    &clubs; <strong className="highlight">AJAX is a set of tools used to make calls to the server to fetch some data</strong>. In this article, we will see how to implement a <strong className="highlight"><a target="_blank" href="https://www.geeksforgeeks.org/how-to-use-simple-api-using-ajax/">simple API call using AJAX</a></strong>.
                </p>

                <p>
                    &clubs; AJAX is a web technology used in <strong className="highlight">client-side to perform an asynchronous HTTP request</strong>. Simply, <strong className="highlight">we can use AJAX to fetch data from a server without reloading a page</strong> (If you don't like the term AJAX, remember is as fetching data from APIs, no rocket science).
                </p>

                <p>
                    &clubs; APIs are used for fetching data from the server and using AJAX and API we call data asynchronously and show it in our HTML. You can make API requests by using browser build in fetch function or third party libraries like <strong className="highlight">Axios</strong>.
                </p>
                <p>
                    &clubs; You can use any AJAX library you like with React. Some popular ones are <strong className='highlight'>Axios, jQuery AJAX</strong>, and the browser built-in <strong className="highlight">window.fetch</strong>.
                </p>

            </div>
        </>
    );
};

export default AjaxFunctionalCompo;