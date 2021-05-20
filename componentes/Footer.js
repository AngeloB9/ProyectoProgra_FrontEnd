import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Footer = () => {
  const links = [
    {
      id: 1,
      title: 'Feature',
      child: [
        { title: 'LOREM IPSUM', link: '/' },
        { title: 'LOREM IPSUM', link: '/' },
        { title: 'LOREM IPSUM', link: '/' },
        { title: 'LOREM IPSUM', link: '/' },
      ],
    },
    {
      id: 2,
      title: 'About Us',
      child: [
        { title: 'Contact Us', link: '/' },
        { title: 'FAQs', link: '/' },
        { title: 'Privacy Policy', link: '/' },
      ],
    },
  ];

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg={12}>
            <div className='mb-4'>
              <p className='text-muted mt-4 mb-2'>abenavidez.dev@gmail.com</p>
              <h6 className='text-muted font-weight-normal'>+593 985386708</h6>
            </div>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col md={12}>
            <div className='text-center text-muted'>
              <p className='mb-0 f-15'>
                2021 © Tickets PA. Design with Love 🤍 by Angelo Benavidez
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
