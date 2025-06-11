import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import "./Programs.css";
import programs from "./programs.json";

const Programs = () => {
  return (
    <Container>
      <h1 className="text-center text-success fs-1">Programs</h1>
      <Row className="mt-4">
        {programs.map((program) => (
          <Col key={program.id} xs={12} md={6} lg={4} className="mb-4">
            <Card className="h-100 shadow-sm position-relative">
              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  zIndex: 2,
                }}
              >
                <span className="badge program-badge bg-success">
                  {program.button}
                </span>
              </div>
              <Card.Img
                variant="top"
                src={`/img/programs/${program.img}`}
                alt={program.title}
                style={{
                  objectFit: "cover",
                  height: "250px",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                }}
              />
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <Card.Title className="fw-semibold fs-5 mb-0">
                    {program.title}
                  </Card.Title>
                  <Button
                    variant="success"
                    size="sm"
                    className="ms-2 px-3 py-1"
                  >
                    See More
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Programs;
