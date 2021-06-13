import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Link from 'next/link';
import { Button } from 'react-bootstrap';

export default function DataTable({ data, handleModalDelete }) {
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
    {
      field: 'editar',
      headerName: 'Editar',
      width: 200,
      disableClickEventBubbling: true,
      renderCell: (objeto) => {
        return (
          <Link href={`/admin/editticket/${objeto.row.id}`}>
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
      id: element.TIKID,
      cliente: element.CLIID,
      empleado: element.EMPID,
      categoria: element.CATID,
      titulo: element.TIKTITULO,
      descripcion: element.TIKDESCRIPCION,
      fecha: element.TIKFECHA.split('T')[0],
      estado: element.TIKESTADO,
    });
  });

  return (
    <div style={{ height: 400, width: 'auto' }}>
      <DataGrid rows={info} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
