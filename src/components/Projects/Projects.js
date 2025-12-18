import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

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
              isBlog={false}
              title="Spotify Clone"
              description="Music streaming application that allows users to browse, search, and play songs with playlist management functionality. Built using Java, MySQL, and JDBC, the project focuses on core backend logic, database connectivity, and clean console-based interaction."
              ghLink="https://github.com/govindpawar1001/Core-Java-Projects/tree/main/Spotify-Application"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Vehicle Rental System"
              description="A web-based application designed to manage vehicle rentals efficiently. Users can view available vehicles, book rentals, and manage reservations. Admin can add, update, and monitor vehicles and bookings. Built using Java, JSP, Servlets, and MySQL."
              ghLink="https://github.com/govindpawar1001/Core-Java-Projects/tree/main/Vehicle%20Rental%20System"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;