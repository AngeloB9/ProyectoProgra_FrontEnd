import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import FormEmpleado from '@/componentes/Admin/Forms/CrearEmpleado';
import AdminLayout from '@/componentes/Layouts/AdminLayout';

const index = () => {
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);

  const router = useRouter();

  const handleSubmit = async (values) => {
    setloading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_APIURL}/empleado`,
        values
      );

      setloading(false);
      router.push('/admin/empleados');
    } catch (error_peticion) {
      seterror(error_peticion);
      setloading(false);
    }
  };

  return (
    <AdminLayout>
      <h4>Crear Empleado</h4>
      <FormEmpleado handleSubmit={handleSubmit} />
    </AdminLayout>
  );
};

export default index;
