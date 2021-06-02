import { Form, Col, Button } from 'react-bootstrap';
import * as yup from 'yup';
import { Formik } from 'formik';

const schema = yup.object().shape({
  CLIID: yup
    .string()
    .matches(/^[0-9]{0,10}$/i, 'Es un campo numerico de hasta 10 digitos')
    .required('Campo requerido'),
  CLINOMBRES: yup.string().required('Campo requerido'),
  CLIAPELLIDOS: yup.string().required('Campo requerido'),
  CLICORREO: yup.string().email('Correo inválido').required('Campo requerido'),
  CLICELULAR: yup
    .string()
    .matches(/^09[8|9]{1}[0-9]{7}$/i, 'Formato incorrecto (ej: 0991234567)')
    .required('Campo requerido'),
  CLIDIRECCION: yup.string().optional(),
});

const CrearCliente = ({ handleSubmit }) => {
  return (
    <div className='p-4'>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        initialValues={{}}>
        {({ handleSubmit, handleChange, errors }) => (
          <Form onSubmit={handleSubmit} onChange={handleChange}>
            <Form.Row>
              <Form.Group as={Col} sm='4'>
                <Form.Label>Id:</Form.Label>
                <Form.Control
                  name='CLIID'
                  type='text'
                  placeholder='id'
                  isInvalid={errors.CLIID}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.CLIID}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} sm='4'>
                <Form.Label>Nombres:</Form.Label>
                <Form.Control
                  name='CLINOMBRES'
                  type='text'
                  placeholder='Nombres'
                  isInvalid={errors.CLINOMBRES}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.CLINOMBRES}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} sm='4'>
                <Form.Label>Apellidos:</Form.Label>
                <Form.Control
                  name='CLIAPELLIDOS'
                  type='text'
                  placeholder='Apellidos'
                  isInvalid={errors.CLIAPELLIDOS}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.CLIAPELLIDOS}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} sm='4'>
                <Form.Label>Dirección:</Form.Label>
                <Form.Control
                  name='CLIDIRECCION'
                  type='text'
                  placeholder='Dirección'
                  isInvalid={errors.CLIDIRECCION}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.CLIDIRECCION}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} sm='4'>
                <Form.Label>Número Celular:</Form.Label>
                <Form.Control
                  name='CLICELULAR'
                  type='text'
                  placeholder='número'
                  isInvalid={errors.CLICELULAR}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.CLICELULAR}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} sm='4'>
                <Form.Label>Correo:</Form.Label>
                <Form.Control
                  name='CLICORREO'
                  type='text'
                  placeholder='Correo'
                  isInvalid={errors.CLICORREO}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.CLICORREO}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Button className='d-block mt-3' type='submit' size='lg'>
              Crear Cliente
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CrearCliente;
