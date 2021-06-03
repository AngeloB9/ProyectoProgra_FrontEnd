import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'nombre', headerName: 'Nombre Categoría', width: 200 },
  { field: 'descripcion', headerName: 'Descripción', width: 200 },
];

export default function DataTable({ data }) {
  const info = [];
  data.forEach((element) => {
    info.push({
      id: element.CATID,
      nombre: element.CATNOMBRE,
      descripcion: element.CATDESCRIPCION,
    });
  });

  return (
    <div style={{ height: 400, width: '50%' }}>
      <DataGrid rows={info} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
