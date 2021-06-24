import React, { Component } from "react";
// import Zmage from "react-zmage";
import Fade from "react-reveal";
import pythonProject from './pythonproject.png'
import frontendproject from  './frontendproject.png'
import foodfinder from './food_finder img.png'
import etsyshop from './etsyshop.png'
let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <img alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <img alt={pythonProject} src={pythonProject}/>
                      <div style={{ textAlign: "center", fontWeight:"bold" }}>Python Project</div>
                      <p style={{ textAlign: "center" }}>This is a decision based terminal game where the choices made by the user impact the outcome of the game. A user can make a coice by entering a number and pressings.</p>
                      <p style={{ textAlign: "center" }}>Tools use to Build: Python</p>
                    </div>
                  </div>
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href="https://github.com/randi09/front_end">
                      <img alt={frontendproject} src={frontendproject}/>
                      <div style={{ textAlign: "center", fontWeight:"bold" }}>Front End Project</div>
                      <p style={{ textAlign: "center" }}>Music Interface website where users can find top charts by tracks, and artists, as well as find lyrics to songs, artist biographies, and albums per artist.</p>
                      <p style={{ textAlign: "center" }}>Tools use to build: HTML, CSS, Javascript</p>
                      </a>
                    </div>
                  </div>
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href="https://github.com/randi09/Etsy_Project">
                      <img alt={projects.title} src={etsyshop}/>
                      <div style={{ textAlign: "center", fontWeight:"bold" }}>React Project - Etsy Store</div>
                      <p style={{ textAlign: "center" }}>An ecommerce web application where users can browse products and add items to a cart.</p>
                      <p style={{ textAlign: "center" }}>Tools use to build: React.js, Redux, Material UI, React-Bootstrap, CSS, Javascript.</p>
                      </a>
                    </div>
                  </div>
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href="https://github.com/chkling/food-findr">
                      <img alt={foodfinder} src={foodfinder}/>
                      <div style={{ textAlign: "center", fontWeight:"bold" }}>Full Stack Project - Food Finder</div>
                      <p style={{ textAlign: "center" }}>On this website you can register an account and make reservations to restaurants. After making an account, you will be routed to the home page where you can see all your current reservations.</p>
                      <p style={{ textAlign: "center" }}>Tools used to build: Javascript, Node.js, Express, SupaBase, Passport.js, HTML, CSS</p>
                      </a>
                    </div>
                  </div>
                  {/* <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <img alt={projects.title} src=""/>
                      <div style={{ textAlign: "center", fontWeight:"bold" }}>Capstone Project</div>
                    </div>
                  </div> */}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
