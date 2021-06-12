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
      desc: 'Microsoft Visual Studio es un entorno de desarrollo integrado (IDE) para Windows y macOS. Es compatible con múltiples lenguajes de programación, al igual que entornos de desarrollo web, como ASP.NET MVC, Django, etc.',
    },
    {
      title: '. NET Framework',
      desc: 'Microsoft .Net Framework es un componente software que da soluciones de código que son utilizadas por los programas (a través de las librerías dll), y que gestiona programas escritos para este Framework.',
    },
    {
      title: 'Next Js',
      desc: 'Next.js es un pequeño framework construido sobre React que nos ayuda a construir aplicaciones de una forma más rápida dejando de un lado la parte de la configuración inicial ya que toda esa configuración viene por defecto y permite hacer deploy de nuestra aplicación de manera rápida.',
    },
    {
      title: 'Node Js',
      desc: 'Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript, asíncrono, basado en el motor V8 de Google',
    },
    {
      title: 'Otros',
      desc: 'Versionamiento: Git, GitHub Editor: Visual Studio Code, Gráficos: unDraw Ilustraciones, Estilos: Reactstrap, React-Bootstrap',
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
