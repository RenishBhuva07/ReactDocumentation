import React, { useEffect, useState } from 'react';

const UseEffectVsLayoutEffect = () => {

    const [data, setData] = useState();
    const [status, setstatus] = useState(false);

    // ----------SIMPLE UseEffect START----------
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos').then((response) => response.json()).then
    //     ((response) => {
    //         console.log(response);
    //         setData(response);
    //     });
    // });
    // ----------SIMPLE UseEffect END----------

    // ----------UseEffect WITH RETURN START (With Return Works Like "DidMount")----------
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos').then((response) => response.json()).then
    //         ((response) => {
    //             console.log(response);
    //             setData(response);
    //         });
    // });
    // ----------UseEffect WITH RETURN END (With Return Works Like "DidMount")----------

    // ----------UseEffect WITH CONDITIONAL RENDERING START----------
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos').then((response) => response.json()).then
            ((response) => {
                console.log(response);
                setData(response);
            });
    }, [status]);
    // ----------UseEffect WITH CONDITIONAL RENDERING END----------

    return (
        <>
            <div className="p-5">

                <h4 className='highlight mb-4'><a target="_blank" href="https://reactjs.org/docs/hooks-reference.html#useeffect">&clubs; UseEffect</a> Vs <a href="https://reactjs.org/docs/hooks-reference.html#uselayouteffect">LayoutEffect :</a></h4>

                <p>
                    &clubs; The useEffect Hook allows you to perform side effects in your components.
                </p>
                <p>
                    &clubs; Some examples of side effects are: fetching data, directly updating the DOM, and timers.
                </p>
                <p>
                    &clubs; useEffect accepts two arguments. The second argument is optional.
                </p>
                <p>
                    &clubs; If your useEffect function does not contain any dependencies, an infinite loop will occur.
                </p>

                <button className='btn' onClick={() => { setstatus(!status) }}>Click Me {JSON.stringify(status)}</button>

                <p className='mt-5'>
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

export default UseEffectVsLayoutEffect;