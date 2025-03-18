import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
} from "react-icons/si";

import {
  DiReact,
  DiGit,
} from "react-icons/di";
import {
  SiAntdesign,
  SiMui,
  SiChakraui,
  SiRedux,
  SiMobx,
  SiReactquery,
  SiReactrouter,
} from "react-icons/si";
import { IoLogoSass } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAntdesign />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMui />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiChakraui />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandNextjs />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMobx />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReactquery />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <IoLogoSass />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReactrouter />
      </Col>
    </Row>
  );
}

export default Toolstack;
