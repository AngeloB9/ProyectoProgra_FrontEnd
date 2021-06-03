import { Form, Col, Button } from 'react-bootstrap';
import * as yup from 'yup';
import { Formik } from 'formik';

const schema = yup.object().shape({
  TIKID: yup.string().required('Campo requerido'),
  EMPID: yup
    .string()
    .matches(/^[0-9]{0,10}$/i, 'Es un campo numerico de hasta 10 digitos')
    .required('Campo requerido'),
  CLIID: yup
    .string()
    .matches(/^[0-9]{0,10}$/i, 'Es un campo numerico de hasta 10 digitos')
    .required('Campo requerido'),
  CATID: yup
    .string()
    .matches(
      /^[A-Z0-9]{0,8}$/i,
      'Es un campo alfanumerico de hasta 8 caracteres'
    )
    .required('Campo requerido'),
  TIKTITULO: yup.string().required('Campo requerido'),
  TIKDESCRIPCION: yup.string().required('Campo requerido'),
  TIKESTADO: yup.string(),
});

const CrearEmpleado = ({ handleSubmit }) => {
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
                  name='TIKID'
                  type='text'
                  placeholder='id'
                  isInvalid={errors.TIKID}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.TIKID}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} sm='4'>
                <Form.Label>Cliente:</Form.Label>
                <Form.Control
                  name='CLIID'
                  type='text'
                  placeholder='Cliente ID'
                  isInvalid={errors.CLIID}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.CLIID}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} sm='4'>
                <Form.Label>Empleado:</Form.Label>
                <Form.Control
                  name='EMPID'
                  type='text'
                  placeholder='Empleado ID'
                  isInvalid={errors.EMPID}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.EMPID}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} sm='4'>
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
              </Form.Group>
              <Form.Group as={Col} sm='4'>
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
              </Form.Group>
              <Form.Group as={Col} sm='4'>
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
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} sm='4'>
                <Form.Label>Fecha:</Form.Label>
                <Form.Control name='TIKFECHA' type='date' required />
              </Form.Group>
              <Form.Group as={Col} sm='4'>
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
              </Form.Group>
            </Form.Row>

            <Button className='d-block mt-3' type='submit' size='lg'>
              Crear Ticket
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CrearEmpleado;
