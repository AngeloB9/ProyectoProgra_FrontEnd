import { Form, Col, Button } from 'react-bootstrap';
import * as yup from 'yup';
import { Formik } from 'formik';

const schema = yup.object().shape({
  EMPID: yup
    .string()
    .matches(/^[0-9]{0,10}$/i, 'Es un campo numerico de hasta 10 digitos')
    .required('Campo requerido'),
  EMPNOMBRES: yup.string().required('Campo requerido'),
  EMPAPELLIDOS: yup.string().required('Campo requerido'),
  EMPCORREO: yup.string().email('Correo inválido').required('Campo requerido'),
  EMPCELULAR: yup
    .string()
    .matches(/^09[8|9]{1}[0-9]{7}$/i, 'Formato incorrecto (ej: 0991234567)')
    .required('Campo requerido'),
  EMPDIRECCION: yup.string().optional(),
});

const CrearEmpleado = ({ handleSubmit }) => {
  return (
    <div>
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
                  name='EMPID'
                  type='text'
                  placeholder='id'
                  isInvalid={errors.EMPID}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.EMPID}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} sm='4'>
                <Form.Label>Nombres:</Form.Label>
                <Form.Control
                  name='EMPNOMBRES'
                  type='text'
                  placeholder='Nombres'
                  isInvalid={errors.EMPNOMBRES}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.EMPNOMBRES}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} sm='4'>
                <Form.Label>Apellidos:</Form.Label>
                <Form.Control
                  name='EMPAPELLIDOS'
                  type='text'
                  placeholder='Apellidos'
                  isInvalid={errors.EMPAPELLIDOS}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.EMPAPELLIDOS}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} sm='4'>
                <Form.Label>Fecha Nacimiento:</Form.Label>
                <Form.Control name='EMPFECHANACIMIENTO' type='date' required />
              </Form.Group>

              <Form.Group as={Col} sm='4'>
                <Form.Label>Número Celular:</Form.Label>
                <Form.Control
                  name='EMPCELULAR'
                  type='text'
                  placeholder='número'
                  isInvalid={errors.EMPCELULAR}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.EMPCELULAR}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} sm='4'>
                <Form.Label>Correo:</Form.Label>
                <Form.Control
                  name='EMPCORREO'
                  type='text'
                  placeholder='Correo'
                  isInvalid={errors.EMPCORREO}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.EMPCORREO}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} sm='4'>
                <Form.Label>Dirección:</Form.Label>
                <Form.Control
                  name='EMPDIRECCION'
                  type='text'
                  placeholder='Dirección'
                  isInvalid={errors.EMPDIRECCION}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.EMPDIRECCION}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Button className='d-block mt-3' type='submit' size='lg'>
              Crear Empleado
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CrearEmpleado;
