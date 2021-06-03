import AdminLayout from '@/componentes/Layouts/AdminLayout';
import axios from 'axios';
import useSWR from 'swr';
import CircularProgress from '@material-ui/core/CircularProgress';
import ClientesTable from '@/componentes/Admin/Tables/Clientes';
import Button from '@material-ui/core/Button';
import Link from 'next/link';

const fetcher = (url) => axios.get(url).then((res) => res.data);

const index = () => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_APIURL}/cliente`,
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
      <Link href='/admin/cliente'>
        <Button
          variant='contained'
          color='primary'
          className='mb-4'
          size='large'>
          Crear Cliente
        </Button>
      </Link>
      <ClientesTable data={data} />
    </AdminLayout>
  );
};

export default index;
