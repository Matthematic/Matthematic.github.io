import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import slice from "../../Assets/Projects/Slice-Slice-Baby.jpg";
import discord from "../../Assets/Projects/discord.png";
import atom from "../../Assets/Projects/atom.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={slice}
              isBlog={false}
              title="Slice Slice Baby"
              description="A custom Discord music bot called that I created with custom features for my personal use. It also serves as a test bench for me to experiment with the fundamentals of cloud deployments, security, load balancing, etc."
              link="https://github.com/Matthematic/Slice-Slice-Baby"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={discord}
              isBlog={false}
              title="Discord Memories"
              description="Discord bot that shows memories such as youtube links from the past to remind you of good times. Inspiration taken from Facebook Memories"
              link="https://github.com/Matthematic/discord-memories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={atom}
              isBlog={false}
              title="Folder Notes"
              description="A package for the Atom editor that allows you to put notes on the file tree"
              link="https://github.com/Matthematic/FolderNotes"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={atom}
              isBlog={false}
              title="Tracing-Reporter"
              description="A node module I made to support tracing tests to application requirements. I originally developed it as an internal tool for my day job, but I've open-sourced it just in case its useful to others."
              link="https://matthematic.github.io/tracing-reporter"
            />
          </Col>
        </Row>
        {/* <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={algo}
              link=""
              title="Cracking Interview"
              site="gitbook.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={plant}
              link="https://medium.com/jovianml/plant-ai-c8fc95ed90e6"
              title="Plant AI"
              site="medium.com"
            />
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}

export default Projects;
