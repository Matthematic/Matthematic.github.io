import React from 'react';
import CertificateViewer from '../CertificateViewer';
import { Container, Row, Col } from "react-bootstrap";

const Award = ({ pdf, img, name, description }) => {
    return (
        <Row className="align-items-center p-1">
            <Col
                md={6}
            >
                <h3>{name}</h3>
                <p>{description}</p>
            </Col>
            <Col
                md={6}
            >
                {pdf ? <div className="award-cert"><CertificateViewer pdf={pdf} /></div> : null}
                {img ? <img src={img} className="award-img" /> : null}
            </Col>
        </Row>
    );
}

export default Award;