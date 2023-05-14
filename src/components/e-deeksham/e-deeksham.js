import './style.css';
import aboutEdeeksham from "./aboutEDeeksham/about-E-Deeksham.png";
import ourMission from "./aboutEDeeksham/our-mission.png";
import image1 from "./aboutEDeeksham/image.jpg";
import ourVission from "./aboutEDeeksham/our_vision.png";

function Edeeksham() {
    return (
        <div>
            <div className="img-div">
                <img className="img-about" src={aboutEdeeksham} alt />
            </div>
            <div className="about-eDeeksham">
                <div className="content-part">
                    {/* <h2>About E-Deeksham</h2> */}
                    <h1>Inclusive Education is our first <br /> priority</h1>
                    <p>E-Deekshaam is an adaptable, assistive learning framework that can be used in both online and blended
                        modes in two parts: the web-based system and a mobile application to accompany it. The framework would
                        include content for children aged 6 to 18. The system will help teachers and parents by generating
                        personalized IEPs which the teachers can later modify to suit the child's needs. Two hundred topics in
                        domains ranging from motor training to social community interactions will be prepared in all possible
                        formats and uploaded to the system. The system would be available free of cost to anybody who registers
                        in it. In all, it will be a platform wherein the students' performance, behaviours, and progress can be
                        tracked, and a holistic learning environment is provided. Around 500 teachers, parents and special
                        educators will be trained to use the system and their feedback will be gathered to assess its usability
                        and effectiveness.</p>
                </div>
                <div className="img-part">
                    <div className="about-img">
                        <img className="img1" src={image1} alt />
                    </div>
                    <div className="box-edeeksham" />
                </div>
            </div>
            {/* ======================================================= vision-mission End ======================================================= */}
            <div className="vision-mission">
                <div className="heading">
                    <h2 align="center">
                        Inclusive, good-quality education is a foundation for dynamic and equitable societies<br /> ~ Desmond Tutu
                    </h2>
                </div>
                <div className="row-edeeksham">
                    <div className="mission">
                        <div className="img-mission">
                            <img src={ourMission} alt />
                        </div>
                        <div className="mission-cont">
                            <h2>
                                Our mission
                            </h2>
                            <p>
                                Our mission is to provide an adaptive assistive system to help children with intellectual
                                disabilities to learn and succeed. We aim to offer a supportive and inclusive environment where
                                children learn meaningfully, develop essential skills, and gain confidence in their&nbsp;abilities.
                            </p>
                        </div>
                    </div>
                    <div className="vision">
                        <div className="img-vision">
                            <img src={ourVission} alt />
                        </div>
                        <div className="mission-cont">
                            <h2>
                                Our Vision
                            </h2>
                            <p>
                                Our Vision is that every child with an intellectual disability thrives and accomplishes their
                                goals. Our adaptive assistive system will help children with intellectual disabilities overcome
                                hurdles and reach their&nbsp;full&nbsp;potential.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ======================================================= vision-mission End ======================================================= */}
        </div>

    );
}
export default Edeeksham;