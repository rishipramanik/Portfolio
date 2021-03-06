import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rishi Pramanik </span>
            from <span className="purple"> Bangalore, India.</span>
            <br />I am pursuing MCA in University of Mysore.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Astronomy
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Things are built good but i can make them look better!"{" "}
          </p>
          <footer className="blockquote-footer">Rishi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
