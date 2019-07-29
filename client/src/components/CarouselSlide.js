import React from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";

export default function CarouselSlide(props) {
  return (
    <Jumbotron
      className="bg-light text-dark text-center mb-0 d-flex align-items-center justify-content-center flex-column"
      style={{ minHeight: 450 }}
    >
      <Container>
        <Row>
          <Col
            md={3}
            className="d-flex align-items-center justify-content-center"
          >
            <i
              className={`devicon-${
                props.icon
              } text-white rounded-circle bg-primary p-4 mb-3 text-center`}
              style={{
                fontSize: "9rem"
              }}
            />
          </Col>
          <Col
            md={9}
            className="d-flex align-items-center justify-content-center flex-column"
          >
            <h2 className="display-4 font-weight-bold pt-0">{props.title}</h2>
            <p className="text-center m-0 pb-0">...{props.description}</p>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
