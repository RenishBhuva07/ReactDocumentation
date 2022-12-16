import React, { Component } from 'react';

class SpreadVsRestCompo extends Component {

    // --------------------REST PARAMETER START--------------------
    // handleClick = (e) => {
    //     console.log();
    // };

    //Rest Op Start
    getRestData = (a, b, ...data) => {
        console.log("called");
        console.log("a-", a);
        console.log("b-", b);
        console.log("LeftOver Data-", data);
        // console.log(data[0]);
    };
    // --------------------REST PARAMETER END--------------------

    render() {
        // --------------------SREAD OPERATOR START--------------------
        let arr = [1, 2, 3];
        // let arr = [0=>1,1=>2,2=>3];
        let arr2 = [4, 5, 6];
        // let arr = [0=>4,1=>5,2=>6];
        arr = arr.concat(arr2);
        // let arr = [0=>1,1=>2,2=>3,3=>4,4=>5,5=>6];
        // console.log(arr);
        // alert(arr);

        let array = [1, 2, 3];
        let array2 = [4, 5, 6];
        array = [...array, ...array2];
        // console.log(array);
        // alert(array);
        // --------------------SREAD OPERATOR END--------------------
        return (
            <>
                <div className="p-5">

                    {/* --------------------SREAD OPERATOR START-------------------- */}
                    <div className="spread_operator">
                        <h4 className='highlight mb-4'>&clubs; Spread Operator :</h4>
                        {/* ફેલાવી દેવુ */}

                        <div className="bg-dark b_radius text-light p-4">
                            <ul>
                                <li><b className='text-warning'>Without Spread Operator :</b></li>
                                <hr />
                                <li>
                                    <p><span className='purple'>let </span>arr = <span className="green"> [1,2,3] </span>;</p>
                                </li>
                                <li>
                                    <p><span className='purple'>let </span>arr2 = <span className="green"> [4,5,6] </span>;</p>
                                </li>
                                <li>
                                    <p>arr = arr<span className='purple'>.concat </span><span className="green"> (arr2) </span>;</p>
                                </li>
                                <li>
                                    <p><span className='purple'>alert </span>(arr);</p>
                                </li>
                                <li><button onClick={() => alert("arr = arr.concat(arr2) ; = " + arr)} className="btn">Output</button></li>
                            </ul>
                        </div>

                        <div className="bg-dark b_radius text-light p-4 mt-2">
                            <ul>
                                <li><b className='text-warning'>Spread Operator Doing The concat Job :</b></li>
                                <hr />
                                <li>
                                    <p><span className='purple'>let </span>array = <span className="green"> [1,2,3] </span>;</p>
                                </li>
                                <li>
                                    <p><span className='purple'>let </span>array2 = <span className="green"> [4,5,6] </span>;</p>
                                </li>
                                <li>
                                    <p>array = [<span className="green"> ... </span>array,<span className="green"> ... </span>array2] ;</p>
                                </li>
                                <li>
                                    <p><span className='purple'>alert </span>(array);</p>
                                </li>
                                <li><button onClick={() => alert("array = [...array, ...array2] ; = " + array)} className="btn">Output</button></li>
                            </ul>
                        </div>
                    </div>
                    {/* --------------------SREAD OPERATOR END-------------------- */}

                    {/* --------------------REST PARAMETER START-------------------- */}
                    <div className="rest_parameter mt-5">
                        <h4 className='highlight mb-4'>&clubs; Rest Parameter :</h4>
                        {/* બાકી બચેલુ */}

                        <div className="bg-dark b_radius text-light p-4">
                            <ul>
                                <li><b className='text-warning'>With Rest Prameter :</b></li>
                                <hr />
                                <li>
                                    <p><span className='purple'>getRestData </span> = <span className="green"> (a, b, ...data) </span>=&#62; &#123;</p>
                                </li>
                                <li>
                                    <p><span className='purple'>console.log </span>("a-", a);</p>
                                </li>
                                <li>
                                    <p><span className='purple'>console.log </span>("b-", b);</p>
                                </li>
                                <li>
                                    <p><span className='purple'>console.log </span>("LeftOver Data-", data);</p>
                                </li>
                                <li>
                                    <p>&#125;;</p>
                                </li>
                                <li>
                                    <button onClick={() => this.getRestData("one", "two", "three", "four", "five", "six")} className="btn">Output In Console Log</button>
                                </li>
                            </ul>
                        </div>

                        {/* () => this.getRestData("one", "two", "three", "four", "five", "six") */}
                        {/* {this.getRestData("one", "two", "three", "four", "five", "six")} */}
                    </div>
                    {/* --------------------REST PARAMETER END-------------------- */}

                </div>
            </>
        );
    }
}

export default SpreadVsRestCompo;