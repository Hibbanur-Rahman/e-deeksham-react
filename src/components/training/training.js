import './style.css';
import homePhoto from "./images/home-photo.png";
import boxImage from "./images/box-image.png";

function Training() {
    return (
        <div>
            {/* ======================================================= Home photo section start ====================================================== */}
            <div className="home-photo">
                <h1>TRAINING</h1>
                <img src={homePhoto} alt="insight-home-photo" />
            </div>
            {/* ======================================================= Home photo Section End ====================================================== */}
            {/* ======================================================= Text-Section start ====================================================== */}
            <div className="text-section">
                <h1>Schools List</h1>
                <p>List of schools in which we have done the training</p>
                <select>
                    <option value>Select the State</option>
                    <option value>Aandhra Pradesh</option>
                    <option value>Arunachal Pradesh</option>
                    <option value>Assam</option>
                    <option value>Bihar</option>
                    <option value>Chattisgarh</option>
                    <option value>Chandigarh</option>
                    <option value>Delh</option>
                    <option value>Goa</option>
                    <option value>Gujrat</option>
                </select>
            </div>
            {/* ======================================================= Text-Section End ====================================================== */}
            {/* ======================================================= Box-Section Start ====================================================== */}
            <div className="box-section">
                <div className="row">
                    <div className="box">
                        <div><img src={boxImage} alt="box-image" /></div>
                        <div>
                            <h4>School Name</h4>
                            <p>+ READ MORE</p>
                        </div>
                    </div>
                    <div className="box">
                        <div><img src={boxImage} alt="box-image" /></div>
                        <div>
                            <h4>School Name</h4>
                            <p>+ READ MORE</p>
                        </div>
                    </div>
                    <div className="box">
                        <div><img src={boxImage} alt="box-image" /></div>
                        <div>
                            <h4>School Name</h4>
                            <p>+ READ MORE</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="box">
                        <div><img src={boxImage} alt="box-image" /></div>
                        <div>
                            <h4>School Name</h4>
                            <p>+ READ MORE</p>
                        </div>
                    </div>
                    <div className="box">
                        <div><img src={boxImage} alt="box-image" /></div>
                        <div>
                            <h4>School Name</h4>
                            <p>+ READ MORE</p>
                        </div>
                    </div>
                    <div className="box">
                        <div><img src={boxImage} alt="box-image" /></div>
                        <div>
                            <h4>School Name</h4>
                            <p>+ READ MORE</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="box">
                        <div><img src={boxImage} alt="box-image" /></div>
                        <div>
                            <h4>School Name</h4>
                            <p>+ READ MORE</p>
                        </div>
                    </div>
                    <div className="box">
                        <div><img src={boxImage} alt="box-image" /></div>
                        <div>
                            <h4>School Name</h4>
                            <p>+ READ MORE</p>
                        </div>
                    </div>
                    <div className="box">
                        <div><img src={boxImage} alt="box-image" /></div>
                        <div>
                            <h4>School Name</h4>
                            <p>+ READ MORE</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="box">
                        <div><img src={boxImage} alt="box-image" /></div>
                        <div>
                            <h4>School Name</h4>
                            <p>+ READ MORE</p>
                        </div>
                    </div>
                    <div className="box">
                        <div><img src={boxImage} alt="box-image" /></div>
                        <div>
                            <h4>School Name</h4>
                            <p>+ READ MORE</p>
                        </div>
                    </div>
                    <div className="box">
                        <div><img src={boxImage} alt="box-image" /></div>
                        <div>
                            <h4>School Name</h4>
                            <p>+ READ MORE</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ======================================================= Box-Section End ====================================================== */}
            {/* ======================================================= next-page-navigation-section start ====================================================== */}
            <div className="next-page">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>&gt;</div>
            </div>
            {/* ======================================================= next-page-navigation-section End ====================================================== */}
        </div>

    );
}

export default Training;