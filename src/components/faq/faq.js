import './style.css';
import homePhoto from "./about-E-Deeksham.png";
function Faq(){
    var t=document.querySelectorAll('.transform');
    var p=document.querySelectorAll('.p');
    var y=document.querySelectorAll('.arrow-btn');
    var z=document.querySelectorAll('.row-faq');
    console.log(p)
    
    console.log(t);
    function myFun(val){
        z[val].classList.toggle('add-bg');
        t[val].classList.toggle('content');
        p[val].classList.toggle('p');
        y[val].classList.toggle('arr-btn');
    }
    return(
     <div>
  <div className="img-div">
    <img className="img-about" src={homePhoto} alt />
  </div>
  <div className="main">
    <div className="col-1">
      <div>
        <div className="row-faq add1">
          <p>Lorem ipsum dolor sit amet, consectetur adip</p>
          <div className="arrow-btn" onclick="myFun(0)"><i className="bi bi-chevron-compact-down  " /></div>
        </div>
        <div className="transform">
          <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et d</p>
        </div>
      </div>
      <div>
        <div className="row-faq">
          <p>Lorem ipsum dolor sit amet, consectetur adip</p>
          <div className="arrow-btn" onclick="myFun(1)"><i className="bi bi-chevron-compact-down " /></div>
        </div>
        <div className="transform"><p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et d</p></div>
      </div>
      <div>
        <div className="row-faq">
          <p>Lorem ipsum dolor sit amet, consectetur adip</p>
          <div className="arrow-btn" onclick="myFun(2)"><i className="bi bi-chevron-compact-down " /></div>
        </div>
        <div className="transform"><p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et d</p></div>
      </div>
      <div>
        <div className="row-faq">
          <p>Lorem ipsum dolor sit amet, consectetur adip</p>
          <div className="arrow-btn" onclick="myFun(3)"><i className="bi bi-chevron-compact-down " /></div>
        </div>
        <div className="transform"><p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et d</p></div>
      </div>
    </div>
    <div className="col-2">
      <div>
        <div className="row-faq">
          <p>Lorem ipsum dolor sit amet, consectetur adip</p>
          <div className="arrow-btn" onclick="myFun(4)"><i className="bi bi-chevron-compact-down " /></div>
        </div>
        <div className="transform"><p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et d</p></div>
      </div>
      <div>
        <div className="row-faq">
          <p>Lorem ipsum dolor sit amet, consectetur adip</p>
          <div className="arrow-btn" onclick="myFun(5)"><i className="bi bi-chevron-compact-down " /></div>
        </div>
        <div className="transform"><p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et d</p></div>
      </div>
      <div>
        <div className="row-faq">
          <p>Lorem ipsum dolor sit amet, consectetur adip</p>
          <div className="arrow-btn" onclick="myFun(6)"><i className="bi bi-chevron-compact-down " /></div>
        </div>
        <div className="transform"><p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et d</p></div>
      </div>
      <div>
        <div className="row-faq">
          <p>Lorem ipsum dolor sit amet, consectetur adip</p>
          <div className="arrow-btn" onclick="myFun(7)"><i className="bi bi-chevron-compact-down " /></div>
        </div>
        <div className="transform"><p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et d</p></div>
      </div>
    </div>
  </div>
  <div className="div3">
    <div className="support">
      <h1>Support</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Lor</p>
    </div>
    <div className="mail-us">
      <i className="bi bi-envelope" />
      <h3>Mail Us</h3>
      <p>edeekshamsupport@gmail.com</p>
    </div>
    <div className="call-us">
      <i className="bi bi-telephone" />
      <h3>Call Us on</h3>
      <p>955226566545</p>
    </div>
  </div>
</div>

    );
}
export default Faq;