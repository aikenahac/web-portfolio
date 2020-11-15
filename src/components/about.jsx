import React from "react";
import mePic from "../img/aikenpic.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      mePic: mePic,
      about_me: [
        {
          id: "first-p-about",
          content:
            "Hey, my name is Aiken Tine Ahac. I am a Software Developer from Slovenia. I mostly work in mobile and web development in frameworks like Flutter and React. I am also fairly skilled in backend development with node.js. I can also pick up new skills really quick, as I am still young and am learning new things every day. I am passionate about my work, and once I start a new project, I see it through."
        },
        {
          id: "second-p-about",
          content:
            "---"
        },
        {
          id: "third-p-about",
          content:
            "Živjo, moje ime je Aiken Tine Ahac. Delujem kot Software Develper v Sloveniji. Večinoma delam v mobilnem ter spletnem razvoju v okolji kot so Flutter in React. Precej dobro mi gre tudi \"backend\" razvoj z node.js. Hitro tudi poberem nova znanja, saj sem še vedno precej mlad in se učim iz dneva v dan. Strasten sem glede svojega dela in ko enkrat začnem nov projekt, ga vedno dokončam, ne glede na ovire."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                <div className="col-md-6">
                    <img
                      src={this.state.mePic}
                      className="aiken-img"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                      return (
                      <p className="lead" key={content.id}>
                        {content.content}
                      </p>
                      );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;