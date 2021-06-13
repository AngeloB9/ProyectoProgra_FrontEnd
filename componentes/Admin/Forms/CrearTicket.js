import { Form, Col, Button, Row, ListGroup } from 'react-bootstrap';
import * as yup from 'yup';
import { Formik } from 'formik';
import { useState } from 'react';
import styled from 'styled-components';
import PageviewIcon from '@material-ui/icons/Pageview';

const StyledListItem = styled(ListGroup.Item)`
  cursor: pointer;
  &:hover {
    background: #fbf6f3;
  }
`;
const schema = yup.object().shape({
  TIKID: yup.number().required('Campo requerido'),
  TIKTITULO: yup.string().required('Campo requerido'),
  TIKDESCRIPCION: yup.string().required('Campo requerido'),
  TIKESTADO: yup.string(),
});

const CrearTicket = ({ handleSubmit, empleados, categorias, clientes }) => {
  return (
    <div className='p-4'>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        initialValues={{
          CLIID: clientes[0].CLIID,
          EMPID: empleados[0].EMPID,
          CATID: categorias[0].CATID,
        }}>
        {({ handleSubmit, handleChange, errors }) => (
          <Form onSubmit={handleSubmit} onChange={handleChange}>
            <Row>
              <Col sm='4'>
                <Form.Label>Id:</Form.Label>
                <Form.Control
                  name='TIKID'
                  type='text'
                  placeholder='id'
                  isInvalid={errors.TIKID}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.TIKID}
                </Form.Control.Feedback>
              </Col>

              <Col sm='4'>
                <Form.Group sm='6' controlId='medico-select'>
                  <Form.Label>Clientes:</Form.Label>
                  <Form.Control as='select' name='CLIID'>
                    {clientes.map((cliente) => (
                      <option
                        key={cliente.CLIID}
                        value={
                          cliente.CLIID
                        }>{`${cliente.CLINOMBRES.toString().trim()} ${cliente.CLIAPELLIDOS.toString().trim()}`}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm='4'>
                <Form.Group sm='6' controlId='medico-select'>
                  <Form.Label>Empleados:</Form.Label>
                  <Form.Control as='select' name='EMPID'>
                    {empleados.map((empleado) => (
                      <option
                        key={empleado.EMPID}
                        value={
                          empleado.EMPID
                        }>{`${empleado.EMPNOMBRES.toString().trim()} ${empleado.EMPAPELLIDOS.toString().trim()}`}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>

              <Col sm='4'>
                <Form.Group sm='6' controlId='categoria-select'>
                  <Form.Label>Categorías:</Form.Label>
                  <Form.Control as='select' name='CATID'>
                    {categorias.map((categoria) => (
                      <option
                        key={categoria.CATID}
                        value={
                          categoria.CATID
                        }>{`${categoria.CATID.toString().trim()} ${categoria.CATDESCRIPCION.toString().trim()}`}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col sm='4'>
                <Form.Label>Titulo:</Form.Label>
                <Form.Control
                  name='TIKTITULO'
                  type='text'
                  placeholder='Titulo del Ticket'
                  isInvalid={errors.TIKTITULO}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.TIKTITULO}
                </Form.Control.Feedback>
              </Col>
            </Row>
            <Row>
              <Col sm='4'>
                <Form.Label>Descripcion:</Form.Label>
                <Form.Control
                  name='TIKDESCRIPCION'
                  type='text'
                  placeholder='Descripción de la orden'
                  isInvalid={errors.TIKDESCRIPCION}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.TIKDESCRIPCION}
                </Form.Control.Feedback>
              </Col>
              <Col sm='4'>
                <Form.Label>Fecha:</Form.Label>
                <Form.Control name='TIKFECHA' type='date' required />
              </Col>
              <Col sm='4'>
                <Form.Label>Estado:</Form.Label>
                <Form.Control
                  name='TIKESTADO'
                  type='text'
                  placeholder='Estado del Ticket'
                  isInvalid={errors.TIKESTADO}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.TIKESTADO}
                </Form.Control.Feedback>
              </Col>
            </Row>

            <Button
              className='d-block mt-3'
              type='submit'
              size='lg'
              style={{ margin: '0 auto' }}>
              Crear Tickets
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CrearTicket;
