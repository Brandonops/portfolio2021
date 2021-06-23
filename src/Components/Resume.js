import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const education = (
      <div>
        <h3>DigitalCrafts</h3>
        <p className="info">
          Full Stack Software Development <span>&bull;</span>
          <em className="date">Graduated: June 28th, 2021</em>
        </p>
        <p>Software engineering training program covering full-stack development including, but not limited to JavaScript, Python, including an emphasis on cutting-edge frameworks like React/Redux and server-side technologies including Node.js, Express, and PostgreSQL
        </p>
      </div>
    );

    const work = (
      <div>
        <div >
          <h3>LCS/LMS/MGC</h3>
          <p className="info">
            Project/Service Coordinator
            <span>&bull;</span> <em className="date">2013-2019</em>
          </p>
          <ul>
            <li>
              • Coordinate office communications by overseeing scheduling of multiple crews/Dispatching while setting up new jobs, performing take-offs and reviewing quotes
            </li>
            <li>
              • Process Timesheets for accuracy on payroll and billing purposes
            </li>
            <li>
              • Process all accounts receivables and payables including coding invoices and billing of Service Department
            </li>
            <li>
              • Marketing and client relationship management
            </li>
            <li>
              • Daily financial reviews for monthly balances
            </li>
          </ul>
        </div >
        <div >
          <h3>MasterWord Services, Inc.</h3>
          <p className="info">
            Billing and Revenue Specialist
            <span>&bull;</span> <em className="date">2017-2018</em>
          </p>
          <ul>
            <li>
              • Keeping updated reports of accounts receivable, Invoice clients according to contract
            </li>
            <li>
              • Close work orders (volume up to 6500 monthly), Resolve any issues or mistakes, Resolve issues or
              complaints clients may encounter, Invoice clients according to contract
            </li>
            <li>
              • Data Entry, Collections, Weekly financial reports for margins, Support audit clean ups
            </li>
            <li>
              • Process time records for accuracy on payroll for contractors and billing purposes
            </li>
            <li>
              • Train new staff, create training manuals for accounting processes
            </li>
          </ul>
        </div >
      </div>
    );

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="bars">
                <section id="skills" className="skills section-bg">
                  <div className="container">
                    <div className="skillsContainer  " >


                      <div className=" skillsrow skillscol">

                        <div className="skillsIMG hvr-float-shadow rotate-vert-center">
                          <i className="devicon-html5-plain devicons "></i>
                          <span>HTML5</span>
                        </div>
                        <div className="skillsIMG hvr-float-shadow rotate-vert-center">
                          <i className="devicon-css3-plain devicons"></i>
                          <span>CSS3</span>
                        </div>

                        <div className="skillsIMG hvr-float-shadow rotate-vert-center">
                          <i className="devicon-javascript-plain devicons"></i>
                          <span>JavaScript</span>
                        </div>

                        <div className="skillsIMG hvr-float-shadow rotate-vert-center">
                          <i className="devicon-react-original devicons"></i>
                          <span>React</span>
                        </div>
                        <div className="skillsIMG hvr-float-shadow rotate-vert-center">
                          <i className="devicon-python-plain devicons"></i>
                          <span>Python</span>
                        </div>
                      </div>

                      <div className=" skillsrow skillscol">

                        <div className="skillsIMG hvr-float-shadow rotate-vert-center" >
                          <i className="devicon-jquery-plain devicons"></i>
                          <span>jQuery</span>
                        </div>
                        <div className="skillsIMG hvr-float-shadow rotate-vert-center">
                          <i className="devicon-nodejs-plain devicons"></i>
                          <span>Node.js</span>
                        </div>
                        <div className="skillsIMG hvr-float-shadow rotate-vert-center">
                          <i className="devicon-postgresql-plain devicons"></i>
                          <span>PostgreSQL</span>
                        </div>
                        <div className="skillsIMG hvr-float-shadow rotate-vert-center">
                          <i className="devicon-sequelize-plain devicons"></i>
                          <span>Sequelize</span>
                        </div>
                        <div className="skillsIMG hvr-float-shadow rotate-vert-center">
                          <i className="devicon-redux-plain devicons"></i>
                          <span>Redux</span>
                        </div>
                      </div>
                      <div className="skillsrow skillscol">

                        <div className="skillsIMG hvr-float-shadow rotate-vert-center">
                          <i className="devicon-express-original devicons"></i>
                          <span>Express</span>
                        </div>
                        <div className="skillsIMG hvr-float-shadow rotate-vert-center">
                          <i className="devicon-github-original devicons"></i>
                          <span>GitHub</span>
                        </div>

                        <div className="skillsIMG hvr-float-shadow rotate-vert-center">
                          <i className="devicon-npm-original-wordmark devicons"></i>
                          <span>npm</span>
                        </div>
                        <div className="skillsIMG hvr-float-shadow rotate-vert-center">
                          <i className="devicon-visualstudio-plain devicons"></i>
                          <span>VS Code</span>
                        </div>
                        <div className="skillsIMG hvr-float-shadow rotate-vert-center">
                          <i className="devicon-bootstrap-plain devicons"></i>
                          <span>Bootstrap</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
