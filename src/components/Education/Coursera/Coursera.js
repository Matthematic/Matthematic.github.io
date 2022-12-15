import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Award from './Award';
import graphQL from './GuidedProjects/GraphQL.pdf';
import metaFrontEnd from './Specializations/MetaFrontEnd/Intro to Front-End.pdf';

const Coursera = () => {
    return (
        <>
            <h1>Coursera Certificates</h1>
            <Award pdf={graphQL} name="Consume an API with React using Apollo and GraphQL" description="" />
            <Award pdf={metaFrontEnd} name="Introduction to Front-End Development" description="" />
        </>
    );
}

export default Coursera;