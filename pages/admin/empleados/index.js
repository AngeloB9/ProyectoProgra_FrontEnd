import AdminLayout from '@/componentes/Layouts/AdminLayout';
import axios from 'axios';
import useSWR from 'swr';
import CircularProgress from '@material-ui/core/CircularProgress';
import EmpleadosTable from '@/componentes/Admin/Tables/Empleados';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import ModalEliminar from '@/componentes/Modales/ModalEliminar';
import { useState } from 'react';

const fetcher = (url) => axios.get(url).then((res) => res.data);

const index = () => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_APIURL}/empleado`,
    fetcher
  );
  const [deleteModal, setdeleteModal] = useState(false); //variable para el modal de eliminación
  //Controla cuando aparece el modal de eliminación
  const handleModalDelete = (empleado) => {
    setempleado(empleado);
    setdeleteModal(true);
  };
  //Controla la petición de eliminación de un paciente
  const handleDelete = async () => {
    setloading(true);
    try {
      const response = await axios.delete(`/empleado/${empleado.empid}`);
      if (response.status == 204) {
        setloading(false);
        setdeleteModal(false);
        router.push(router.asPath); //refresca los props de la pagina
      }
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
      <Link href='/admin/empleado'>
        <Button
          variant='contained'
          color='primary'
          className='mb-4'
          size='large'>
          Crear Empleado
        </Button>
      </Link>
      <EmpleadosTable handleModalDelete={handleModalDelete} data={data} />
      {/*----------Modal para eliminar------- */}
      <ModalEliminar
        show={deleteModal}
        handleClose={() => setdeleteModal(false)}
        titulo='Eliminar Empleado'
        mensaje={`Esta seguro que desea eliminar el paciente`}
        handleDelete={handleDelete}
      />
    </AdminLayout>
  );
};

export default index;
