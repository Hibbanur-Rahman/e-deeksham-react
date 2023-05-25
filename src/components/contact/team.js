import './team.css';
import photo1 from "./images/dummy_profile.png";
function Team() {
    return (
        <>
            {/* <body> */}
                <div class="container">
                    {/* <!-- <div class="heading-section"> -->

                        <!-- ======================================================= Header Start ====================================================== -->
                        <!-- <div class="header">
                            <div class="left-div">
                                <div class="logo-photo">
                                    <img src="./images/edeeksham_logo_new-removebg-preview.png" alt="edeekshaam-logo" width="150px"
                                        height="80px">
                                </div>
                                <div class="head-title">
                                    <p>Adaptive Assistive System for children With Intellectual Disability</p>
                                </div>
                            </div>
                            <div class="right-div">
                                <div class="logo-photo">
                                    <img src="./images/manuu-logo.png" alt="manuu-logo" width="70px" height="80px" />
                                </div>
                                <div>
                                    <img src="./images/Meity.jpg" alt="ministry-logo" width="200px" height="80px">
                                </div>
                            </div>
                        </div> -->

                        <!-- ======================================================= Header End ====================================================== -->

                        <!-- ======================================================= Navbar Start ====================================================== -->
                        <!-- <div class="navbar">
                            <div class="navlist">
                                <div class="list-item">
                                    <a href="../index.html">
                                        <div class="item">Home</div>
                                    </a>
                                    <div class="dropdown">
                                        <button class="dropdown-btn">About</button>
                                        <div class="dropdown-options">
                                            <a href="../about-E-Deeksham-main/index.html">E-Deeksham</a>
                                            <a href="../about-manuu/index.html">MANUU</a>
                                            <a href="./index.html">Our Team</a>
                                            <a href="../aboutExpert/index.html">Experts</a>
                                        </div>
                                    </div>
                                    <a href="../workshop-main/index.html">
                                        <div class="item">Workshops</div>
                                    </a>
                                    <a href="../Training/index.html">
                                        <div class="item">Training</div>
                                    </a>
                                    <a href="../contact/index.html">
                                        <div class="item">Contact us</div>
                                    </a>
                                    <a href="../insight/index.html">
                                        <div class="item">Insights</div>
                                    </a>
                                    <a>
                                        <div class="item">FAQs</div>
                                    </a>
                                </div>
                            </div>
                            <div class="nav-btn">
                                <button style="width:100px; height:40px">Login</button>
                                <button style="width:120px; height:40px">Register</button>
                            </div>
                        </div> --> */}


                    {/* <!-- ======================================================= Navbar End ====================================================== --> */}
                    {/* <!-- </div> --> */}
                    {/* <!-- ======================================================= OurTeam start ====================================================== --> */}

                    {/* <!-- <section class="ourteam">
                        <img src="./images/image2.jpg" alt="image" srcset="">
                    </section> --> */}
                    {/* <!-- ======================================================= OurTeam start ====================================================== --> */}


                    {/* <!-- ======================================================= Our Leader start ====================================================== --> */}

                    <div>
                        <section className="OurLeaders">
                            <h1>Our Leaders</h1>
                        </section>
                        <section className="leaders1">
                            <div className="L1">
                                <div className="l1-image">
                                    {/* <img src="./images/wahid sir-photo1.jpg" alt="dean sir"> */}
                                    <img src={photo1} alt="photo" />

                                </div>
                            </div>
                            <div className="paragraph">
                                <h3>Prof. Abdul Wahid</h3>
                                <h5><em>Chief Investigator</em></h5>
                                <p>Prof. Abdul Wahid, Dean School of Technology, is the project's Chief Investigator. He is is currently
                                    working as a Professor in the Department of Computer Science and Information Technology, School of
                                    Technology, Maulana Azad National Urdu University (Central University), Hyderabad, Telangana, India.
                                    He has obtained his PhD in Educational Technology to develop a teaching and assessment tool for
                                    programming from the Department of Computer Science in Jamia Milia Islamia, New Delhi. He has a
                                    total of 22 years of teaching experience. His research areas include e-Governance, educational
                                    technology, ICT for differently-abled persons, psychology, cognitive science, educational
                                    neuroscience, emotion recognition &amp; similar problems. He has published his research in 30 reputed
                                    journals, 15 international conferences and several book chapters. He has an active membership in
                                    Institute of Electrical and Electronics Engineers(IEEE), Computer Science Teachers Association
                                    (CSTA).</p>
                                <hr />
                                <div className="icon">
                                    <i className="fab fa-facebook-f " />
                                    <i className="fab fa-twitter " />
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                        <path d="M16.9219 8.5553C18.5132 8.5553 20.0393 9.18744 21.1645 10.3127C22.2897 11.4379 22.9219 12.964 22.9219 14.5553V21.5553H18.9219V14.5553C18.9219 14.0249 18.7112 13.5162 18.3361 13.1411C17.961 12.766 17.4523 12.5553 16.9219 12.5553C16.3914 12.5553 15.8827 12.766 15.5077 13.1411C15.1326 13.5162 14.9219 14.0249 14.9219 14.5553V21.5553H10.9219V14.5553C10.9219 12.964 11.554 11.4379 12.6792 10.3127C13.8045 9.18744 15.3306 8.5553 16.9219 8.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6.92188 9.5553H2.92188V21.5553H6.92188V9.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4.92188 6.5553C6.02644 6.5553 6.92188 5.65987 6.92188 4.5553C6.92188 3.45073 6.02644 2.5553 4.92188 2.5553C3.81731 2.5553 2.92188 3.45073 2.92188 4.5553C2.92188 5.65987 3.81731 6.5553 4.92188 6.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </section>
                        <section className="leaders2">
                            <div className="paragraph1">
                                <h3>Prof. Pradeep Kumar</h3>
                                <h5><em>Co-Investigator</em></h5>
                                <p>Prof. Pradeep Kumar is the co-investigator of the Project, and is currently working as a Professor in
                                    the Department of Computer Science and Information Technology, School of Technology, Maulana Azad
                                    National Urdu University (Central University), Hyderabad, Telangana, India. He has more than 25
                                    years of Teaching and Research experience. He has obtained his Doctoral Degree from School of
                                    Information &amp; Communication Technology, Guru Gobind Singh Indraprastha University (GGSIPU), New
                                    Delhi. His research areas are Software Engineering, Data Science, Data Mining, Soft Computing,
                                    Machine Learning. He has published 25 reputed international journals, 11 International Conference
                                    proceedings, 4 Book Chapters and 3 Book in his credit. He has active membership in Association for
                                    Computing Machines (ACM) India, Computer Science Teachers Association (CSTA) USA, International
                                    Association of Engineers (IAENG), International Association Computer Science &amp; Information
                                    Technology Singapore, and Universal Association of Computer and Electronics Engineers.</p>
                                <hr />
                                <div className="icon">
                                    <i className="fab fa-facebook-f " />
                                    <i className="fab fa-twitter " />
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                                        <path d="M16.9219 8.5553C18.5132 8.5553 20.0393 9.18744 21.1645 10.3127C22.2897 11.4379 22.9219 12.964 22.9219 14.5553V21.5553H18.9219V14.5553C18.9219 14.0249 18.7112 13.5162 18.3361 13.1411C17.961 12.766 17.4523 12.5553 16.9219 12.5553C16.3914 12.5553 15.8827 12.766 15.5077 13.1411C15.1326 13.5162 14.9219 14.0249 14.9219 14.5553V21.5553H10.9219V14.5553C10.9219 12.964 11.554 11.4379 12.6792 10.3127C13.8045 9.18744 15.3306 8.5553 16.9219 8.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6.92188 9.5553H2.92188V21.5553H6.92188V9.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4.92188 6.5553C6.02644 6.5553 6.92188 5.65987 6.92188 4.5553C6.92188 3.45073 6.02644 2.5553 4.92188 2.5553C3.81731 2.5553 2.92188 3.45073 2.92188 4.5553C2.92188 5.65987 3.81731 6.5553 4.92188 6.5553Z" stroke="#0A2463" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <div className="L2">
                                <div className="l2-image">
                                    {/* <img src="./images/pardeep sir-photo.jpg" alt="pardeep sir"> */}
                                    <img src={photo1} alt="photo" />

                                </div>
                            </div>
                        </section>
                    </div>

                    {/* <!-- ======================================================= Our Leader start ====================================================== --> */}


                    {/* <!-- ======================================================= Team Member Start ====================================================== --> */}

                    <section className="all-members">
                        <h1>Our Team</h1>
                        <div className="setting">
                            {/* member 1 */}
                            <div className="m">
                                <div className="m-image">
                                    <div className="s-icons">
                                        <i className="fab fa-facebook-f " />
                                        <i className="fab fa-twitter " />
                                        <i className="fab fa-youtube" />
                                    </div>
                                    {/* <img src="./images/fareeha ma'am.jpg" alt="Fareeha Rasheed ma'am" srcset=""> */}
                                    <img src={photo1} alt="photo" />

                                </div>
                                <div className="name">
                                    <h3>Dr. Fareeha Rasheed</h3>
                                    <p><em>Assistant Professor</em></p>
                                </div>
                            </div>
                            {/* member 2 */}
                            <div className="m">
                                <div className="m-image">
                                    <div className="s-icons">
                                        <i className="fab fa-facebook-f " />
                                        <i className="fab fa-twitter " />
                                        <i className="fab fa-youtube" />
                                    </div>
                                    {/* <img src="./images/islam-sir1.jpg" alt="islam sir" srcset=""> */}
                                    <img src={photo1} alt="photo" />

                                </div>
                                <div className="name">
                                    <h3>Mr. Mohammad Islam</h3>
                                    <p><em>Assistant Professor</em></p>
                                </div>
                            </div>
                             {/* member 3 */} 
                            <div className="m">
                                <div className="m-image">
                                    <div className="s-icons">
                                        <i className="fab fa-facebook-f " />
                                        <i className="fab fa-twitter " />
                                        <i className="fab fa-youtube" />
                                    </div>
                                     {/* <img src="./images/pasha quadri.jpg" alt="pasha sir" srcset=""> */} 
                                    <img src={photo1} alt="photo" />

                                </div>
                                <div className="name">
                                    <h3>Mr. Mohatesham Pasha Quadri</h3>
                                    <p><em>Assistant Professor</em></p>
                                </div>
                            </div>
                             {/* second line */} 
                             {/* member 4 */} 
                            <div className="m">
                                <div className="m-image">
                                    <div className="s-icons">
                                        <i className="fab fa-facebook-f " />
                                        <i className="fab fa-twitter " />
                                        <i className="fab fa-youtube" />
                                    </div>
                                    {/* <img src="./images/alam jamal-photo.jpg" alt="Alam jamal"> */}
                                    <img src={photo1} alt="photo" />

                                </div>
                                <div className="name">
                                    <h3>Mr. Alam Jamal</h3>
                                    <p><em>Assistant Professor</em></p>
                                </div>
                            </div>
                             {/* member 5 */}
                            {/* <div class="m">
                                    <div class="m-image">
                                        <div class="s-icons">
                                            <i class="fab fa-facebook-f "></i>
                                            <i class="fab fa-twitter "></i>
                                            <i class="fab fa-youtube"></i>
                                        </div>
                                        <img src="./images/altamash sir1.png" alt="altamash sir">
                                        <img src="./images/dummy_profile.png" alt="dummy photo">
                                    </div>
                                    <div class="name">
                                        <h3>Mr. Altamash Khan</h3>
                                        <p><em>Web Developer</em></p>

                                    </div>
                                </div> */} 
                             {/* member 6 */}
                             {/* <div class="m">
                                    <div class="m-image">
                                        <div class="s-icons">
                                            <i class="fab fa-facebook-f "></i>
                                            <i class="fab fa-twitter "></i>
                                            <i class="fab fa-youtube"></i>
                                        </div>
                                        <img src="./images/sailakumari lella1.jpg" alt="sailakumari lella">
                                        <img src="./images/dummy_profile.png" alt="dummy photo">
                                    </div>
                                    <div class="name">
                                        <h3>Mrs. Sailakumari Lella</h3>
                                        <p><em>Research Associate</em></p>

                                    </div>
                                </div> */}
                        </div>
                    </section>

                    {/* <!-- ======================================================= Team Member End ====================================================== --> */}



                    {/* <!-- ======================================================= Supporting Team Start ====================================================== --> */}

                    <section className="supportingTeam">
                        <h1>Supporting Team</h1>
                        <div className="mannage">
                            <div className="s">
                                <div className="s-image">
                                    <div className="s-icons">
                                        <i className="fab fa-facebook-f " />
                                        <i className="fab fa-twitter " />
                                        <i className="fab fa-youtube" />
                                    </div>
                                    <img src={photo1} alt="photo" />

                                    {/* <img src="./images/asifiya.png" alt="asfiya"> */}
                                </div>
                                <div className="name">
                                    <h3>Asfiya siddiqui </h3>
                                    <p><em>Student of 4th year</em></p>
                                </div>
                            </div>
                            <div className="s">
                                <div className="s-image">
                                    <div className="s-icons">
                                        <i className="fab fa-facebook-f " />
                                        <i className="fab fa-twitter " />
                                        <i className="fab fa-youtube" />
                                    </div>
                                    <img src={photo1} alt="photo" />

                                    {/* <img src="./images/Yazdan-photo.jpg" alt="yazdan"> */}
                                </div>
                                <div className="name">
                                    <h3>Md Yazdan Rizwan </h3>
                                    <p><em>Student of 4th year</em></p>
                                </div>
                            </div>
                            <div className="s">
                                <div className="s-image">
                                    <div className="s-icons">
                                        <i className="fab fa-facebook-f " />
                                        <i className="fab fa-twitter " />
                                        <i className="fab fa-youtube" />
                                    </div>
                                    <img src={photo1} alt="photo" />

                                    {/* <img src="./images/nahid-chaudhary.jpg" alt="Nahid Chaudhary"> */}
                                </div>
                                <div className="name">
                                    <h3>Nahid Chaudhary</h3>
                                    <p><em>Student of 4th year</em></p>
                                </div>
                            </div>
                            <div className="s">
                                <div className="s-image">
                                    <div className="s-icons">
                                        <i className="fab fa-facebook-f " />
                                        <i className="fab fa-twitter " />
                                        <i className="fab fa-youtube" />
                                    </div>
                                    <img src={photo1} alt="photo" />

                                    {/* <img src="./images/muzzakir.jpg" alt="Syed Muzakkir Reza" srcset=""> */}
                                </div>
                                <div className="name">
                                    <h3>Syed Muzakkir Reza</h3>
                                    <p><em>Student of 4th year</em></p>
                                </div>
                            </div>
                            <div className="s">
                                <div className="s-image">
                                    <div className="s-icons">
                                        <i className="fab fa-facebook-f " />
                                        <i className="fab fa-twitter " />
                                        <i className="fab fa-youtube" />
                                    </div>
                                    <img src={photo1} alt="photo" />

                                    {/* <img src="./images/akif-jawaid.jpeg" alt="Akif Jawaid"> */}
                                </div>
                                <div className="name">
                                    <h3>Akif Jawaid</h3>
                                    <p><em>Student of 3rd year</em></p>
                                </div>
                            </div>
                            <div className="s">
                                <div className="s-image">
                                    <div className="s-icons">
                                        <i className="fab fa-facebook-f " />
                                        <i className="fab fa-twitter " />
                                        <i className="fab fa-youtube" />
                                    </div>
                                    <img src={photo1} alt="photo" />

                                    {/* <img src="./images/ashad photo.jpg" alt="Ashad Jamal"> */}
                                </div>
                                <div className="name">
                                    <h3>Ashad Jamal</h3>
                                    <p><em>Student of 2nd year</em></p>
                                </div>
                            </div>
                            <div className="s">
                                <div className="s-image">
                                    <div className="s-icons">
                                        <i className="fab fa-facebook-f " />
                                        <i className="fab fa-twitter " />
                                        <i className="fab fa-youtube" />
                                    </div>
                                    {/* <img src="https://raw.githubusercontent.com/Hibbanur-Rahman/images-for-whatsapp/main/WhatsApp%20Image%202023-02-02%20at%2015.40.28.jpg"
                      alt="Hibbanur-Rahman"> */}
                                    <img src={photo1} alt="photo" />

                                </div>
                                <div className="name">
                                    <h3>Hibbanur Rahman</h3>
                                    <p><em>Student of 2nd year</em></p>
                                </div>
                            </div>
                            <div className="s">
                                <div className="s-image">
                                    <div className="s-icons">
                                        <i className="fab fa-facebook-f " />
                                        <i className="fab fa-twitter " />
                                        <i className="fab fa-youtube" />
                                    </div>
                                    {/* <img src="./images/zahid-photo1.jpg" alt="Zahid"> */}
                                    <img src={photo1} alt="photo" />

                                </div>
                                <div className="name">
                                    <h3>Zahid Rizwan</h3>
                                    <p><em>Student of 2nd year</em></p>
                                </div>
                            </div>
                            <div className="s">
                                <div className="s-image">
                                    <div className="s-icons">
                                        <i className="fab fa-facebook-f " />
                                        <i className="fab fa-twitter " />
                                        <i className="fab fa-youtube" />
                                    </div>
                                    {/* <img src="./images/aatif-nayeem-photo.jpg" alt=" AATIF NAYEEM" srcset=""> */}
                                    <img src={photo1} alt="photo" />

                                </div>
                                <div className="name1">
                                    <h3> Aatif Nayeem</h3>
                                    <p><em>Student of 1st year</em></p>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* <!-- ======================================================= Supporting Team End ====================================================== --> */}
                    {/* 
                    {/* <!-- ======================================================= Footer Start ====================================================== --> */}
                    {/* <!-- ======================================================= Footer section start ======================================================= --> */}
                    {/* 
                        <!-- <div class="footer">
                            <div class="footer-upper">

                                <div class="footer-first">
                                    <div class="footer-image">
                                        <img src="./images/edeeksham_logo_white-removebg-preview.png" alt="e-deeksham logo">
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque hic, id ea repellendus, placeat,
                                        repudiandae.</p>
                                </div>
                                <div class="footer-second">
                                    <h3>Quick Links</h3>
                                    <ul>
                                        <li>Home</li>
                                        <li>About Us</li>
                                        <li>Contact Us</li>
                                        <li>Workshop</li>
                                        <li>Training</li>
                                        <li>Insight</li>
                                        <li>FAQs</li>
                                    </ul>
                                </div>
                                <div class="footer-third">
                                    <h3>Contact Us</h3>
                                    <div>
                                        <i class="bi bi-geo-alt"></i>
                                        <p>101, street-4,pocket-9, sector -12, gachiowli, Telengana,
                                            India-xxxxxx</p>
                                    </div>
                                    <div>
                                        <i class="bi bi-envelope"></i>
                                        <p>email123@gmail.com</p>
                                    </div>
                                    <div>
                                        <i class="bi bi-telephone"></i>
                                        <p>+91-9973152523</p>
                                    </div>
                                    <h3>Follow Us</h3>
                                    <i class="fab fa-facebook-f face"></i>
                                    <i class="fab fa-twitter tweet"></i>
                                    <i class="fab fa-youtube  yt"></i>
                                </div>
                            </div>
                            <div class="footer-lower">
                                <div>
                                    <p>© EDikshaam 2023 . All rights reserved</p>
                                </div>
                                <div style="text-align: end;">
                                    <p>Terms of Use | Disclaimer | Privacy Policy</p>
                                </div>

                            </div>
                              <!-- ======================================================= Footer section End ======================================================= --> */
                            /* <!-- ======================================================= Footer End ====================================================== -->  */}
                </div>
            {/* </body> */}
        </>
    );
}
export default Team;