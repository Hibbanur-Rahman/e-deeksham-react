import './style.css';
import image2 from "./images/image2.jpg";
function Contact() {
    return (
    <div>
            <section className="ourteam">
                <img src={image2} alt="image" srcSet />
            </section>
            {/* ======================================================= OurTeam start ====================================================== */}
          {/* ======================================================= mid section start ====================================================== */}
            <section className="mid">
                <div className="mannage-contact">
                    <h1>Where You Find Us</h1>
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15034.167098348324!2d78.36107973729702!3d17.430546496156715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1680255417198!5m2!1sen!2sin" width={600} height={500} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        <div className="details">
                            <div className="address">
                                <i className="bi bi-geo-alt" />
                                <h3>Address</h3>
                                <p>Ministry Of Electronics ,New Delhi,India</p>
                            </div>
                            <div className="mailUs">
                                <i className="bi bi-envelope" />
                                <h3>Mail Us</h3>
                                <p>edeekshaam@gmail.com</p>
                            </div>
                            <div className="callUs">
                                <i className="bi bi-telephone" />
                                <h3>Call Us On</h3>
                                <p>+91 7321857364</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ======================================================= mid section end ====================================================== */} 
            {/* ======================================================= last section start ====================================================== */} 
            <section className="last">
                <h1>Get In Touch</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dicta reiciendis consequuntur nihil
                    ipsum tempora id, eligendi beatae aliquid molestias, quos, iure deleniti saepe quod voluptatibus sequi
                    dolor! Maxime, corrupti.</p>
                {/* <div class="contact">
              <input type="text" placeholder="First Name*">
                  <input type="text1" placeholder="Second Name*">
                  </div> */}
                <div className="contact">
                    <div className="input-data">
                        <input type="text" required />
                        <label>First Name*</label>
                    </div>
                    <div className="input-data">
                        <input type="text1" required />
                        <label>Second Name*</label>
                    </div>
                </div>
                <div className="contact">
                    <div className="input-data">
                        <input type="text" required />
                        <label>Email id*</label>
                    </div>
                    <div className="input-data">
                        <input type="text1" required />
                        <label>Mobile No*</label>
                    </div>
                </div>
                <div className="contact">
                    <div className="input-data">
                        <input type="text" required />
                        <label>Designation*</label>
                    </div>
                    <div className="input-data">
                        <input type="text1" required />
                        <label>Organisation*</label>
                    </div>
                </div>
                <div className="contact">
                    <textarea cols={30} rows={10} placeholder="Your Message*" defaultValue={""} />
                </div>
                <button className="button1">Submit</button>
            </section>
        </div>
    );
}

export default Contact;