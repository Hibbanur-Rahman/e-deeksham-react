import './style.css';
import dummyPhoto from "./images/dummy_profile.png";
import headPhoto from "./images/image2.jpg";
function Team() {
    return (
        <div>
            {/* ======================================================= OurTeam start ====================================================== */}
            <section className="ourteam">
                <img src={headPhoto} alt="image" srcSet />
            </section>
            {/* ======================================================= OurTeam start ====================================================== */}
            {/* ======================================================= Our Leader start ====================================================== */}
            <section className="OurLeaders">
                <h1>Our Leaders</h1>
            </section>
            <section className="leaders1">
                <div className="L1">
                    <div className="l1-image">
                        {/* <img src="./images/wahid sir-photo1.jpg" alt="dean sir"> */}
                        <img src={dummyPhoto} alt="dummy photo" />
                    </div>
                </div>
                <div className="paragraph-team">
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
                        <img src={dummyPhoto} alt="dummy photo" />
                    </div>
                </div>
            </section>
            {/* ======================================================= Our Leader start ====================================================== */}
            {/* ======================================================= Team Member Start ====================================================== */}
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
                            <img src={dummyPhoto} alt="dummy photo" />
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
                            <img src={dummyPhoto} alt="dummy photo" />
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
                            <img src={dummyPhoto} alt="dummy photo" />
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
                            <img src={dummyPhoto} alt="dummy photo" />
                        </div>
                        <div className="name">
                            <h3>Mr. Alam Jamal</h3>
                            <p><em>Assistant Professor</em></p>
                        </div>
                    </div>
                </div>
            </section>
            {/* ======================================================= Team Member End ====================================================== */}
            {/* ======================================================= Supporting Team Start ====================================================== */}
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
                            <img src={dummyPhoto} alt="dummy photo" />
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
                            <img src={dummyPhoto} alt="dummy photo" />
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
                            <img src={dummyPhoto} alt="dummy photo" />
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
                            <img src={dummyPhoto} alt="dummy photo" />
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
                            <img src={dummyPhoto} alt="dummy photo" />
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
                            <img src={dummyPhoto} alt="dummy photo" />
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
                            <img src={dummyPhoto} alt="dummy photo" />
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
                            <img src={dummyPhoto} alt="dummy photo" />
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
                            <img src={dummyPhoto} alt="dummy photo" />
                        </div>
                        <div className="name1-team">
                            <h3> Aatif Nayeem</h3>
                            <p><em>Student of 1st year</em></p>
                        </div>
                    </div>
                </div>
            </section>
            {/* ======================================================= Supporting Team End ====================================================== */}
        </div>

    );
}
export default Team;