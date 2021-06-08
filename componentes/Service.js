import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Service = () => {
  const services = [
    {
      title: 'SQL Server Express',
      desc: 'SQL Server 2019 Express es una edición gratuita de SQL Server ideal para el desarrollo y la producción de aplicaciones de escritorio, aplicaciones web y pequeñas aplicaciones de servidor.',
    },
    {
      title: 'Visual Studio 2019',
      desc: 'IDE de desarrollo utilizado para el Framework .NET Framework ',
    },
    {
      title: '. NET Framework',
      desc: 'Llenar',
    },
    {
      title: 'Next Js',
      desc: 'Llenar',
    },
    {
      title: 'VS Code',
      desc: 'Llenar',
    },
    {
      title: 'Otros',
      desc: 'Llenar',
    },
  ];

  return (
    <section className='section' id='service'>
      <Container>
        <Row className='justify-content-center'>
          <Col lg={6} md={8}>
            <div className='title text-center mb-5'>
              <h3 className='font-weight-normal text-dark'>
                <span className='text-warning'>
                  Herramientas y Tecnologías Usadas
                </span>
              </h3>
              <p className='text-muted'>
                Toda la información recopilada aquí es de caracter académico, se
                detallan de manera resumida las herramientas usadas para generar
                este proyecto
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          {services.map((service, key) => (
            <Col key={key} lg={4} md={6}>
              <div>
                <div className='mb-5'>
                  <i className={service.icon}></i>
                </div>
                <h5 className='text-dark font-weight-normal pt-1 mb-4'>
                  {service.title}
                </h5>
                <p className='text-muted mb-4'>{service.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default Service;
