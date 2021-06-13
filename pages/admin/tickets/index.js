import AdminLayout from '@/componentes/Layouts/AdminLayout';
import axios from 'axios';
import useSWR from 'swr';
import CircularProgress from '@material-ui/core/CircularProgress';
import TicketTable from '@/componentes/Admin/Tables/Tickets';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import ModalEliminar from '@/componentes/Modales/ModalEliminar';
import { useState } from 'react';
import { useRouter } from 'next/router';
const fetcher = (url) => axios.get(url).then((res) => res.data);

const index = () => {
  const { data, error: errorfetch } = useSWR(
    `${process.env.NEXT_PUBLIC_APIURL}/ticket`,
    fetcher
  );
  const [loading, setloading] = useState(false);
  const router = useRouter();
  const [ticket, setticket] = useState({});
  const [deleteModal, setdeleteModal] = useState(false); //variable para el modal de eliminación
  //Controla cuando aparece el modal de eliminación
  const handleModalDelete = (ticket_delete) => {
    console.log(ticket_delete);
    setticket(ticket_delete);
    setdeleteModal(true);
  };
  //Controla la petición de eliminación de un paciente
  const handleDelete = async () => {
    setloading(true);
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_APIURL}/ticket/${ticket.id}`
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
      <Link href='/admin/ticket'>
        <Button
          variant='contained'
          color='primary'
          className='mb-4'
          size='large'>
          Crear Ticket
        </Button>
      </Link>
      <TicketTable handleModalDelete={handleModalDelete} data={data} />
      <ModalEliminar
        show={deleteModal}
        handleClose={() => setdeleteModal(false)}
        titulo='Eliminar Ticket'
        mensaje={`Esta seguro que desea eliminar el ticket`}
        handleDelete={handleDelete}
      />
    </AdminLayout>
  );
};

export default index;
