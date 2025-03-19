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
              description="Shifoxona Bemorlar Xizmatlari va Qurilmalar Platformasi Ushbu platforma bemorlarga shifoxona haqida toʻliq maʼlumotlar olish va kerakli tibbiy qurilmalarni sotib olish imkonini beradi.
Asosiy imkoniyatlar:
Koʻp tilli interfeys: Platforma uchta tilga (oʻzbekcha, ruscha, inglizcha) moslangan boʻlib, turli millatdagi foydalanuvchilar uchun qulaylik yaratadi.
Shifoxona haqida maʼlumot: manzil, xizmatlar, ish vaqti.
Tibbiy qurilmalar doʻkoni: monitorlar, termometrlar va boshqa jihozlarni onlayn sotib olish."
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
              description="Fast-Food Admin Paneli tez-ovqat kompaniyasining barcha faoliyatlarini boshqarish uchun moʻljallangan yaxlit dasturiy yechimdir. Ushbu platforma administratorlarga sotuvlarni kuzatish, buyurtmalarni boshqarish, filiallarni nazorat qilish va xodimlarni boshqarish imkonini beradi.
Asosiy xususiyatlari: Sotilgan mahsulotlar va daromadni kuzatib borish orqali biznes samaradorligini oshirish.Buyurtmalarni real vaqt rejimida koʻrish va yetkazib berishni taʼminlash. Barcha filiallarning ishlashini kuzatish va ularni bir-biriga moslashtirish.
Xodimlarning maʼlumotlarini va masʼuliyatlarini boshqarish orqali jamoa produktivligini oshirish."
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
