import React from 'react';
import { Container, Row, Col } from "reactstrap";

const Service2 = () => {
  const services = [
    {id : 1,  title : "Climate Action :", desc : " We believe that addressing climate change is not just a global responsibility but a moral imperative. Join us as we engage in dynamic discussions, brainstorm innovative solutions, and collectively commit to sustainable practices. Together, we can be the driving force behind positive environmental change, safeguarding our planet for generations to come.", link : "/"},
    {id : 2,  title : "Affordable and Clean Energy", desc : "Exploring next agenda, Affordable and Clean Energy. Clean energy access is a shared responsibility. Let's dive into discussions on making it accessible for everyone, fostering innovation, and creating a greener, more affordable future. Your perspective shapes our sustainable world.", link : "/"},
    {id : 3,  title : "Sustainable Cities and Community", desc : "Our next agenda focuses on Sustainable Cities and Communities. We're passionate about creating urban spaces that are livable, inclusive, and environmentally responsible. Join the conversation as we explore ways to build a better future, one community at a time. Together, we can transform our cities into thriving, sustainable hubs.", link : "/"},
    {id : 4,  title : "Green Computing ", desc : " Explore the future of technology with our Green Computing agenda. Let's discuss eco-friendly IT solutions and sustainable digital practices. Join us in shaping a more environmentally conscious tech world.", link : "/"},
  ]
  
  return (
    <section className="section" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">Agendas</span></h3>
              <p className="text-muted">Join us in our mission to drive positive change for our planet's future. Together, we tackle climate change, innovate sustainable solutions, and commit to a greener world. Dive into topics like clean energy, urban sustainability, and eco-friendly tech. Your perspective shapes a prosperous, sustainable future for all.</p>
            </div>
          </Col>
        </Row>
        <Row>
          {
            services.map((service, key) => (
              <Col key={key} lg={6} className="mb-4">
                <div>
                  <h5 className="text-dark font-weight-normal pt-1 mb-3">{service.title}</h5>
                  <p className="text-muted mb-3">{service.desc}</p>
                </div>
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  );
}

export default Service2;
