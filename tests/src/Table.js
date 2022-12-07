import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { TableItem } from './TableItem';

export default function Table() {

  const info = [
    {
      id:1,
      name: "Alexis",
      title: "Administrador",
      position: "Desarrollador"
    },
    {
      id:2,
      name: "Alberto",
      title: "Diseñador",
      position: "QA"
    },
    {
      id:3,
      name: "Agustin",
      title: "Funcionario",
      position: "Scrum Master"
    }
  ]

  return (
    <MDBTable align='middle' style={{ textAlign: 'center' }}>
      <MDBTableHead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Title</th>
          <th scope='col'>Position</th>
          <th scope='col'>Edit</th>
          <th scope='col'>Delete</th>
        </tr>
      </MDBTableHead>

      <MDBTableBody>
        {info.map((users) => {
          return (
            <TableItem key={users.id} users={users}/>
          );
        })}
      </MDBTableBody>
    </MDBTable>
  );
}