import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

function About() {

  const skills = [
    "devicon-cplusplus-line",
    "devicon-javascript-plain ",
    "devicon-nodejs-plain-wordmark ",
    "devicon-react-original-wordmark",
    "devicon-redux-original",
    "devicon-babel-plain",
    "devicon-java-plain-wordmark",
    "devicon-sass-original",
    "devicon-d3js-plain",
    "devicon-ruby-plain-wordmark",
  ].map(x => (<Techstack iconName={x} />));

  const tools = [
    "devicon-git-plain-wordmark",
    "devicon-ubuntu-plain-wordmark",
    "devicon-visualstudio-plain",
    "cib-postman",
    "devicon-docker-plain-wordmark",
    "devicon-jenkins-plain",
    "devicon-heroku-plain-wordmark",
    "devicon-webpack-plain-wordmark",
  ].map(x => (<Techstack iconName={x} />));

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I Am</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          { skills }
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          { tools }
        </Row>
        <Github />
      </Container>
    </Container>
  );
}

export default About;
