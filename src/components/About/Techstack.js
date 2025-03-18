import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
} from "react-icons/di";
import { SiTypescript } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

    </Row>
  );
}

export default Techstack;
