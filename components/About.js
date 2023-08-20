import React from 'react';
import { Container, Row, Col } from "reactstrap";


const About = () => {

  return (
    <section className="section " id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">About <span className="text-warning">Us</span></h3>
              <div className='container'>
              <p className='text-muted'>We are thrilled to announce that Pandit Deendayal Energy University is hosting a Youth Parliament event . This remarkable event is being conducted in conjunction with the esteemed G20 and Y20 summits, and we extend a warm invitation to all colleges in the vicinity to participate.</p>
<p className='text-muted'>The Youth Parliament aims to empower young minds with the knowledge and tools needed to tackle some of the world's most pressing issues. Our agendas for this event will revolve around the United Nations' Sustainable Development Goals (SDGs), reflecting our commitment to creating a more sustainable and equitable future. </p>
<p className='text-muted'>Join us in this exciting endeavor as we engage in meaningful discussions, exchange innovative ideas, and work collectively towards a better world. Stay tuned for more updates on this transformative event, as we look forward to inspiring and shaping the leaders of tomorrow.</p>
          </div>
            </div>
          </Col>
        </Row>

      </Container>
    </section>
  );
}

export default About;