import React, { Component } from 'react'
import CardCompo from './4.1CardCompo.jsx';
import Img1 from './ClassImages/html.png';
import Img2 from './ClassImages/css3.png';
import Img3 from './ClassImages/java-script.png';
import Img4 from './ClassImages/react.png';


class PropsClassCompo extends Component {
    render() {
        return (
            <>
                <div className="p-5">
                    <h4 className='highlight mb-4'>&clubs; Props :</h4>
                    <p>
                        <b className="highlight">Props stands for "Properties".</b> <b className="highlight"></b><b className="highlight"></b>
                    </p>

                    <div className="row">
                        <div className="col-md-3">
                            {/* Another Way to define URL Of image from public folder */}

                            {/* imgpath={`${process.env.PUBLIC_URL}/Images/imsd.png`} */}
                            <CardCompo title="HTML" imgpath={Img1} text="HTML is a  Structure of the web app." />
                        </div>
                        <div className="col-md-3">
                            <CardCompo title="CSS" imgpath={Img2} text="Beautification of the HTML structure." />
                        </div>
                        <div className="col-md-3">
                            <CardCompo title="JAVASCRIPT" imgpath={Img3} text="Javascript is a Behaviour Of the web app." />
                        </div>
                        <div className="col-md-3">
                            <CardCompo title="REACTJS" imgpath={Img4} text="UI Component based Single Page Web App." />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default PropsClassCompo;