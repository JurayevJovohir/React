import Logo from "./images/Logo.svg";
import Triangle from "./images/Triangle Copy 6.svg";
import icon from "./images/icon.svg";
import icon2 from "./images/icon2.svg";
import icon3 from "./images/icon3.svg";
import icon4 from "./images/icon4.svg";
import Image from "./images/Image.png";
import Image1 from "./images/image1.png";
import Image2 from "./images/image2.png";
import Image3 from "./images/image3.png";
import Image4 from "./images/image4.png";
import Image5 from "./images/image5.png";
import Image6 from "./images/image6.png";
import ImageLarge from "./images/imagebg.png";
import ImageSmall from "./images/pic.png";
import Avator from "./images/Avator.png";
import Avator2 from "./images//Avator2.png";
import Avator3 from "./images/Avator3.png";
import Phone from "./images/ico_phone.svg";
import Mail from "./images/ico_mail.svg";



import "./index.scss";

function App() {
  return (
    <div>
      <h1 className="visually-hidden">Добро пожаловать в наш сайт</h1>
      <header className="site-header">
        <div className="container">
          <div className="header-div">
            <a className="logo-link" href="./index.html">
              <img className="logo" src={Logo}
                alt="Producty logo"
                width="190"
                height="32"/>
            </a>

            <nav className="nav">
              <ul className="nav-list">
                <li className="nav-item">
                  <a className="nav-link" href="./index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Product </a>
                </li>
              </ul>
            </nav>
            <div className="sign-link">
              <a className="register" href="#">Sign in</a>
              <a className="register1" href="#">Sign up</a>
            </div>
          </div>
        </div>
      </header>


      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-div">
              <div className="hero-content">
                <h1 className="hero-title">The Design Thinking superpowers</h1>
                <p className="hero-text">Tools, tutorials, design and innovation experts, all in one place!
                  The most intuitive way to imagine your next user experience.</p>
                <a className="hero-link" href="#">Get started</a>
                <a className="hero-video" href="#">
                <img className="link-img" 
                src={Triangle} 
                alt="#"/>
                Watch the Video</a>
              </div>

              <img className="img" src={Image}
                alt="Girls"
                width="642"
                height="494"/>
            </div>
          </div>
        </section>

        <section className="design-section">
          <div className="container">
            <h2 className="design-section-title">We design tools to unveil your superpowers</h2>
            <div className="design-div">
              <ul className="design-list">
                <li className="design-item1">
                  <img src={icon} alt="LOGO"
                    width="50"
                    height="50"/>
                    <h3 className="design-title">First click tests</h3>
                    <p className="design-text">While most people enjoy
                      casino gambling,</p>
                </li>

                <li className="design-item">
                  <img src={icon2} alt="LOGO"
                    width="50"
                    height="50"/>
                    <h3 className="design-title">Design surveys</h3>
                    <p className="design-text">Sports betting, lottery and bingo playing for the fun</p>
                </li>

                <li className="design-item">
                  <img src={icon3} alt="LOGO"
                    width="50"
                    height="50"/>
                    <h3 className="design-title">Preference tests</h3>
                    <p className="design-text">The Myspace page defines
                      the individual.</p>
                </li>

                <li className="design-item">
                  <img src={icon4} alt="LOGO"
                    width="50"
                    height="50"/>
                    <h3 className="design-title">Five second tests</h3>
                    <p className="design-text">Personal choices and the overall personality of the person. </p>
                </li>
              </ul>
              <div className="design-link-div">
                <a className="design-link" href="#">Sign Up now</a>
              </div>
            </div>
          </div>
        </section>


        <section className="marketing-section">
          <div className="container">
            <h2 className="marceting-section-title">Marketing Strategies</h2>
            <p className="marketing-text">Join 40,000+ other marketers and get proven strategies on email marketing</p>
            <div className="marceting-div1">
              <a className="marceting-all" href="#">All</a>
              <a className="marceting-art2" href="#">Art</a>
              <a className="marceting-culture2" href="#">Culture</a>
              <a className="marceting-design2" href="#">Design</a>
            </div>

            <ul className="marceting-list">
              <li className="marceting-item1">
                <img src={Image1}
                  alt="search"
                  width="377"
                  height="200"/>
                  <h3 className="marceting-title">Increasing Prosperity With Positive Thinking</h3>
                  <div className="marceting-div">
                    <a className="marceting-art1" href="#">Art</a>
                    <a className="marceting-design" href="#">Design</a>
                  </div>
              </li>

              <li className="marceting-item">
                <img src={Image2}
                  alt="First Step"
                  width="377"
                  height="200"/>
                  <h3 className="marceting-title">Motivation Is The First Step To Success</h3>
                  <div className="marceting-div">
                    <a className="marceting-culture1" href="#">Culture</a>
                  </div>
              </li>

              <li className="marceting-item">
                <img src={Image3}
                  alt="Business Life"
                  width="377"
                  height="200"/>
                  <h3 className="marceting-title">Success Steps For Your Personal Or Business Life</h3>
                  <div className="marceting-div">
                    <a className="marceting-culture1" href="#">Culture</a>
                    <a className="marceting-design" href="#">Design</a>
                    <a className="marceting-art" href="#">Art</a>
                  </div>
              </li>

              <div className="marceting-div2">
                <li className="marceting-item1">
                  <img src={ImageLarge}
                    alt="Business Life Plus Funny"
                    width="787"
                    height="200"/>
                    <h3 className="marceting-title1">Success Steps For Your Personal Or Business Life Plus Funny Image on the Back</h3>
                    <div className="marceting-div">
                      <a className="marceting-culture1" href="#">Culture</a>
                      <a className="marceting-design" href="#">Design</a>
                      <a className="marceting-art" href="#">Art</a>
                    </div>
                </li>

                <li className="marceting-item">
                  <img src={ImageSmall}
                    alt="With Positive Thinking"
                    width="377"
                    height="200"/>
                    <h3 className="marceting-title">Increasing Prosperity With Positive Thinking</h3>
                    <div className="marceting-div">
                      <a className="marceting-design1" href="#">Design</a>
                    </div>
                </li>
              </div>

              <li className="marceting-item1">
                <img src={Image4}
                  alt=" With Positive Thinking"
                  width="377"
                  height="200"/>
                  <h3 className="marceting-title">Increasing Prosperity With Positive Thinking</h3>
                  <div className="marceting-div">
                    <a className="marceting-art1" href="#">Art</a>
                    <a className="marceting-design" href="#">Design</a>
                  </div>
              </li>

              <li className="marceting-item">
                <img src={Image5}
                  alt="The First Step To Success"
                  width="377"
                  height="200"/>
                  <h3 className="marceting-title">Motivation Is The First Step To Success</h3>
                  <div className="marceting-div">
                    <a className="marceting-culture1" href="#">Culture</a>
                  </div>
              </li>

              <li className="marceting-item">
                <img src={Image6}
                  alt="Business Life"
                  width="377"
                  height="200"/>
                  <h3 className="marceting-title">Success Steps For Your Personal Or Business Life</h3>
                  <div className="marceting-div">
                    <a className="marceting-culture1" href="#">Culture</a>
                    <a className="marceting-design" href="#">Design</a>
                    <a className="marceting-art" href="#">Art</a>
                  </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="about-section">
          <div className="container">
            <h2 className="about-title">About Us</h2>
            <p className="about-text">Your About Us page is vital. It’s often the first stop in any user’s journey through a website or blog. It also shouldn’t be their last, because first impressions count online just as much as they do in the real world. If your visitors aren’t impressed, you can expect them to leave without reading your awesome content or completing a conversion action (e.g., signing up for your newsletter, making a purchase).</p>
            <div className="aboutus">
              <div className="aboutus-inner">
                <h3 className="aboutus-title">Kathy Rosenberg</h3>
                <p className="aboutus-text">Product Mannager</p>
                <address className="address">
                  <a className="aboutus-link" href="mailto:kathyr@gmail.com">kathyr@gmail.com</a>
                </address>
                <img className="aboutus-img" src={Avator}
                  alt="#"/>
              </div>
              <div className="aboutus-inner1">
                <h3 className="aboutus-title">Alexandra Boyarskaya</h3>
                <p className="aboutus-text">Support Marketing Specialist</p>
                <address className="address">
                  <a className="aboutus-link" href="mailto:alexandrab@gmail.com">alexandrab@gmail.com</a>
                </address>
                <img className="aboutus-img" src={Avator2}
                  alt="#"/>
              </div>
              <div className="aboutus-inner1">
                <h3 className="aboutus-title">Melani Amini</h3>
                <p className="aboutus-text">Photographer</p>
                <address className="address">
                  <a className="aboutus-link" href="mailto:melania@gmail.com">melania@gmail.com</a>
                </address>
                <img className="aboutus-img" src={Avator3}
                  alt=""/>
              </div>
            </div>
          </div>
        </section>


        <section className="contact">
          <div className="container">
            <div className="contact-div">
              <div className="contact-left">
                <h2 className="contact-left-title">Contact Us</h2>
                <p className="contact-left-text">Your About Us page is vital. It’s often the first stop in any user’s journey through a website or blog. It also shouldn’t be their last, because first impressions count online just as much as they do in the real world. If your visitors aren’t impressed, you can expect them to leave without reading your awesome content or completing a conversion action (e.g., signing up for your newsletter, making a purchase).</p>
                <div className="contact-left-top">
                  <img className="contact-images" src={Phone} alt="logo"/>
                    <a className="contact-number">+375 (22) 345-00-99</a>
                </div>

                <div className="contact-left-bottom">
                  <img className="contact-images" src={Mail} alt="logo"/>
                    <a className="contact-email" href="mailto:emailname@gmail.com">emailname@gmail.com</a>
                </div>
              </div>
              <form action="https://echo.htmlacademy.ru/" method="POST" target="_blank">
                <div className="contact-right">
                  <div>
                    <input
                      type="text"
                      name="user-name"
                      aria-label="Your name"
                      placeholder="Your name"
                      required/>

                      <input className="input-1"
                        type="email"
                        name="user-email"
                        aria-label="Your email"
                        placeholder="Your email"
                        required/>
                      </div>

                      <textarea
                        name="user-ask"
                        placeholder="What do you want to ask?"
                        aria-label="What do you want to ask?"></textarea>

                      <button type="submit">Send</button>
                  </div>
              </form>
            </div>
          </div>
        </section>
      </main>


      <footer>
        <div className="container">
          <div className="footer-div">
            <a className="footer-link" href="">
              <img className="footer-logo" src={Logo} alt="logo"/>
            </a>

            <div className="footer-left">
              <h3 className="footer-left-title">Quick Links</h3>
              <ul className="footer-left-list">
                <li className="footer-left-item">
                  <a className="footer-left-link" href="#">About Us</a>
                </li>

                <li className="footer-left-item">
                  <a className="footer-left-link" href="#">Blog</a>
                </li>

                <li className="footer-left-item">
                  <a className="footer-left-link" href="#">Contact</a>
                </li>

                <li className="footer-left-item">
                  <a className="footer-left-link" href="#">FAQ</a>
                </li>
              </ul>
            </div>

            <div className="footer-middle">
              <h3 className="footer-middle-title">Quick Links</h3>
              <ul className="footer-middle-list">
                <li className="footer-middle-item">
                  <a className="footer-middle-link" href="#">Disclaimer</a>
                </li>

                <li className="footer-middle-item">
                  <a className="footer-middle-link" href="#">Financing</a>
                </li>

                <li className="footer-middle-item">
                  <a className="footer-middle-link" href="#">Privacy Policy</a>
                </li>

                <li className="footer-middle-item">
                  <a className="footer-middle-link" href="#">Terms of Service</a>
                </li>
              </ul>
            </div>

            <div className="footer-right">
              <h3 className="footer-right-title">Quick Links</h3>
              <ul className="footer-right-list">
                <li className="footer-right-item">
                  <a className="footer-right-link" href="#">About Us</a>
                </li>

                <li className="footer-right-item">
                  <a className="footer-right-link" href="#">Blog</a>
                </li>

                <li className="footer-right-item">
                  <a className="footer-right-link" href="#">Contact</a>
                </li>

                <li className="footer-right-item">
                  <a className="footer-right-link" href="#">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
