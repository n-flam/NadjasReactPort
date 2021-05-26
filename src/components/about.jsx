import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { 
          id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" 
        },
        { 
          id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" 
        },
        {
          id: "JavaScript_skill", content: "JavaScript", porcentage: "50%", value: "50"
        },
        // { id: "PHP_skill", content: "PHP", porcentage: "70%", value: "70" },
        {
          id: "ReactJS_skill", content: "ReactJS", porcentage: "50%", value: "50"
        },
        {
          id: "Photoshop", content: "Photoshop", porcentage: "95%", value: "95"
        },
        {
          id: "InDesign", content: "InDesign", porcentage: "95%", value: "95"
        },
        {
          id: "Illustrator", content: "Illustrator", porcentage: "95%", value: "95"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I am Nadja, an Art Director from Germany."
        },
        {
          id: "second-p-about",
          content:
            "In the past years I have been working in Hospitality as a cafe/restaurant manager. It made me realised that my two career were not too different from each others. I am very good at finding solution and am hunger for knowledge."
        },
        {
          id: "third-p-about",
          content:
            "Never giving up the graphical part of me, my friends know that they can count on me when they need help with design and programming even though I hold basic knowledge in them."
        },
        {
          id: "four-p-about",
          content:
            "Due to this I felt that it was about time for me to dive properly and deeply in to programming and this is why I have made the decision to join this bootcamp and start a new chapter in life."
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
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
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
