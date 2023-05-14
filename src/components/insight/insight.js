import './style.css';
import homePhoto from "./images/home-photo.png";
import articlePhoto from "./images/article-photo.png";
import ministryPhoto from "./images/ministry-logo1.png";
import ministryTweets from "./images/ministry-tweets.png"
function Insight() {
    return (
        <div>
            {/* ======================================================= Home photo section start ====================================================== */}
            <div className="home-photo">
                <h1>INSIGHTS</h1>
                <img src={homePhoto} alt="insight-home-photo" />
            </div>
            {/* ======================================================= Home photo section End ====================================================== */}
            {/* ======================================================= Pargraph-Section Start ====================================================== */}
            <div className="paragarph-section">
                <div className="p-left">
                    <h1>Our Recent News , Tweets &amp; Articles</h1>
                </div>
                <div className="p-right">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum aspernatur voluptas autem provident
                        inventore doloribus? Dicta distinctio ab, accusantium eius error, qui natus.</p>
                </div>
            </div>
            {/* ======================================================= Pargraph-Section End ====================================================== */}
            {/* ======================================================= News-navbar Section Start ====================================================== */}
            <div className="news-navbar">
                <ul>
                    <li>All</li>
                    <li>News</li>
                    <li>Tweets</li>
                    <li>Articles</li>
                </ul>
            </div>
            {/* ======================================================= News-navbar Section End ====================================================== */}
            {/* ======================================================= Tweets-section start ====================================================== */}
            <div className="tweets-section">
                <div className="col1">
                    <div className="first-box">
                        <div>
                        <img src={articlePhoto} alt="article-photo solar" />
                        </div>
                        <div>
                            <p>News</p>
                            <h2>Lorem ipsum dolor sit amet,
                                consectetur adipiscing
                            </h2>
                            <p>January 5, 2022</p>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt </p>
                            <p>+ READ MORE</p>
                        </div>
                    </div>
                    <div className="second-box">
                        <div>
                            <img src={ministryPhoto} alt="ministry tweets" />
                            <div>
                                <h4>Ministry of Electronics &amp; IT</h4>
                                <p>@GoI_MeitY</p>
                            </div>
                            <i className="fab fa-twitter tweet" />
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                Lorem ipsum </p>
                            <img src={ministryTweets} alt />
                        </div>
                    </div>
                    <div className="third-box">
                        <p>ARTICLES</p>
                        <h2>Lorem ipsum dolor sit amet,
                            consectetur adipiscing</h2>
                        <p>January 5, 2022</p>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt </p>
                        <p>+ READ MORE</p>
                    </div>
                </div>
                <div className="col2">
                    <div className="second-box">
                        <div>
                            <img src={ministryPhoto} alt="ministry tweets" />
                            <div>
                                <h4>Ministry of Electronics &amp; IT</h4>
                                <p>@GoI_MeitY</p>
                            </div>
                            <i className="fab fa-twitter tweet" />
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                Lorem ipsum </p>
                            <img src={ministryTweets} alt />
                        </div>
                    </div>
                    <div className="first-box">
                        <div>
                            <img src={articlePhoto} alt="article-photo solar" />
                        </div>
                        <div>
                            <p>News</p>
                            <h2>Lorem ipsum dolor sit amet,
                                consectetur adipiscing
                            </h2>
                            <p>January 5, 2022</p>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt </p>
                            <p>+ READ MORE</p>
                        </div>
                    </div>
                    <div className="third-box">
                        <p>ARTICLES</p>
                        <h2>Lorem ipsum dolor sit amet,
                            consectetur adipiscing</h2>
                        <p>January 5, 2022</p>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt </p>
                        <p>+ READ MORE</p>
                    </div>
                </div>
                <div className="col3">
                    <div className="third-box">
                        <p>ARTICLES</p>
                        <h2>Lorem ipsum dolor sit amet,
                            consectetur adipiscing</h2>
                        <p>January 5, 2022</p>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt </p>
                        <p>+ READ MORE</p>
                    </div>
                    <div className="second-box">
                        <div>
                            <img src={ministryPhoto} alt="ministry tweets" />
                            <div>
                                <h4>Ministry of Electronics &amp; IT</h4>
                                <p>@GoI_MeitY</p>
                            </div>
                            <i className="fab fa-twitter tweet" />
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                Lorem ipsum </p>
                            <img src={ministryTweets} alt />
                        </div>
                    </div>
                    <div className="first-box">
                        <div>
                            <img src={articlePhoto} alt="article-photo solar" />
                        </div>
                        <div>
                            <p>News</p>
                            <h2>Lorem ipsum dolor sit amet,
                                consectetur adipiscing
                            </h2>
                            <p>January 5, 2022</p>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt </p>
                            <p>+ READ MORE</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ======================================================= Tweets-section End ====================================================== */}
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
export default Insight;