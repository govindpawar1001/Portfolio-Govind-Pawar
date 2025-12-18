import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Govind Pawar</span>{" "}
            from <span className="purple">Nashik</span>.
            
           
           I’m a Computer Engineering graduate with strong interest and hands-on experience in Java, SQL, and Web Technologies including HTML, CSS, JavaScript, JSP, and Servlets. I enjoy building practical applications and learning how software solves real-world problems.{" "}
           
            <br />
            
          </p>

          

        
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
