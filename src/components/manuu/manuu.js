import './style.css'
import manuuAdmin from "./manuu-admin.png";
import dept from "./img1.png"
function Manuu() {
    return (
        <div>
            <section className="sec">
                <img className="img-about" src={manuuAdmin} alt />
            </section>
            <div className="main-div">
                <div className="manuu-div">
                    <div>
                        <h2 className="h2">Maulana Azad National Urdu University</h2>
                        <h1 className="heading1">(A Central University, Hyderabad, India)</h1>
                    </div>
                    <p className="about-manuu">Maulana Azad National Urdu University (MANUU) is a central university established
                        by an Act of the Indian Parliament in the year 1998, with all India Jurisdiction, to promote and
                        impart research, vocational and technical education through regular and distance modes. It is
                        situated in the IT hub of the ever-active city of Hyderabad. The University has 7 Schools of
                        Studies, 19 departments, and 8 Colleges of Teacher Education. It also has five polytechnics, two
                        satellite campuses, 14 centres and directorates for education and research. By acknowledging the
                        efforts of the university in research and education, National Assessment and Accreditation Council
                        (NAAC), has awarded an <b> ‘A+’ </b>grade to the University. </p>
                </div>
                <div className="img-div-manuu">
                    <img src={dept} alt className="img1" />
                </div>
                <div className="dept-div">
                    <h3 className="h3">Department of Computer Science &amp; Information Technology</h3>
                    <p className="about-dept">Department of Computer Science &amp; Information Technology (CS&amp;IT) under the ‘School
                        of Technology’ was established in 2006. The department has state-of-the-art ICT infrastructure
                       . At present, the department is offering B.Tech, M.Tech, MCA,
                        and PhD programmes in Computer Science and Information Technology. All these programs are approved by All India Council for Technical
                        Education (AICTE). Currently, there are 25 faculty members working in the Department of CS&amp;IT
                        conducting teaching and research under various areas of CS/IT. The Department of CS&amp;IT has focused
                        on research in various cutting-edge areas such as machine translation, adaptive systems,
                        personalized learning, bioinformatics, road dynamics, computer vision, web semantics, disease
                        prediction, smart computing, networking, security etc.</p>
                </div>
            </div>
        </div>

    );
}

export default Manuu;