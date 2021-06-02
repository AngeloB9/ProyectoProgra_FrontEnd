import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'Nombres', width: 200 },
  { field: 'lastName', headerName: 'Apellidos', width: 200 },
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
];

export default function DataTable({ data }) {
  const info = [];
  data.forEach((element) => {
    info.push({
      id: element.CLIID,
      firstName: element.CLINOMBRES,
      lastName: element.CLIAPELLIDOS,
      direccion: element.CLIDIRECCION,
      celular: element.CLICELULAR,
      correo: element.CLICORREO,
    });
  });

  return (
    <div style={{ height: 400, width: '90%' }}>
      <DataGrid rows={info} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
