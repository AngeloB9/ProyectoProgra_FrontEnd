import AdminLayout from '@/componentes/Layouts/AdminLayout';
import axios from 'axios';
import useSWR from 'swr';
import CircularProgress from '@material-ui/core/CircularProgress';
import CategoriasTable from '@/componentes/Admin/Tables/Categorias';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import ModalEliminar from '@/componentes/Modales/ModalEliminar';
import { useState, useMemo } from 'react';

const fetcher = (url) => axios.get(url).then((res) => res.data);

const index = () => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_APIURL}/categoria`,
    fetcher
  );
  const [deleteModal, setdeleteModal] = useState(false); //variable para el modal de eliminación
  //Controla cuando aparece el modal de eliminación
  const handleModalDelete = (categoria) => {
    setcategoria(categoria);
    setdeleteModal(true);
  };
  //Controla la petición de eliminación de una categoría
  const handleDelete = async () => {
    setloading(true);
    try {
      const response = await axios(user.token).delete(
        `/categoria${categoria.catid}`
      );
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
      <Link href='/admin/categoria'>
        <Button
          variant='contained'
          color='primary'
          className='mb-4'
          size='large'>
          Crear Categoría
        </Button>
      </Link>
      <CategoriasTable data={data} handleModalDelete={handleModalDelete} />
      <ModalEliminar
        show={deleteModal}
        handleClose={() => setdeleteModal(false)}
        titulo='Eliminar Categoría'
        mensaje={`Esta seguro que desea eliminar la categoria ?`}
        handleDelete={handleDelete}
      />
    </AdminLayout>
  );
};

export default index;
