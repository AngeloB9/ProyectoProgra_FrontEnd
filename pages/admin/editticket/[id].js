import { useState, useMemo, useEffect } from 'react';
import { LinearProgress } from '@material-ui/core';
import { useRouter } from 'next/router';
import axios from 'axios';
//Componentes
import EditarTicket from 'componentes/Admin/Forms/EditarTicket';
import AdminLayout from 'componentes/Layouts/AdminLayout';
import ModalSuccess from '@/componentes/Modales/ModalSuccess';
import ModalError from 'componentes/Modales/ModalError';

export const getServerSideProps = async ({}) => {
  const { data: empleados } = await axios.get(
    `${process.env.NEXT_PUBLIC_APIURL}/empleado`
  );
  const { data: categorias } = await axios.get(
    `${process.env.NEXT_PUBLIC_APIURL}/categoria`
  );
  //console.log(params);

  return {
    props: {
      empleados,
      categorias,
    },
  };
};
const index = (empleados, categorias) => {
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  const [modalSuccess, setmodalSuccess] = useState(false); //modal de éxito
  const [modalError, setmodalError] = useState(false); //modal de error
  const [clientesQuery, setclientesQuerys] = useState('');
  const [clientesResults, setclientesResults] = useState([]);
  const router = useRouter();
  //const { data: cliente } = await axios.get(`cliente`);
  useMemo(() => {
    if (clientesQuery.trim().length == 0) setclientesResults([]);
  }, [clientesQuery]);

  const handleSubmit = async (values) => {
    setloading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_APIURL}/ticket`,
        values
      );

      setloading(false);
      router.push('/admin/tickets');
    } catch (error_peticion) {
      seterror(error_peticion);
      setloading(false);
    }
  };

  const handleSearchCliente = async () => {
    if (clientesQuery.trim()) {
      setloading(true);
      try {
        const { data: clientes } = await axios.get(
          `${process.env.NEXT_PUBLIC_APIURL}/cliente/${clientesQuery}`
        );
        setclientesResults([clientes]);

        setloading(false);
      } catch (error) {
        seterror(error);
        setloading(false);
      }
    } else {
      setclientesResults([]);
    }
  };

  //Busca el cliente por Enter
  const handleSearchClienteKey = async (event) => {
    if (event.key === 'Enter') {
      if (clientesQuery.trim()) {
        setloading(true);
        try {
          const { data: clientes } = await axios.get(
            `${process.env.NEXT_PUBLIC_APIURL}/cliente/${clientesQuery}`
          );
          setclientesResults([clientes]);

          setloading(false);
        } catch (error) {
          seterror(error);
          setloading(false);
        }
      } else {
        setclientesResults([]);
      }
    }
  };

  return (
    <AdminLayout>
      {loading && <LinearProgress />}
      <EditarTicket
        handleSubmit={handleSubmit}
        handleSearchCliente={handleSearchCliente}
        handleSearchClienteKey={handleSearchClienteKey}
        handleChangeClientesQuery={(event) => {
          setclientesQuerys(String(event.target.value));
        }}
        clientesResults={clientesResults}
        empleados={empleados}
        categorias={categorias}
      />
      {/*----------Modal de petición exitosa------- */}
      <ModalSuccess
        show={modalSuccess}
        handleClose={() => setmodalSuccess(false)}
        tituloMensaje='Edición Exitosa'
        mensaje='El Empleado se ha modificado satisfactoriamente!'
        redireccion='/admin/tickets'
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
