import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import pdf from './resume.pdf';
import Typer from '../Typer/Typer';

function Resume() {
  return (
    <Container fluid className="resume-section full-screen-page">
      <Particle />
      <Typer />

      <Row style={{ justifyContent: "center" }}>
        <Col
          md={7}
          style={{
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            My Resume
          </h1>
          <Document file={pdf}> <Page pageNumber={1} /> </Document>
          <Button
            className="fork-btn-inner"
          >
            <a href={pdf} download>Download</a>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;
