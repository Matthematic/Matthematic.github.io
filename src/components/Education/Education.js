import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Coursera from "./Coursera/Coursera";
import MST from './MST.jpeg';
import Award from "./Coursera/Award";

function Education() {
    return (
        <Container fluid className="education-section full-screen-page">
            <Particle />
            <Container>
                <h1>Degree</h1>
                <Award img={MST} name="I hold a B.S. in Computer Science from Missouri University of Science and Technology" description="" />
                <div style={{ paddingTop: '50px' }}>
                    <Coursera />
                </div>
            </Container>
        </Container>
    );
}

export default Education;
