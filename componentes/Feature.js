import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const FeatureBox = (props) => {
  return (
    <>
      {props.features.map((feature, key) =>
        feature.id % 2 !== 0 ? (
          <Row
            key={key}
            className={
              feature.id === 1
                ? 'align-items-center'
                : 'align-items-center mt-5'
            }>
            <Col md={5}>
              <div>
                <img
                  src={feature.img}
                  alt=''
                  className='img-fluid d-block mx-auto'
                />
              </div>
            </Col>
            <Col md={{ size: 6, offset: 1 }}>
              <div className='mt-5 mt-sm-0 mb-4'>
                <div className='my-4'>
                  <i className={feature.icon}></i>
                </div>
                <h5 className='text-dark font-weight-normal mb-3 pt-3'>
                  {feature.title}
                </h5>
                <p className='text-muted mb-3 f-15'>{feature.desc}</p>
              </div>
            </Col>
          </Row>
        ) : (
          <Row key={key} className='align-items-center mt-5'>
            <Col md={6}>
              <div className='mb-4'>
                <div className='my-4'>
                  <i className='mdi mdi-account-group'></i>
                </div>
                <h5 className='text-dark font-weight-normal mb-3 pt-3'>
                  {feature.title}
                </h5>
                <p className='text-muted mb-3 f-15'>{feature.desc}</p>
              </div>
            </Col>
            <Col md={{ size: 5, offset: 1 }} className='mt-5 mt-sm-0'>
              <div>
                <img
                  src={feature.img}
                  alt=''
                  className='img-fluid d-block mx-auto'
                />
              </div>
            </Col>
          </Row>
        )
      )}
    </>
  );
};
const Feature = () => {
  const features = [
    {
      id: 1,
      img: './images/business-profit.png',
      title: 'Estado de tus Tickets',
      desc: 'Consulta el estado de los tickets asignados para ti',
      link: '/',
    },
    {
      id: 2,
      img: './images/knowledge-thumb.png',
      title: 'Administración de Clientes ',
      desc: 'Ticket PA permite la administración de clientes',
      link: '/',
    },
    {
      id: 3,
      img: './images/Group Members.png',
      title: 'Administración de Empleados',
      desc: 'Ticket PA permite la administración de empleados.',
      link: '/',
    },
  ];
  return (
    <section className='section' id='feature'>
      <Container>
        <Row className='justify-content-center'>
          <Col lg={6} md={8}>
            <div className='title text-center mb-5'>
              <h3 className='font-weight-normal text-dark'>
                <span className='text-warning'>Características</span>
              </h3>
              <p className='text-muted'>Features del Sistema Ticket PA</p>
            </div>
          </Col>
        </Row>
        <FeatureBox features={features} />
      </Container>
    </section>
  );
};
export default Feature;
