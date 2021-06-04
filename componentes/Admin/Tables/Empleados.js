import * as React from 'react';
import { Button } from 'react-bootstrap';
import { DataGrid } from '@material-ui/data-grid';
import Link from 'next/link';

const handleModalDelete = () => {};
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'Nombres', width: 200 },
  { field: 'lastName', headerName: 'Apellidos', width: 200 },
  {
    field: 'fecha_nacimiento',
    headerName: 'Nacimiento',
    width: 200,
  },
  {
    field: 'correo',
    headerName: 'Correo',
    width: 200,
  },
  {
    field: 'celular',
    headerName: 'Celular',
    width: 150,
  },
  {
    field: 'direccion',
    headerName: 'Dirección',
    width: 200,
  },
  {
    field: 'editar',
    headerName: 'Editar',
    width: 200,
    disableClickEventBubbling: true,
    renderCell: (objeto) => {
      return (
        <Link href={`/admin/editempleado/${objeto.row.id}`}>
          <Button>Editar</Button>
        </Link>
      );
    },
  },
  {
    field: 'eliminar',
    headerName: 'Eliminar',
    width: 200,
    disableClickEventBubbling: true,
    renderCell: (objeto) => {
      // const onClick = () => {
      //   return alert('No haga eso compa');
      // };
      return (
        <Button
          variant='danger'
          onClick={() => {
            //handleModalDelete(empleado);
            handleModalDelete(objeto);
          }}>
          Eliminar
          <i className='fas fa-trash-alt' />
        </Button>
      );
    },
  },
];

export default function DataTable({ data }) {
  const info = [];
  data.forEach((element) => {
    info.push({
      id: element.EMPID,
      firstName: element.EMPNOMBRES,
      lastName: element.EMPAPELLIDOS,
      fecha_nacimiento: element.EMPFECHANACIMIENTO.split('T')[0],
      correo: element.EMPCORREO,
      celular: element.EMPCELULAR,
      direccion: element.EMPDIRECCION,
    });
  });

  return (
    <div style={{ height: 400, width: '90%' }}>
      <DataGrid rows={info} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
