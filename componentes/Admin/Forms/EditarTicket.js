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
const EditarTicket = ({
  ticket,
  handleSubmit,
  handleSearchCliente,
  clientesResults,
  handleChangeClientesQuery,
  handleSearchClienteKey,
  empleados,
  categorias,
}) => {
  const [clienteSelect, setclienteSelect] = useState('');
  const [clienteid, setclienteid] = useState('');
  return (
    <div className='p-4'>
      <h4 className='mb-3'>Editar Ticket</h4>
      <Formik
        validationSchema={schema}
        // onSubmit={(values, actions) => {
        //   handleSubmit({
        //     TIKID: values.TIKID,
        //     CLIID: clienteid,
        //     EMPID: values.EMPID,
        //     CATID: values.CATID,
        //     TIKTITULO: values.TIKTITULO,
        //     TIKDESCRIPCION: values.TIKDESCRIPCION,
        //     TIKFECHA: values.TIKFECHA,
        //     TIKESTADO: values.TIKESTADO,
        //   });
        // }}
        initialValues={{ EMPID: empleados.empleados[0].EMPID }}>
        {({ handleSubmit, handleChange, errors }) => (
          <Form
            onSubmit={handleSubmit}
            onChange={handleChange}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault();
              }
            }}>
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
                <Form.Label>Buscar Cliente:</Form.Label>
                <div className='d-flex'>
                  <Form.Control
                    name='cliente_buscar'
                    type='text'
                    placeholder='Cédula'
                    value={values.CLIID}
                    onChange={handleChangeClientesQuery}
                    onKeyDown={handleSearchClienteKey}
                  />
                  <Button onClick={handleSearchCliente}>
                    <PageviewIcon></PageviewIcon>
                  </Button>
                </div>
                {/* <Form.Control
                  name='CLIID'
                  type='text'
                  placeholder='Cliente ID'
                  isInvalid={errors.CLIID}
                /> */}
                <ListGroup variant='flush'>
                  {clientesResults.length > 0 ? (
                    clientesResults.map((cliente) => (
                      <StyledListItem
                        key={cliente.CLIID}
                        onClick={() => {
                          setclienteid(cliente.CLIID);
                          setclienteSelect(
                            `${cliente.CLINOMBRES.toString().trim()} ${cliente.CLIAPELLIDOS.toString().trim()}`
                          );
                        }}>
                        {`${cliente.CLINOMBRES} ${cliente.CLIAPELLIDOS}`}
                      </StyledListItem>
                    ))
                  ) : (
                    <ListGroup.Item>No hay resultados</ListGroup.Item>
                  )}
                </ListGroup>
              </Col>
              <Col sm='4'>
                <Form.Label>Cliente:</Form.Label>
                <Form.Control
                  name='cliente_select'
                  type='text'
                  disabled
                  placeholder=''
                  value={clienteSelect}
                />
              </Col>
            </Row>
            <Row>
              <Col sm='4'>
                <Form.Group sm='6' controlId='medico-select'>
                  <Form.Label>Empleados:</Form.Label>
                  <Form.Control as='select' name='EMPID'>
                    {empleados.empleados.map((empleado) => (
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
                {/* <Form.Group sm='6' controlId='categoria-select'>
                  <Form.Label>Categorías:</Form.Label>
                  <Form.Control as='select' name='CATID'>
                    {categorias.categorias.map((categoria) => (
                      <option
                        key={categoria.CATID}
                        value={
                          categoria.CATID
                        }>{`${categoria.CATID.toString().trim()} ${categoria.CATDESCRIPCION.toString().trim()}`}</option>
                    ))}
                  </Form.Control>
                </Form.Group> */}
                <Form.Label>Categoria ID:</Form.Label>
                <Form.Control
                  name='CATID'
                  type='text'
                  placeholder='Codigo Categoria'
                  isInvalid={errors.CATID}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.CATID}
                </Form.Control.Feedback>
              </Col>
              <Col sm='4'>
                <Form.Label>Titulo:</Form.Label>
                <Form.Control
                  name='TIKTITULO'
                  type='text'
                  onChange={handleChange}
                  value={values.TIKTITULO}
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
                  onChange={handleChange}
                  value={values.TIKDESCRIPCION}
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
                  onChange={handleChange}
                  value={values.TIKFECHA}
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

export default EditarTicket;
