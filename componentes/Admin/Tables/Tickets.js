import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'cliente', headerName: 'Cliente', width: 150 },
  { field: 'empleado', headerName: 'Empleado', width: 150 },
  {
    field: 'categoria',
    headerName: 'Categoria',
    width: 150,
  },
  {
    field: 'titulo',
    headerName: 'Titulo',
    width: 200,
  },
  {
    field: 'descripcion',
    headerName: 'Descripción',
    width: 250,
  },
  {
    field: 'fecha',
    headerName: 'Fecha',
    width: 150,
  },
  {
    field: 'estado',
    headerName: 'Estado',
    width: 150,
  },
];

export default function DataTable({ data }) {
  const info = [];
  data.forEach((element) => {
    info.push({
      id: element.TIKID,
      cliente: element.CLIID,
      empleado: element.EMPID,
      categoria: element.CATID,
      titulo: element.TIKTITULO,
      descripcion: element.TIKDESCRIPCION,
      fecha: element.TIKFECHA,
      estado: element.TIKESTADO,
    });
  });

  return (
    <div style={{ height: 400, width: '80%' }}>
      <DataGrid rows={info} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
