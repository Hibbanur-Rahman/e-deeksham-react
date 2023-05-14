import edeekshamlogo from './images/edeeksham_logo_new-removebg-preview.png'
import manuulogo from "./images/manuu-logo.png";
import ministrylogo from "./images/Meity.jpg";
import './style.css';
import {
    Link
} from 'react-router-dom';
function Heading() {
    return (
        <div className="heading-section">

            <div className="header">
                <div className="left-div">
                    <div>
                        <img src={ministrylogo} alt="ministry-logo" width="200px" height="80px" />
                    </div>
                    <div className="logo-photo">
                        <img src={edeekshamlogo} alt="edeekshaam-logo" width="150px"
                            height="80px" />
                    </div>
                    <div className="head-title">
                        <p>Adaptive Assistive System for children With Intellectual Disability</p>
                    </div>
                </div>
                <div className="right-div">
                    <div className="logo-photo">
                        <img src={manuulogo} alt="manuu-logo" width="70px" height="80px" />
                    </div>

                </div>
            </div>
            <div className="navbar">
                <div className="navlist">
                    <div className="list-item">
                        <Link to="/">
                            <div className="item">Home</div>
                        </Link>
                        <div className="dropdown">
                            <button className="dropdown-btn" onclick="about()">About</button>
                            <div className="dropdown-options">
                                <Link to="/Edeeksham">E-Deeksham</Link>
                                <Link to="/Manuu">MANUU</Link>
                                <Link to="/Team">Our Team</Link>
                                <Link to="/Expert">Experts</Link>
                            </div>
                        </div>
                        <Link to="/Workshop" >
                            <div className="item">Workshop</div>
                        </Link>
                        <Link to="/Training">
                            <div className="item">Training</div>
                        </Link>
                        <Link to="/Contact">
                            <div className="item">Contact us</div>
                        </Link>
                        <Link to="/Insight">
                            <div className="item">Insights</div>
                        </Link>
                        <Link to="Faq">
                            <div className="item">FAQs</div>
                        </Link>

                    </div>
                </div>
                <div className="nav-btn">
                    <button style={{ width: "100px", height: "40px" }}>Login</button>
                    <button style={{ width: "120px", height: "40px" }}>Register</button>
                </div>

            </div>

        </div>
    );
}

export default Heading;