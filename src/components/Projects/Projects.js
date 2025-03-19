import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              isSecret={false}
              title="GMT"
              description="Hospital Patient Services and Platform This Device platform helps the staff. Main uses: Multilingual interface: The platform is compatible with three languages ​​(Uzbek, Russian, English) for ease of use for people of different nationalities. Hospital information: address, usage, working hours. Medical equipment store: buy monitors, thermometers and other equipment online."
              ghLink="github.com/Don1yor044/GMT"
              demoLink="gmt-iota.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              isSecret={false}
              title="Fast-Food Admin"
              description="Fast-Food Admin Panel is a comprehensive software solution designed to manage all the activities of a fast-food company. This platform allows administrators to track sales, manage orders, control branches and manage employees. Key features: Increase business efficiency by tracking products sold and revenue. View orders in real time and ensure delivery. Monitor the performance of all branches and coordinate them with each other. Increase team productivity by managing employee data and responsibilities."
              ghLink="github.com/Don1yor044/FilialsFoodAdmin"
              demoLink="filials-food-admin.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              isSecret={true}
              title="Abu sahiy Admin"
              description=""
            />
          </Col>




        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
