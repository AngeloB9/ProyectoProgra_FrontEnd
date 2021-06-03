import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import FormTicket from '@/componentes/Admin/Forms/CrearTicket';
import AdminLayout from '@/componentes/Layouts/AdminLayout';

const index = () => {
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);

  const router = useRouter();

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

  return (
    <AdminLayout>
      <h4>Crear Ticket</h4>
      <FormTicket handleSubmit={handleSubmit} />
    </AdminLayout>
  );
};

export default index;
