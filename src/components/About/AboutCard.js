import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {

  const hobbies = [
    "Competitive Armwrestling (Seriously! It's a thing!)",
    "3D Printing",
    "Video Games",
    "Archery",
    "Grip Sports (also a thing!)",
    "Dad Jokes"
  ].map(h => (
    <li className="about-activity">
      <i className="far fa-hand-point-right"></i> {h}
    </li>
  ))
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Matthew Carr </span>
            from <span className="purple"> Kansas City, MO.</span>
            <br />I am {Number(new Date().getFullYear()) - 1993} years old pursing a long career in software development.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            {hobbies}
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Think of a seriously profound quote to put here later"
          </p>
          <footer className="blockquote-footer">Me</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
