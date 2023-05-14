import './style.css';
import imageHead from "./images/image2.jpg";
import imageMember from './images/m1image1.jpg';
function Expert() {
    return (
        <div>
            {/* ======================================================= OurTeam start ====================================================== */}
            <section className="ourteam">
                <img src={imageHead} alt="image" srcSet />
            </section>
            {/* ======================================================= OurTeam End ====================================================== */}
            {/* =======================================================  Expert Team Start ======================================================= */}
            <section className="experts">
                <div className="head">
                    <h1>Meet Our Experts</h1>
                </div>
                <div className="paragraph">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div className="member">
                    <div className="m1">
                        <div className="name1">
                            <h4>Name Of Person</h4>
                            <p><em>Designation</em></p>
                            <div className="s-icons1">
                                <i className="fab fa-facebook-f " />
                                <i className="fab fa-twitter " />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                    <path d="M16.9219 8.5553C18.5132 8.5553 20.0393 9.18744 21.1645 10.3127C22.2897 11.4379 22.9219 12.964 22.9219 14.5553V21.5553H18.9219V14.5553C18.9219 14.0249 18.7112 13.5162 18.3361 13.1411C17.961 12.766 17.4523 12.5553 16.9219 12.5553C16.3914 12.5553 15.8827 12.766 15.5077 13.1411C15.1326 13.5162 14.9219 14.0249 14.9219 14.5553V21.5553H10.9219V14.5553C10.9219 12.964 11.554 11.4379 12.6792 10.3127C13.8045 9.18744 15.3306 8.5553 16.9219 8.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.92188 9.5553H2.92188V21.5553H6.92188V9.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.92188 6.5553C6.02644 6.5553 6.92188 5.65987 6.92188 4.5553C6.92188 3.45073 6.02644 2.5553 4.92188 2.5553C3.81731 2.5553 2.92188 3.45073 2.92188 4.5553C2.92188 5.65987 3.81731 6.5553 4.92188 6.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <hr />
                            <div className="para1">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit,</p>
                            </div>
                        </div>
                        <img src={imageMember} alt />
                        <div className="name-expert">
                            <h4>Name Of Person</h4>
                            <p><em>Designation</em></p>
                            <div className="s-icons">
                                <i className="fab fa-facebook-f " />
                                <i className="fab fa-twitter " />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                    <path d="M16.9219 8.5553C18.5132 8.5553 20.0393 9.18744 21.1645 10.3127C22.2897 11.4379 22.9219 12.964 22.9219 14.5553V21.5553H18.9219V14.5553C18.9219 14.0249 18.7112 13.5162 18.3361 13.1411C17.961 12.766 17.4523 12.5553 16.9219 12.5553C16.3914 12.5553 15.8827 12.766 15.5077 13.1411C15.1326 13.5162 14.9219 14.0249 14.9219 14.5553V21.5553H10.9219V14.5553C10.9219 12.964 11.554 11.4379 12.6792 10.3127C13.8045 9.18744 15.3306 8.5553 16.9219 8.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.92188 9.5553H2.92188V21.5553H6.92188V9.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.92188 6.5553C6.02644 6.5553 6.92188 5.65987 6.92188 4.5553C6.92188 3.45073 6.02644 2.5553 4.92188 2.5553C3.81731 2.5553 2.92188 3.45073 2.92188 4.5553C2.92188 5.65987 3.81731 6.5553 4.92188 6.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="m1">
                        <div className="name1">
                            <h4>Name Of Person</h4>
                            <p><em>Designation</em></p>
                            <div className="s-icons1">
                                <i className="fab fa-facebook-f " />
                                <i className="fab fa-twitter " />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                    <path d="M16.9219 8.5553C18.5132 8.5553 20.0393 9.18744 21.1645 10.3127C22.2897 11.4379 22.9219 12.964 22.9219 14.5553V21.5553H18.9219V14.5553C18.9219 14.0249 18.7112 13.5162 18.3361 13.1411C17.961 12.766 17.4523 12.5553 16.9219 12.5553C16.3914 12.5553 15.8827 12.766 15.5077 13.1411C15.1326 13.5162 14.9219 14.0249 14.9219 14.5553V21.5553H10.9219V14.5553C10.9219 12.964 11.554 11.4379 12.6792 10.3127C13.8045 9.18744 15.3306 8.5553 16.9219 8.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.92188 9.5553H2.92188V21.5553H6.92188V9.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.92188 6.5553C6.02644 6.5553 6.92188 5.65987 6.92188 4.5553C6.92188 3.45073 6.02644 2.5553 4.92188 2.5553C3.81731 2.5553 2.92188 3.45073 2.92188 4.5553C2.92188 5.65987 3.81731 6.5553 4.92188 6.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <hr />
                            <div className="para1">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit,</p>
                            </div>
                        </div>
                        <img src={imageMember} alt />
                        <div className="name-expert">
                            <h4>Name Of Person</h4>
                            <p><em>Designation</em></p>
                            <div className="s-icons">
                                <i className="fab fa-facebook-f " />
                                <i className="fab fa-twitter " />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                    <path d="M16.9219 8.5553C18.5132 8.5553 20.0393 9.18744 21.1645 10.3127C22.2897 11.4379 22.9219 12.964 22.9219 14.5553V21.5553H18.9219V14.5553C18.9219 14.0249 18.7112 13.5162 18.3361 13.1411C17.961 12.766 17.4523 12.5553 16.9219 12.5553C16.3914 12.5553 15.8827 12.766 15.5077 13.1411C15.1326 13.5162 14.9219 14.0249 14.9219 14.5553V21.5553H10.9219V14.5553C10.9219 12.964 11.554 11.4379 12.6792 10.3127C13.8045 9.18744 15.3306 8.5553 16.9219 8.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.92188 9.5553H2.92188V21.5553H6.92188V9.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.92188 6.5553C6.02644 6.5553 6.92188 5.65987 6.92188 4.5553C6.92188 3.45073 6.02644 2.5553 4.92188 2.5553C3.81731 2.5553 2.92188 3.45073 2.92188 4.5553C2.92188 5.65987 3.81731 6.5553 4.92188 6.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="m1">
                        <div className="name1">
                            <h4>Name Of Person</h4>
                            <p><em>Designation</em></p>
                            <div className="s-icons1">
                                <i className="fab fa-facebook-f " />
                                <i className="fab fa-twitter " />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                    <path d="M16.9219 8.5553C18.5132 8.5553 20.0393 9.18744 21.1645 10.3127C22.2897 11.4379 22.9219 12.964 22.9219 14.5553V21.5553H18.9219V14.5553C18.9219 14.0249 18.7112 13.5162 18.3361 13.1411C17.961 12.766 17.4523 12.5553 16.9219 12.5553C16.3914 12.5553 15.8827 12.766 15.5077 13.1411C15.1326 13.5162 14.9219 14.0249 14.9219 14.5553V21.5553H10.9219V14.5553C10.9219 12.964 11.554 11.4379 12.6792 10.3127C13.8045 9.18744 15.3306 8.5553 16.9219 8.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.92188 9.5553H2.92188V21.5553H6.92188V9.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.92188 6.5553C6.02644 6.5553 6.92188 5.65987 6.92188 4.5553C6.92188 3.45073 6.02644 2.5553 4.92188 2.5553C3.81731 2.5553 2.92188 3.45073 2.92188 4.5553C2.92188 5.65987 3.81731 6.5553 4.92188 6.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <hr />
                            <div className="para1">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit,</p>
                            </div>
                        </div>
                        <img src={imageMember} alt />
                        <div className="name-expert">
                            <h4>Name Of Person</h4>
                            <p><em>Designation</em></p>
                            <div className="s-icons">
                                <i className="fab fa-facebook-f " />
                                <i className="fab fa-twitter " />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                    <path d="M16.9219 8.5553C18.5132 8.5553 20.0393 9.18744 21.1645 10.3127C22.2897 11.4379 22.9219 12.964 22.9219 14.5553V21.5553H18.9219V14.5553C18.9219 14.0249 18.7112 13.5162 18.3361 13.1411C17.961 12.766 17.4523 12.5553 16.9219 12.5553C16.3914 12.5553 15.8827 12.766 15.5077 13.1411C15.1326 13.5162 14.9219 14.0249 14.9219 14.5553V21.5553H10.9219V14.5553C10.9219 12.964 11.554 11.4379 12.6792 10.3127C13.8045 9.18744 15.3306 8.5553 16.9219 8.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.92188 9.5553H2.92188V21.5553H6.92188V9.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.92188 6.5553C6.02644 6.5553 6.92188 5.65987 6.92188 4.5553C6.92188 3.45073 6.02644 2.5553 4.92188 2.5553C3.81731 2.5553 2.92188 3.45073 2.92188 4.5553C2.92188 5.65987 3.81731 6.5553 4.92188 6.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="m1">
                        <div className="name1">
                            <h4>Name Of Person</h4>
                            <p><em>Designation</em></p>
                            <div className="s-icons1">
                                <i className="fab fa-facebook-f " />
                                <i className="fab fa-twitter " />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                    <path d="M16.9219 8.5553C18.5132 8.5553 20.0393 9.18744 21.1645 10.3127C22.2897 11.4379 22.9219 12.964 22.9219 14.5553V21.5553H18.9219V14.5553C18.9219 14.0249 18.7112 13.5162 18.3361 13.1411C17.961 12.766 17.4523 12.5553 16.9219 12.5553C16.3914 12.5553 15.8827 12.766 15.5077 13.1411C15.1326 13.5162 14.9219 14.0249 14.9219 14.5553V21.5553H10.9219V14.5553C10.9219 12.964 11.554 11.4379 12.6792 10.3127C13.8045 9.18744 15.3306 8.5553 16.9219 8.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.92188 9.5553H2.92188V21.5553H6.92188V9.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.92188 6.5553C6.02644 6.5553 6.92188 5.65987 6.92188 4.5553C6.92188 3.45073 6.02644 2.5553 4.92188 2.5553C3.81731 2.5553 2.92188 3.45073 2.92188 4.5553C2.92188 5.65987 3.81731 6.5553 4.92188 6.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <hr />
                            <div className="para1">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit,</p>
                            </div>
                        </div>
                        <img src={imageMember} alt />
                        <div className="name-expert">
                            <h4>Name Of Person</h4>
                            <p><em>Designation</em></p>
                            <div className="s-icons">
                                <i className="fab fa-facebook-f " />
                                <i className="fab fa-twitter " />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                    <path d="M16.9219 8.5553C18.5132 8.5553 20.0393 9.18744 21.1645 10.3127C22.2897 11.4379 22.9219 12.964 22.9219 14.5553V21.5553H18.9219V14.5553C18.9219 14.0249 18.7112 13.5162 18.3361 13.1411C17.961 12.766 17.4523 12.5553 16.9219 12.5553C16.3914 12.5553 15.8827 12.766 15.5077 13.1411C15.1326 13.5162 14.9219 14.0249 14.9219 14.5553V21.5553H10.9219V14.5553C10.9219 12.964 11.554 11.4379 12.6792 10.3127C13.8045 9.18744 15.3306 8.5553 16.9219 8.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.92188 9.5553H2.92188V21.5553H6.92188V9.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.92188 6.5553C6.02644 6.5553 6.92188 5.65987 6.92188 4.5553C6.92188 3.45073 6.02644 2.5553 4.92188 2.5553C3.81731 2.5553 2.92188 3.45073 2.92188 4.5553C2.92188 5.65987 3.81731 6.5553 4.92188 6.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="member">
                    <div className="m1">
                        <div className="name1">
                            <h4>Name Of Person</h4>
                            <p><em>Designation</em></p>
                            <div className="s-icons1">
                                <i className="fab fa-facebook-f " />
                                <i className="fab fa-twitter " />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                    <path d="M16.9219 8.5553C18.5132 8.5553 20.0393 9.18744 21.1645 10.3127C22.2897 11.4379 22.9219 12.964 22.9219 14.5553V21.5553H18.9219V14.5553C18.9219 14.0249 18.7112 13.5162 18.3361 13.1411C17.961 12.766 17.4523 12.5553 16.9219 12.5553C16.3914 12.5553 15.8827 12.766 15.5077 13.1411C15.1326 13.5162 14.9219 14.0249 14.9219 14.5553V21.5553H10.9219V14.5553C10.9219 12.964 11.554 11.4379 12.6792 10.3127C13.8045 9.18744 15.3306 8.5553 16.9219 8.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.92188 9.5553H2.92188V21.5553H6.92188V9.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.92188 6.5553C6.02644 6.5553 6.92188 5.65987 6.92188 4.5553C6.92188 3.45073 6.02644 2.5553 4.92188 2.5553C3.81731 2.5553 2.92188 3.45073 2.92188 4.5553C2.92188 5.65987 3.81731 6.5553 4.92188 6.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <hr />
                            <div className="para1">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit,</p>
                            </div>
                        </div>
                        <img src={imageMember} alt />
                        <div className="name-expert">
                            <h4>Name Of Person</h4>
                            <p><em>Designation</em></p>
                            <div className="s-icons">
                                <i className="fab fa-facebook-f " />
                                <i className="fab fa-twitter " />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                    <path d="M16.9219 8.5553C18.5132 8.5553 20.0393 9.18744 21.1645 10.3127C22.2897 11.4379 22.9219 12.964 22.9219 14.5553V21.5553H18.9219V14.5553C18.9219 14.0249 18.7112 13.5162 18.3361 13.1411C17.961 12.766 17.4523 12.5553 16.9219 12.5553C16.3914 12.5553 15.8827 12.766 15.5077 13.1411C15.1326 13.5162 14.9219 14.0249 14.9219 14.5553V21.5553H10.9219V14.5553C10.9219 12.964 11.554 11.4379 12.6792 10.3127C13.8045 9.18744 15.3306 8.5553 16.9219 8.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.92188 9.5553H2.92188V21.5553H6.92188V9.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.92188 6.5553C6.02644 6.5553 6.92188 5.65987 6.92188 4.5553C6.92188 3.45073 6.02644 2.5553 4.92188 2.5553C3.81731 2.5553 2.92188 3.45073 2.92188 4.5553C2.92188 5.65987 3.81731 6.5553 4.92188 6.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="m1">
                        <div className="name1">
                            <h4>Name Of Person</h4>
                            <p><em>Designation</em></p>
                            <div className="s-icons1">
                                <i className="fab fa-facebook-f " />
                                <i className="fab fa-twitter " />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                    <path d="M16.9219 8.5553C18.5132 8.5553 20.0393 9.18744 21.1645 10.3127C22.2897 11.4379 22.9219 12.964 22.9219 14.5553V21.5553H18.9219V14.5553C18.9219 14.0249 18.7112 13.5162 18.3361 13.1411C17.961 12.766 17.4523 12.5553 16.9219 12.5553C16.3914 12.5553 15.8827 12.766 15.5077 13.1411C15.1326 13.5162 14.9219 14.0249 14.9219 14.5553V21.5553H10.9219V14.5553C10.9219 12.964 11.554 11.4379 12.6792 10.3127C13.8045 9.18744 15.3306 8.5553 16.9219 8.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.92188 9.5553H2.92188V21.5553H6.92188V9.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.92188 6.5553C6.02644 6.5553 6.92188 5.65987 6.92188 4.5553C6.92188 3.45073 6.02644 2.5553 4.92188 2.5553C3.81731 2.5553 2.92188 3.45073 2.92188 4.5553C2.92188 5.65987 3.81731 6.5553 4.92188 6.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <hr />
                            <div className="para1">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit,</p>
                            </div>
                        </div>
                        <img src={imageMember} alt />
                        <div className="name-expert">
                            <h4>Name Of Person</h4>
                            <p><em>Designation</em></p>
                            <div className="s-icons">
                                <i className="fab fa-facebook-f " />
                                <i className="fab fa-twitter " />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                    <path d="M16.9219 8.5553C18.5132 8.5553 20.0393 9.18744 21.1645 10.3127C22.2897 11.4379 22.9219 12.964 22.9219 14.5553V21.5553H18.9219V14.5553C18.9219 14.0249 18.7112 13.5162 18.3361 13.1411C17.961 12.766 17.4523 12.5553 16.9219 12.5553C16.3914 12.5553 15.8827 12.766 15.5077 13.1411C15.1326 13.5162 14.9219 14.0249 14.9219 14.5553V21.5553H10.9219V14.5553C10.9219 12.964 11.554 11.4379 12.6792 10.3127C13.8045 9.18744 15.3306 8.5553 16.9219 8.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.92188 9.5553H2.92188V21.5553H6.92188V9.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.92188 6.5553C6.02644 6.5553 6.92188 5.65987 6.92188 4.5553C6.92188 3.45073 6.02644 2.5553 4.92188 2.5553C3.81731 2.5553 2.92188 3.45073 2.92188 4.5553C2.92188 5.65987 3.81731 6.5553 4.92188 6.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="m1">
                        <div className="name1">
                            <h4>Name Of Person</h4>
                            <p><em>Designation</em></p>
                            <div className="s-icons1">
                                <i className="fab fa-facebook-f " />
                                <i className="fab fa-twitter " />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                    <path d="M16.9219 8.5553C18.5132 8.5553 20.0393 9.18744 21.1645 10.3127C22.2897 11.4379 22.9219 12.964 22.9219 14.5553V21.5553H18.9219V14.5553C18.9219 14.0249 18.7112 13.5162 18.3361 13.1411C17.961 12.766 17.4523 12.5553 16.9219 12.5553C16.3914 12.5553 15.8827 12.766 15.5077 13.1411C15.1326 13.5162 14.9219 14.0249 14.9219 14.5553V21.5553H10.9219V14.5553C10.9219 12.964 11.554 11.4379 12.6792 10.3127C13.8045 9.18744 15.3306 8.5553 16.9219 8.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.92188 9.5553H2.92188V21.5553H6.92188V9.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.92188 6.5553C6.02644 6.5553 6.92188 5.65987 6.92188 4.5553C6.92188 3.45073 6.02644 2.5553 4.92188 2.5553C3.81731 2.5553 2.92188 3.45073 2.92188 4.5553C2.92188 5.65987 3.81731 6.5553 4.92188 6.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <hr />
                            <div className="para1">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit,</p>
                            </div>
                        </div>
                        <img src={imageMember} alt />
                        <div className="name-expert">
                            <h4>Name Of Person</h4>
                            <p><em>Designation</em></p>
                            <div className="s-icons">
                                <i className="fab fa-facebook-f " />
                                <i className="fab fa-twitter " />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                    <path d="M16.9219 8.5553C18.5132 8.5553 20.0393 9.18744 21.1645 10.3127C22.2897 11.4379 22.9219 12.964 22.9219 14.5553V21.5553H18.9219V14.5553C18.9219 14.0249 18.7112 13.5162 18.3361 13.1411C17.961 12.766 17.4523 12.5553 16.9219 12.5553C16.3914 12.5553 15.8827 12.766 15.5077 13.1411C15.1326 13.5162 14.9219 14.0249 14.9219 14.5553V21.5553H10.9219V14.5553C10.9219 12.964 11.554 11.4379 12.6792 10.3127C13.8045 9.18744 15.3306 8.5553 16.9219 8.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.92188 9.5553H2.92188V21.5553H6.92188V9.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.92188 6.5553C6.02644 6.5553 6.92188 5.65987 6.92188 4.5553C6.92188 3.45073 6.02644 2.5553 4.92188 2.5553C3.81731 2.5553 2.92188 3.45073 2.92188 4.5553C2.92188 5.65987 3.81731 6.5553 4.92188 6.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="m1">
                        <div className="name1">
                            <h4>Name Of Person</h4>
                            <p><em>Designation</em></p>
                            <div className="s-icons1">
                                <i className="fab fa-facebook-f " />
                                <i className="fab fa-twitter " />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                    <path d="M16.9219 8.5553C18.5132 8.5553 20.0393 9.18744 21.1645 10.3127C22.2897 11.4379 22.9219 12.964 22.9219 14.5553V21.5553H18.9219V14.5553C18.9219 14.0249 18.7112 13.5162 18.3361 13.1411C17.961 12.766 17.4523 12.5553 16.9219 12.5553C16.3914 12.5553 15.8827 12.766 15.5077 13.1411C15.1326 13.5162 14.9219 14.0249 14.9219 14.5553V21.5553H10.9219V14.5553C10.9219 12.964 11.554 11.4379 12.6792 10.3127C13.8045 9.18744 15.3306 8.5553 16.9219 8.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.92188 9.5553H2.92188V21.5553H6.92188V9.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.92188 6.5553C6.02644 6.5553 6.92188 5.65987 6.92188 4.5553C6.92188 3.45073 6.02644 2.5553 4.92188 2.5553C3.81731 2.5553 2.92188 3.45073 2.92188 4.5553C2.92188 5.65987 3.81731 6.5553 4.92188 6.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <hr />
                            <div className="para1">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit,</p>
                            </div>
                        </div>
                        <img src={imageMember} alt />
                        <div className="name-expert">
                            <h4>Name Of Person</h4>
                            <p><em>Designation</em></p>
                            <div className="s-icons">
                                <i className="fab fa-facebook-f " />
                                <i className="fab fa-twitter " />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                    <path d="M16.9219 8.5553C18.5132 8.5553 20.0393 9.18744 21.1645 10.3127C22.2897 11.4379 22.9219 12.964 22.9219 14.5553V21.5553H18.9219V14.5553C18.9219 14.0249 18.7112 13.5162 18.3361 13.1411C17.961 12.766 17.4523 12.5553 16.9219 12.5553C16.3914 12.5553 15.8827 12.766 15.5077 13.1411C15.1326 13.5162 14.9219 14.0249 14.9219 14.5553V21.5553H10.9219V14.5553C10.9219 12.964 11.554 11.4379 12.6792 10.3127C13.8045 9.18744 15.3306 8.5553 16.9219 8.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.92188 9.5553H2.92188V21.5553H6.92188V9.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.92188 6.5553C6.02644 6.5553 6.92188 5.65987 6.92188 4.5553C6.92188 3.45073 6.02644 2.5553 4.92188 2.5553C3.81731 2.5553 2.92188 3.45073 2.92188 4.5553C2.92188 5.65987 3.81731 6.5553 4.92188 6.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="member">
                    <div className="m1">
                        <div className="name1">
                            <h4>Name Of Person</h4>
                            <p><em>Designation</em></p>
                            <div className="s-icons1">
                                <i className="fab fa-facebook-f " />
                                <i className="fab fa-twitter " />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                    <path d="M16.9219 8.5553C18.5132 8.5553 20.0393 9.18744 21.1645 10.3127C22.2897 11.4379 22.9219 12.964 22.9219 14.5553V21.5553H18.9219V14.5553C18.9219 14.0249 18.7112 13.5162 18.3361 13.1411C17.961 12.766 17.4523 12.5553 16.9219 12.5553C16.3914 12.5553 15.8827 12.766 15.5077 13.1411C15.1326 13.5162 14.9219 14.0249 14.9219 14.5553V21.5553H10.9219V14.5553C10.9219 12.964 11.554 11.4379 12.6792 10.3127C13.8045 9.18744 15.3306 8.5553 16.9219 8.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.92188 9.5553H2.92188V21.5553H6.92188V9.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.92188 6.5553C6.02644 6.5553 6.92188 5.65987 6.92188 4.5553C6.92188 3.45073 6.02644 2.5553 4.92188 2.5553C3.81731 2.5553 2.92188 3.45073 2.92188 4.5553C2.92188 5.65987 3.81731 6.5553 4.92188 6.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <hr />
                            <div className="para1">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit,</p>
                            </div>
                        </div>
                        <img src={imageMember} alt />
                        <div className="name-expert">
                            <h4>Name Of Person</h4>
                            <p><em>Designation</em></p>
                            <div className="s-icons">
                                <i className="fab fa-facebook-f " />
                                <i className="fab fa-twitter " />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                    <path d="M16.9219 8.5553C18.5132 8.5553 20.0393 9.18744 21.1645 10.3127C22.2897 11.4379 22.9219 12.964 22.9219 14.5553V21.5553H18.9219V14.5553C18.9219 14.0249 18.7112 13.5162 18.3361 13.1411C17.961 12.766 17.4523 12.5553 16.9219 12.5553C16.3914 12.5553 15.8827 12.766 15.5077 13.1411C15.1326 13.5162 14.9219 14.0249 14.9219 14.5553V21.5553H10.9219V14.5553C10.9219 12.964 11.554 11.4379 12.6792 10.3127C13.8045 9.18744 15.3306 8.5553 16.9219 8.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.92188 9.5553H2.92188V21.5553H6.92188V9.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.92188 6.5553C6.02644 6.5553 6.92188 5.65987 6.92188 4.5553C6.92188 3.45073 6.02644 2.5553 4.92188 2.5553C3.81731 2.5553 2.92188 3.45073 2.92188 4.5553C2.92188 5.65987 3.81731 6.5553 4.92188 6.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="m1">
                        <div className="name1">
                            <h4>Name Of Person</h4>
                            <p><em>Designation</em></p>
                            <div className="s-icons1">
                                <i className="fab fa-facebook-f " />
                                <i className="fab fa-twitter " />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                    <path d="M16.9219 8.5553C18.5132 8.5553 20.0393 9.18744 21.1645 10.3127C22.2897 11.4379 22.9219 12.964 22.9219 14.5553V21.5553H18.9219V14.5553C18.9219 14.0249 18.7112 13.5162 18.3361 13.1411C17.961 12.766 17.4523 12.5553 16.9219 12.5553C16.3914 12.5553 15.8827 12.766 15.5077 13.1411C15.1326 13.5162 14.9219 14.0249 14.9219 14.5553V21.5553H10.9219V14.5553C10.9219 12.964 11.554 11.4379 12.6792 10.3127C13.8045 9.18744 15.3306 8.5553 16.9219 8.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.92188 9.5553H2.92188V21.5553H6.92188V9.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.92188 6.5553C6.02644 6.5553 6.92188 5.65987 6.92188 4.5553C6.92188 3.45073 6.02644 2.5553 4.92188 2.5553C3.81731 2.5553 2.92188 3.45073 2.92188 4.5553C2.92188 5.65987 3.81731 6.5553 4.92188 6.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <hr />
                            <div className="para1">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit,</p>
                            </div>
                        </div>
                        <img src={imageMember} alt />
                        <div className="name-expert">
                            <h4>Name Of Person</h4>
                            <p><em>Designation</em></p>
                            <div className="s-icons">
                                <i className="fab fa-facebook-f " />
                                <i className="fab fa-twitter " />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                    <path d="M16.9219 8.5553C18.5132 8.5553 20.0393 9.18744 21.1645 10.3127C22.2897 11.4379 22.9219 12.964 22.9219 14.5553V21.5553H18.9219V14.5553C18.9219 14.0249 18.7112 13.5162 18.3361 13.1411C17.961 12.766 17.4523 12.5553 16.9219 12.5553C16.3914 12.5553 15.8827 12.766 15.5077 13.1411C15.1326 13.5162 14.9219 14.0249 14.9219 14.5553V21.5553H10.9219V14.5553C10.9219 12.964 11.554 11.4379 12.6792 10.3127C13.8045 9.18744 15.3306 8.5553 16.9219 8.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.92188 9.5553H2.92188V21.5553H6.92188V9.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.92188 6.5553C6.02644 6.5553 6.92188 5.65987 6.92188 4.5553C6.92188 3.45073 6.02644 2.5553 4.92188 2.5553C3.81731 2.5553 2.92188 3.45073 2.92188 4.5553C2.92188 5.65987 3.81731 6.5553 4.92188 6.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="m1">
                        <div className="name1">
                            <h4>Name Of Person</h4>
                            <p><em>Designation</em></p>
                            <div className="s-icons1">
                                <i className="fab fa-facebook-f " />
                                <i className="fab fa-twitter " />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                    <path d="M16.9219 8.5553C18.5132 8.5553 20.0393 9.18744 21.1645 10.3127C22.2897 11.4379 22.9219 12.964 22.9219 14.5553V21.5553H18.9219V14.5553C18.9219 14.0249 18.7112 13.5162 18.3361 13.1411C17.961 12.766 17.4523 12.5553 16.9219 12.5553C16.3914 12.5553 15.8827 12.766 15.5077 13.1411C15.1326 13.5162 14.9219 14.0249 14.9219 14.5553V21.5553H10.9219V14.5553C10.9219 12.964 11.554 11.4379 12.6792 10.3127C13.8045 9.18744 15.3306 8.5553 16.9219 8.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.92188 9.5553H2.92188V21.5553H6.92188V9.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.92188 6.5553C6.02644 6.5553 6.92188 5.65987 6.92188 4.5553C6.92188 3.45073 6.02644 2.5553 4.92188 2.5553C3.81731 2.5553 2.92188 3.45073 2.92188 4.5553C2.92188 5.65987 3.81731 6.5553 4.92188 6.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <hr />
                            <div className="para1">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit,</p>
                            </div>
                        </div>
                        <img src={imageMember} alt />
                        <div className="name-expert">
                            <h4>Name Of Person</h4>
                            <p><em>Designation</em></p>
                            <div className="s-icons">
                                <i className="fab fa-facebook-f " />
                                <i className="fab fa-twitter " />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                    <path d="M16.9219 8.5553C18.5132 8.5553 20.0393 9.18744 21.1645 10.3127C22.2897 11.4379 22.9219 12.964 22.9219 14.5553V21.5553H18.9219V14.5553C18.9219 14.0249 18.7112 13.5162 18.3361 13.1411C17.961 12.766 17.4523 12.5553 16.9219 12.5553C16.3914 12.5553 15.8827 12.766 15.5077 13.1411C15.1326 13.5162 14.9219 14.0249 14.9219 14.5553V21.5553H10.9219V14.5553C10.9219 12.964 11.554 11.4379 12.6792 10.3127C13.8045 9.18744 15.3306 8.5553 16.9219 8.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.92188 9.5553H2.92188V21.5553H6.92188V9.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.92188 6.5553C6.02644 6.5553 6.92188 5.65987 6.92188 4.5553C6.92188 3.45073 6.02644 2.5553 4.92188 2.5553C3.81731 2.5553 2.92188 3.45073 2.92188 4.5553C2.92188 5.65987 3.81731 6.5553 4.92188 6.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="m1">
                        <div className="name1">
                            <h4>Name Of Person</h4>
                            <p><em>Designation</em></p>
                            <div className="s-icons1">
                                <i className="fab fa-facebook-f " />
                                <i className="fab fa-twitter " />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                    <path d="M16.9219 8.5553C18.5132 8.5553 20.0393 9.18744 21.1645 10.3127C22.2897 11.4379 22.9219 12.964 22.9219 14.5553V21.5553H18.9219V14.5553C18.9219 14.0249 18.7112 13.5162 18.3361 13.1411C17.961 12.766 17.4523 12.5553 16.9219 12.5553C16.3914 12.5553 15.8827 12.766 15.5077 13.1411C15.1326 13.5162 14.9219 14.0249 14.9219 14.5553V21.5553H10.9219V14.5553C10.9219 12.964 11.554 11.4379 12.6792 10.3127C13.8045 9.18744 15.3306 8.5553 16.9219 8.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.92188 9.5553H2.92188V21.5553H6.92188V9.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.92188 6.5553C6.02644 6.5553 6.92188 5.65987 6.92188 4.5553C6.92188 3.45073 6.02644 2.5553 4.92188 2.5553C3.81731 2.5553 2.92188 3.45073 2.92188 4.5553C2.92188 5.65987 3.81731 6.5553 4.92188 6.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <hr />
                            <div className="para1">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit,</p>
                            </div>
                        </div>
                        <img src={imageMember} alt />
                        <div className="name-expert">
                            <h4>Name Of Person</h4>
                            <p><em>Designation</em></p>
                            <div className="s-icons">
                                <i className="fab fa-facebook-f " />
                                <i className="fab fa-twitter " />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                    <path d="M16.9219 8.5553C18.5132 8.5553 20.0393 9.18744 21.1645 10.3127C22.2897 11.4379 22.9219 12.964 22.9219 14.5553V21.5553H18.9219V14.5553C18.9219 14.0249 18.7112 13.5162 18.3361 13.1411C17.961 12.766 17.4523 12.5553 16.9219 12.5553C16.3914 12.5553 15.8827 12.766 15.5077 13.1411C15.1326 13.5162 14.9219 14.0249 14.9219 14.5553V21.5553H10.9219V14.5553C10.9219 12.964 11.554 11.4379 12.6792 10.3127C13.8045 9.18744 15.3306 8.5553 16.9219 8.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.92188 9.5553H2.92188V21.5553H6.92188V9.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.92188 6.5553C6.02644 6.5553 6.92188 5.65987 6.92188 4.5553C6.92188 3.45073 6.02644 2.5553 4.92188 2.5553C3.81731 2.5553 2.92188 3.45073 2.92188 4.5553C2.92188 5.65987 3.81731 6.5553 4.92188 6.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="member">
                    <div className="m1">
                        <div className="name1">
                            <h4>Name Of Person</h4>
                            <p><em>Designation</em></p>
                            <div className="s-icons1">
                                <i className="fab fa-facebook-f " />
                                <i className="fab fa-twitter " />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                    <path d="M16.9219 8.5553C18.5132 8.5553 20.0393 9.18744 21.1645 10.3127C22.2897 11.4379 22.9219 12.964 22.9219 14.5553V21.5553H18.9219V14.5553C18.9219 14.0249 18.7112 13.5162 18.3361 13.1411C17.961 12.766 17.4523 12.5553 16.9219 12.5553C16.3914 12.5553 15.8827 12.766 15.5077 13.1411C15.1326 13.5162 14.9219 14.0249 14.9219 14.5553V21.5553H10.9219V14.5553C10.9219 12.964 11.554 11.4379 12.6792 10.3127C13.8045 9.18744 15.3306 8.5553 16.9219 8.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.92188 9.5553H2.92188V21.5553H6.92188V9.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.92188 6.5553C6.02644 6.5553 6.92188 5.65987 6.92188 4.5553C6.92188 3.45073 6.02644 2.5553 4.92188 2.5553C3.81731 2.5553 2.92188 3.45073 2.92188 4.5553C2.92188 5.65987 3.81731 6.5553 4.92188 6.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <hr />
                            <div className="para1">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit,</p>
                            </div>
                        </div>
                        <img src={imageMember} alt />
                        <div className="name-expert">
                            <h4>Name Of Person</h4>
                            <p><em>Designation</em></p>
                            <div className="s-icons">
                                <i className="fab fa-facebook-f " />
                                <i className="fab fa-twitter " />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                    <path d="M16.9219 8.5553C18.5132 8.5553 20.0393 9.18744 21.1645 10.3127C22.2897 11.4379 22.9219 12.964 22.9219 14.5553V21.5553H18.9219V14.5553C18.9219 14.0249 18.7112 13.5162 18.3361 13.1411C17.961 12.766 17.4523 12.5553 16.9219 12.5553C16.3914 12.5553 15.8827 12.766 15.5077 13.1411C15.1326 13.5162 14.9219 14.0249 14.9219 14.5553V21.5553H10.9219V14.5553C10.9219 12.964 11.554 11.4379 12.6792 10.3127C13.8045 9.18744 15.3306 8.5553 16.9219 8.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.92188 9.5553H2.92188V21.5553H6.92188V9.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.92188 6.5553C6.02644 6.5553 6.92188 5.65987 6.92188 4.5553C6.92188 3.45073 6.02644 2.5553 4.92188 2.5553C3.81731 2.5553 2.92188 3.45073 2.92188 4.5553C2.92188 5.65987 3.81731 6.5553 4.92188 6.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="m1">
                        <div className="name1">
                            <h4>Name Of Person</h4>
                            <p><em>Designation</em></p>
                            <div className="s-icons1">
                                <i className="fab fa-facebook-f " />
                                <i className="fab fa-twitter " />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                    <path d="M16.9219 8.5553C18.5132 8.5553 20.0393 9.18744 21.1645 10.3127C22.2897 11.4379 22.9219 12.964 22.9219 14.5553V21.5553H18.9219V14.5553C18.9219 14.0249 18.7112 13.5162 18.3361 13.1411C17.961 12.766 17.4523 12.5553 16.9219 12.5553C16.3914 12.5553 15.8827 12.766 15.5077 13.1411C15.1326 13.5162 14.9219 14.0249 14.9219 14.5553V21.5553H10.9219V14.5553C10.9219 12.964 11.554 11.4379 12.6792 10.3127C13.8045 9.18744 15.3306 8.5553 16.9219 8.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.92188 9.5553H2.92188V21.5553H6.92188V9.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.92188 6.5553C6.02644 6.5553 6.92188 5.65987 6.92188 4.5553C6.92188 3.45073 6.02644 2.5553 4.92188 2.5553C3.81731 2.5553 2.92188 3.45073 2.92188 4.5553C2.92188 5.65987 3.81731 6.5553 4.92188 6.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <hr />
                            <div className="para1">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit,</p>
                            </div>
                        </div>
                        <img src={imageMember} alt />
                        <div className="name-expert">
                            <h4>Name Of Person</h4>
                            <p><em>Designation</em></p>
                            <div className="s-icons">
                                <i className="fab fa-facebook-f " />
                                <i className="fab fa-twitter " />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                    <path d="M16.9219 8.5553C18.5132 8.5553 20.0393 9.18744 21.1645 10.3127C22.2897 11.4379 22.9219 12.964 22.9219 14.5553V21.5553H18.9219V14.5553C18.9219 14.0249 18.7112 13.5162 18.3361 13.1411C17.961 12.766 17.4523 12.5553 16.9219 12.5553C16.3914 12.5553 15.8827 12.766 15.5077 13.1411C15.1326 13.5162 14.9219 14.0249 14.9219 14.5553V21.5553H10.9219V14.5553C10.9219 12.964 11.554 11.4379 12.6792 10.3127C13.8045 9.18744 15.3306 8.5553 16.9219 8.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.92188 9.5553H2.92188V21.5553H6.92188V9.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.92188 6.5553C6.02644 6.5553 6.92188 5.65987 6.92188 4.5553C6.92188 3.45073 6.02644 2.5553 4.92188 2.5553C3.81731 2.5553 2.92188 3.45073 2.92188 4.5553C2.92188 5.65987 3.81731 6.5553 4.92188 6.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="m1">
                        <div className="name1">
                            <h4>Name Of Person</h4>
                            <p><em>Designation</em></p>
                            <div className="s-icons1">
                                <i className="fab fa-facebook-f " />
                                <i className="fab fa-twitter " />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                    <path d="M16.9219 8.5553C18.5132 8.5553 20.0393 9.18744 21.1645 10.3127C22.2897 11.4379 22.9219 12.964 22.9219 14.5553V21.5553H18.9219V14.5553C18.9219 14.0249 18.7112 13.5162 18.3361 13.1411C17.961 12.766 17.4523 12.5553 16.9219 12.5553C16.3914 12.5553 15.8827 12.766 15.5077 13.1411C15.1326 13.5162 14.9219 14.0249 14.9219 14.5553V21.5553H10.9219V14.5553C10.9219 12.964 11.554 11.4379 12.6792 10.3127C13.8045 9.18744 15.3306 8.5553 16.9219 8.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.92188 9.5553H2.92188V21.5553H6.92188V9.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.92188 6.5553C6.02644 6.5553 6.92188 5.65987 6.92188 4.5553C6.92188 3.45073 6.02644 2.5553 4.92188 2.5553C3.81731 2.5553 2.92188 3.45073 2.92188 4.5553C2.92188 5.65987 3.81731 6.5553 4.92188 6.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <hr />
                            <div className="para1">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit,</p>
                            </div>
                        </div>
                        <img src={imageMember} alt />
                        <div className="name-expert">
                            <h4>Name Of Person</h4>
                            <p><em>Designation</em></p>
                            <div className="s-icons">
                                <i className="fab fa-facebook-f " />
                                <i className="fab fa-twitter " />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                    <path d="M16.9219 8.5553C18.5132 8.5553 20.0393 9.18744 21.1645 10.3127C22.2897 11.4379 22.9219 12.964 22.9219 14.5553V21.5553H18.9219V14.5553C18.9219 14.0249 18.7112 13.5162 18.3361 13.1411C17.961 12.766 17.4523 12.5553 16.9219 12.5553C16.3914 12.5553 15.8827 12.766 15.5077 13.1411C15.1326 13.5162 14.9219 14.0249 14.9219 14.5553V21.5553H10.9219V14.5553C10.9219 12.964 11.554 11.4379 12.6792 10.3127C13.8045 9.18744 15.3306 8.5553 16.9219 8.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.92188 9.5553H2.92188V21.5553H6.92188V9.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.92188 6.5553C6.02644 6.5553 6.92188 5.65987 6.92188 4.5553C6.92188 3.45073 6.02644 2.5553 4.92188 2.5553C3.81731 2.5553 2.92188 3.45073 2.92188 4.5553C2.92188 5.65987 3.81731 6.5553 4.92188 6.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="m1">
                        <div className="name1">
                            <h4>Name Of Person</h4>
                            <p><em>Designation</em></p>
                            <div className="s-icons1">
                                <i className="fab fa-facebook-f " />
                                <i className="fab fa-twitter " />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                    <path d="M16.9219 8.5553C18.5132 8.5553 20.0393 9.18744 21.1645 10.3127C22.2897 11.4379 22.9219 12.964 22.9219 14.5553V21.5553H18.9219V14.5553C18.9219 14.0249 18.7112 13.5162 18.3361 13.1411C17.961 12.766 17.4523 12.5553 16.9219 12.5553C16.3914 12.5553 15.8827 12.766 15.5077 13.1411C15.1326 13.5162 14.9219 14.0249 14.9219 14.5553V21.5553H10.9219V14.5553C10.9219 12.964 11.554 11.4379 12.6792 10.3127C13.8045 9.18744 15.3306 8.5553 16.9219 8.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.92188 9.5553H2.92188V21.5553H6.92188V9.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.92188 6.5553C6.02644 6.5553 6.92188 5.65987 6.92188 4.5553C6.92188 3.45073 6.02644 2.5553 4.92188 2.5553C3.81731 2.5553 2.92188 3.45073 2.92188 4.5553C2.92188 5.65987 3.81731 6.5553 4.92188 6.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <hr />
                            <div className="para1">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit,</p>
                            </div>
                        </div>
                        <img src={imageMember} alt />
                        <div className="name-expert">
                            <h4>Name Of Person</h4>
                            <p><em>Designation</em></p>
                            <div className="s-icons">
                                <i className="fab fa-facebook-f " />
                                <i className="fab fa-twitter " />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                    <path d="M16.9219 8.5553C18.5132 8.5553 20.0393 9.18744 21.1645 10.3127C22.2897 11.4379 22.9219 12.964 22.9219 14.5553V21.5553H18.9219V14.5553C18.9219 14.0249 18.7112 13.5162 18.3361 13.1411C17.961 12.766 17.4523 12.5553 16.9219 12.5553C16.3914 12.5553 15.8827 12.766 15.5077 13.1411C15.1326 13.5162 14.9219 14.0249 14.9219 14.5553V21.5553H10.9219V14.5553C10.9219 12.964 11.554 11.4379 12.6792 10.3127C13.8045 9.18744 15.3306 8.5553 16.9219 8.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.92188 9.5553H2.92188V21.5553H6.92188V9.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.92188 6.5553C6.02644 6.5553 6.92188 5.65987 6.92188 4.5553C6.92188 3.45073 6.02644 2.5553 4.92188 2.5553C3.81731 2.5553 2.92188 3.45073 2.92188 4.5553C2.92188 5.65987 3.81731 6.5553 4.92188 6.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* =======================================================  Expert Team End ======================================================= */}
        </div>

    );
}
export default Expert;