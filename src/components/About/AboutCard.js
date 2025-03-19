import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mamaraimov Doniyor </span>
            from <span className="purple">O'zbekiston, Toshkent.</span>
            <br />
            I am currently employed as a frontend developer at Abu-Sahiy online market

            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Learing English
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Don't be afraid to make mistakes !"{" "}
          </p>
          <p style={{ fontSize: "15px", color: "rgb(155 126 172)" }}>
            Every mistake is a lesson, every failure is an opportunity to grow. <br /> Keep pushing forward, experiment, and learn
          </p>
          <footer className="blockquote-footer">Doniyor</footer>
        </blockquote>
      </Card.Body>
    </Card >
  );
}

export default AboutCard;
