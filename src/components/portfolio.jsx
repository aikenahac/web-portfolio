import React from "react";

// MyHome screenshots
import myHome1 from "../img/MyHome/1groups.png";
import myHome2 from "../img/MyHome/2lights.png";

// YourFlare
import yfl1 from "../img/YourFlare/1.png";
import yfl2 from "../img/YourFlare/2.png";
import yfl3 from "../img/YourFlare/3.png";
import yfl4 from "../img/YourFlare/4.png";
import yfl5 from "../img/YourFlare/5.png";
import yfl6 from "../img/YourFlare/6.png";
import yfl7 from "../img/YourFlare/7.png";
import yfl8 from "../img/YourFlare/8.png";

// ShowMatch
import sm1 from "../img/ShowMatch/1.png";
import sm2 from "../img/ShowMatch/2.png";
import sm3 from "../img/ShowMatch/3.png";
import sm4 from "../img/ShowMatch/4.png";
import sm5 from "../img/ShowMatch/5.png";
import sm6 from "../img/ShowMatch/6.png";


class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href={yfl1} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={yfl1} alt="" className="img-fluid" />
                  </div>
                  
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">YourFlare</h2>
                      <a href="https://yourflare.io" target="_blank">
                        <div className="w-more" style={{fontSize: 15}}>
                          <span className="w-ctegory">
                            Link to website
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <a
                  href={yfl2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={yfl3}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={yfl4}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={yfl5}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={yfl6}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={yfl7}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={yfl8}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={sm1} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={sm1} alt="" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">ShowMatch</h2>
                      <a href="https://github.com/Axodus/showmatch-app" target="_blank">
                        <div className="w-more" style={{fontSize: 15}}>
                          <span className="w-ctegory">
                            Link to GitHub repo
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <a
                  href={sm2}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={sm3}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={sm4}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={sm5}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={sm6}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={myHome1} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={myHome1} alt="" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">MyHome</h2>
                      <a href="https://github.com/Axodus/MyHome" target="_blank">
                        <div className="w-more" style={{fontSize: 15}}>
                          <span className="w-ctegory">
                            Link to GitHub repo
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <a
                  href={myHome2}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
