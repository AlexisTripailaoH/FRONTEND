import { MDBBadge, MDBBtn, MDBIcon } from 'mdb-react-ui-kit'
import React from 'react'

export const TableItem = ({ users }) => {
    return (
        <tr>
            <td>
                <div>
                    <div className='ms-3'>
                        <p className='fw-bold mb-1'>{users.name}</p>
                    </div>
                </div>
            </td>
            <td>
                <p className='fw-normal mb-1'>{users.position}</p>
            </td>
            <td>
                <MDBBadge color='primary' pill>
                    {users.title}
                </MDBBadge>
            </td>
            <td>
                <MDBBtn color='link' rounded size='sm'>
                    <MDBIcon fas icon="edit" size='2x' />
                </MDBBtn>
            </td>
            <td>
                <MDBBtn color='link' rounded size='sm'>
                    <MDBIcon fas icon="trash" size='2x' />
                </MDBBtn>
            </td>
        </tr>
    )
}
