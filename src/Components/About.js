import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const profilepic = "https://avatars.githubusercontent.com/u/77865204?v=4"
    const city = "Katy";
    const state = "Texas";
    const phone = "832-489-6667";
    const email = "randireyna@live.com";
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>I'm a recent graduate from DigitalCrafts, a bootcamp focusing on languages such as JavaScript, React.js, Python, and more. I am a self-driven individual with strong problem-solving skills and
                a desire to put the user-experience first. While using excellent design and functionality skills, creating web applications
                have become a passion. Prior to becoming a software engineer, I worked as a project coordinator for various companies
                where I supported multiple project managers in the laboratory construction industry.</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>
                      {city}, {state}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
