import React from "react";
import Layout from "../components/Layout";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";

import developerGraphic from "../static/svg/dev.svg";

export default function Second_page() {
  return (
    <div>
      <Layout>
        <Container>
          <Row className="text-md-center">
            <Col>
              <Fade>
                <h1 className="display-4 font-weight-bold">Sample page</h1>
              </Fade>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <Col md={7}>
              <div style={{ overflow: "hidden" }}>
                <Fade left>
                  <p className="lead">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Similique cupiditate accusamus et facere culpa excepturi.
                  </p>
                  <p className="text-sm-justify">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Debitis accusantium veritatis velit corporis modi quo aut
                    dolor mollitia excepturi odit natus facere necessitatibus
                    fugit laborum placeat illum dolores consequatur similique
                    nemo, sit a at! Fugit, soluta eligendi. Quod iste alias eius
                    minima aliquid, quam, rerum voluptas in, tempore sed soluta?
                  </p>
                </Fade>
              </div>
            </Col>
            <Col md={5}>
              <div style={{ overflow: "hidden" }}>
                <Fade right>
                  <img
                    src={developerGraphic}
                    alt="developer at computer illustration"
                    style={{ width: "100%" }}
                  />
                </Fade>
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
}
