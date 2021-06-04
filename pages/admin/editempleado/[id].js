import { useState, useMemo, useEffect } from 'react';
import { LinearProgress } from '@material-ui/core';
import { useRouter } from 'next/router';
import axios from 'axios';
//Componentes
import EditarEmpleado from 'componentes/Admin/Forms/EditarEmpleado';
import AdminLayout from 'componentes/Layouts/AdminLayout';
import ModalSuccess from '@/componentes/Modales/ModalSuccess';
import ModalError from 'componentes/Modales/ModalError';

export const getServerSideProps = async ({ params }) => {
  const { data: empleado } = await axios.get(
    `${process.env.NEXT_PUBLIC_APIURL}/empleado/${params.id}`
  );
  console.log(params);
  //Retira los espacios innecesarios que traen los datos
  // Object.keys(empleado).forEach(function (key) {
  //   empleado[key] = empleado[key] == null ? '' : String(empleado[key]).trim();
  // });
  return {
    props: {
      empleado,
    },
  };
};

const index = ({ empleado }) => {
  //-----Variables de estado de la página-----//
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null); //si existe un error se setea la variable
  const [modalSuccess, setmodalSuccess] = useState(false); //modal de éxito
  const [modalError, setmodalError] = useState(false); //modal de error
  const router = useRouter();

  const handleSubmit = async (values) => {
    setloading(true);
    try {
      const response = await axios.put(`/empleado/${router.query.id}`, values);
      if (response.status === 200) {
        setloading(false);
        setmodalSuccess(true);
      }
    } catch (error_peticion) {
      seterror(error_peticion);
      setloading(false);
      setmodalError(true);
    }
  };

  //   if (isError) return <ErrorPage code={isError.response.status} />;

  return (
    <AdminLayout>
      {loading && <LinearProgress />}
      <EditarEmpleado handleSubmit={handleSubmit} empleado={empleado} />
      {/*----------Modal de petición exitosa------- */}
      <ModalSuccess
        show={modalSuccess}
        handleClose={() => setmodalSuccess(false)}
        tituloMensaje='Edición Exitosa'
        mensaje='El Empleado se ha modificado satisfactoriamente!'
        redireccion='/admin/empleados'
      />
      {/*----------Modal de error en petición------- */}
      <ModalError
        show={modalError}
        handleClose={() => setmodalError(false)}
        tituloMensaje='Error'
        mensaje='Datos Incorrectos!'
      />
    </AdminLayout>
  );
};

export default index;
