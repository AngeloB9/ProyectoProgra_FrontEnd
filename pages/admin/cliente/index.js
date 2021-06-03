import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import FormCliente from '@/componentes/Admin/Forms/CrearCliente';
import AdminLayout from '@/componentes/Layouts/AdminLayout';

const index = () => {
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);

  const router = useRouter();

  const handleSubmit = async (values) => {
    setloading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_APIURL}/cliente`,
        values
      );

      setloading(false);
      router.push('/admin/clientes');
    } catch (error_peticion) {
      seterror(error_peticion);
      setloading(false);
    }
  };

  return (
    <AdminLayout>
      <h4>Crear Cliente</h4>
      <FormCliente handleSubmit={handleSubmit} />
    </AdminLayout>
  );
};

export default index;
