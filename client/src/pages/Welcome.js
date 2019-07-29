import React from "react";
import { Container } from "reactstrap";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Layout from "../components/Layout";
import CarouselSlide from "../components/CarouselSlide";

export default function Welcome() {
  return (
    <Layout>
      <div>
        <Container>
          <h1 className="text-center pb-3">
            Welcome to the <span className="font-weight-bold">MERN</span> stack!
          </h1>
        </Container>

        <CarouselProvider
          isPlaying
          naturalSlideHeight={400}
          naturalSlideWidth={100}
          totalSlides={4}
          interval={7500}
        >
          <Slider
            style={{
              maxHeight: 450
            }}
          >
            <Slide index={0}>
              <CarouselSlide
                icon="react-original"
                title="React"
                description="is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies."
              />
            </Slide>
            <Slide index={1}>
              <CarouselSlide
                icon="express-original"
                title="Express"
                description="is a web application framework for Node.js. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js."
              />
            </Slide>
            <Slide index={2}>
              <CarouselSlide
                icon="mongodb-plain"
                title="MongoDB"
                description="is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schema."
              />
            </Slide>
            <Slide index={3}>
              <CarouselSlide
                icon="nodejs-plain"
                title="Node.js"
                description="is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser."
              />
            </Slide>
          </Slider>
        </CarouselProvider>
      </div>
    </Layout>
  );
}
