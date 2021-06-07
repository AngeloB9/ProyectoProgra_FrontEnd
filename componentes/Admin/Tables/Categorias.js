import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Button } from 'react-bootstrap';
import Link from 'next/link';

export default function DataTable({ data, handleModalDelete }) {
  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'nombre', headerName: 'Nombre Categoría', width: 200 },
    { field: 'descripcion', headerName: 'Descripción', width: 200 },
    {
      field: 'editar',
      headerName: 'Editar',
      width: 200,
      disableClickEventBubbling: true,
      renderCell: (objeto) => {
        return (
          <Link href={`/admin/editcategoria/${objeto.row.id}`}>
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
        return (
          <Button
            variant='danger'
            onClick={() => {
              handleModalDelete(objeto.row);
            }}>
            Eliminar
            <i className='fas fa-trash-alt' />
          </Button>
        );
      },
    },
  ];

  const info = [];
  data.forEach((element) => {
    info.push({
      id: element.CATID,
      nombre: element.CATNOMBRE,
      descripcion: element.CATDESCRIPCION,
    });
  });

  return (
    <div style={{ height: 400, width: '75%' }}>
      <DataGrid rows={info} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
