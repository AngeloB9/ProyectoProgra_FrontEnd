import AdminLayout from '@/componentes/Layouts/AdminLayout';
import axios from 'axios';
import useSWR from 'swr';
import CircularProgress from '@material-ui/core/CircularProgress';
import ClientesTable from '@/componentes/Admin/Tables/Clientes';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import ModalEliminar from '@/componentes/Modales/ModalEliminar';

const fetcher = (url) => axios.get(url).then((res) => res.data);

const index = () => {
  const { data, error: errorfetch } = useSWR(
    `${process.env.NEXT_PUBLIC_APIURL}/cliente`,
    fetcher
  );
  const [cliente, setcliente] = useState({
    firstName: '',
    lastName: '',
  });
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  const router = useRouter();
  const [deleteModal, setdeleteModal] = useState(false); //variable para el modal de eliminación
  //Controla cuando aparece el modal de eliminación
  const handleModalDelete = (cliente_delete) => {
    console.log(cliente_delete);
    setcliente(cliente_delete);
    setdeleteModal(true);
  };
  //Controla la petición de eliminación de un paciente
  const handleDelete = async () => {
    setloading(true);
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_APIURL}/cliente/${cliente.id}`
      );

      setloading(false);
      setdeleteModal(false);
      router.reload();
    } catch (error_peticion) {
      seterror(error_peticion);
      setloading(false);
    }
  };
  if (!data)
    return (
      <AdminLayout>
        <div
          className='d-flex align-items-center justify-content-center w-100'
          style={{ height: '100vh' }}>
          <CircularProgress />
        </div>
      </AdminLayout>
    );

  return (
    <AdminLayout>
      <Link href='/admin/cliente'>
        <Button
          variant='contained'
          color='primary'
          className='mb-4'
          size='large'>
          Crear Cliente
        </Button>
      </Link>
      {/* <ClientesTable data={data} /> */}
      <ClientesTable handleModalDelete={handleModalDelete} data={data} />
      {/*----------Modal para eliminar------- */}
      <ModalEliminar
        show={deleteModal}
        handleClose={() => setdeleteModal(false)}
        titulo='Eliminar Cliente'
        mensaje={`Esta seguro que desea eliminar el cliente ${cliente.firstName} ${cliente.lastName}`}
        handleDelete={handleDelete}
      />
    </AdminLayout>
  );
};

export default index;
