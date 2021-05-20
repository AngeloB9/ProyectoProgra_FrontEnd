import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Service = () => {
  const services = [
    {
      title: 'Diseño Gráfico',
      desc: '"Todo está diseñado. Pocas cosas están bien diseñadas". Plasmamos tus ideas',
    },
    {
      title: 'Impresión de Lonas Industriales',
      desc: 'Lonas full color, todo tamaño. ',
    },
    {
      title: 'Estampados de Camisetas',
      desc: '6 tipos de diferentes de telas, 4 técnicas distintas de estampados, aplicamos la que mejor se ajuste a tus necesidades.',
    },
    {
      title: 'Estampados de Tasas',
      desc: 'Ideal para recuerdos, regalos, todo tipo de Diseño.',
    },
    {
      title: 'Decoración de Interiores',
      desc: 'Decoramos tu casa, tu negocio con los mejores diseños adecuados para ti, trabajamos con vinil full color.',
    },
    {
      title: 'Decoración Vehicular',
      desc: 'Todo tipo de decoración, calcomanias para todo tipo de vehículo, full color.',
    },
  ];

  return (
    <section className='section' id='service'>
      <Container>
        <Row className='justify-content-center'>
          <Col lg={6} md={8}>
            <div className='title text-center mb-5'>
              <h3 className='font-weight-normal text-dark'>
                <span className='text-warning'>Servicios</span>
              </h3>
              <p className='text-muted'>
                Toda la información recopilada aquí es de caracter académico, a
                fin de construir un prototipo útil para una empresa dedicada a
                dar soluciones gráficas
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
