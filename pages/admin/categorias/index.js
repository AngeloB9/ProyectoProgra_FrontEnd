import AdminLayout from '@/componentes/Layouts/AdminLayout';
import axios from 'axios';
import useSWR from 'swr';
import CircularProgress from '@material-ui/core/CircularProgress';
import CategoriasTable from '@/componentes/Admin/Tables/Categorias';
import Button from '@material-ui/core/Button';
import Link from 'next/link';

const fetcher = (url) => axios.get(url).then((res) => res.data);

const index = () => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_APIURL}/categoria`,
    fetcher
  );

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
      <CategoriasTable data={data} />
    </AdminLayout>
  );
};

export default index;
