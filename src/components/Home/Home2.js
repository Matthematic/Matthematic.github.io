import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";

function Home2() {


  const languages = ['Javascript', 'HTML/CSS', 'C++', 'Java', 'Ruby'].map(l => (
    <>
      <b className="purple">{l}</b>,&nbsp;
    </>
  ));
  const frameworks = ['React', 'Redux/Redux-saga', 'Node.js', 'Ruby On Rails'].map(l => (
    <>
      <b className="purple">{l}</b>,&nbsp;
    </>
  ));
  const tools = ['Git', 'Jest', 'Webdriver.io', 'Webpack', 'JUnit'].map(l => (
    <>
      <b className="purple">{l}</b>,&nbsp;
    </>
  ));

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a Software Engineer at Oracle. My main skills are front-end, but I have a dangerous curiosity and a love of learning.
              <br />
              <br />Skills
              <i>
                Languages: {languages}<br />
                Frameworks: {frameworks}<br />
                Tools: {tools}
              </i>
              <br />
              <br />
              My current focus is on &nbsp;
              <i>
                <b className="purple">
                  Modern Javascript Frameworks
                </b>
                &nbsp;and&nbsp;
                <b className="purple">
                  Creating cool bots/extensions for things.
                </b>
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Matthematic"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/matthewcarr0317/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/matt.carrrrr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
