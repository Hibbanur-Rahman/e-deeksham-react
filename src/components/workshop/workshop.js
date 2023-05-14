import './style.css';
import homePhoto from "./about-E-Deeksham.png";
import video from "./videoplayback.mp4";
import videoPart from "./row1.png";

const Workshop = () => {
    return (
        <div>
            <div className="img-div">
                <img className="img-about" src={homePhoto} alt />
            </div>
            <div className="row-1">
                <div className="video-part">
                    <video
                        src={video}
                        type="video/mp4"
                        className="video"
                        controls
                    >
                        djkssd
                    </video>
                </div>
                <div className="content-part">
                    <h5>Upcoming</h5>
                    <h3>
                        Lorem ipsum dolor sit amet,
                        <br />
                        consectetur adipiscing
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididun
                    </p>
                    <button>Register</button>
                </div>
            </div>
            <div className="row-2">
                <div className="content-part">
                    <h5>Completed</h5>
                    <h3>
                        Lorem ipsum dolor sit amet,
                        <br />
                        consectetur adipiscing
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididun
                    </p>
                </div>
                <div className="video-part">
                    <video
                        src={video}
                        type="video/mp4"
                        className="video"
                        controls
                    >
                        djkssd
                    </video>
                </div>
            </div>
            <div className="row-1">
                <div className="video-part">
                    <video
                        src={video}
                        type="video/mp4"
                        className="video"
                        controls
                    >
                        djkssd
                    </video>
                </div>
                <div className="content-part">
                    <h5>Upcoming</h5>
                    <h3>
                        Lorem ipsum dolor sit amet,
                        <br />
                        consectetur adipiscing
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididun
                    </p>
                </div>
            </div>
            <div className="row-2">
                <div className="content-part">
                    <h5>Completed</h5>
                    <h3>
                        Lorem ipsum dolor sit amet,
                        <br />
                        consectetur adipiscing
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididun
                    </p>
                </div>
                <div className="video-part">
                    <video
                        src={video}
                        type="video/mp4"
                        className="video"
                        controls
                    >
                        djkssd
                    </video>
                </div>
            </div>
            <div className="next-page">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>&gt;</div>
            </div>
        </div>

    );
};

export default Workshop;