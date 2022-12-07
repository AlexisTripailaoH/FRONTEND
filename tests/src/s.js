/** LIST */
import { createContext } from "react";
const ListChargesContext = createContext();
export default ListChargesContext;
/** supplier*/
export async function CleanCharge(idCharge) {
    try {
        const url = "http://127.0.0.1:8000/api/cargo/crud-cargo/" + idCharge + "/";
        await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        });
    } catch (err) {
        console.log(err);
    }
}
/** provider*/
import { useState } from "react"
import { CleanCharge } from "../ListChargesSupplier";
import ListChargesContext from "./ListChargesContext";

const ListChargesProvider = ({ children }) => {
    const [listCharges, setListCharges] = useState([]);

    async function getCharges() {
        try {
            const url = "http://127.0.0.1:8000/api/cargo/crud-cargo/";
            const res = await fetch(url, {
                method: "get",
                headers: {
                    "Content-Type": "application/json"
                },
            });
            const data = await res.json();
            setListCharges(data);
        } catch (err) {
            console.log(err);
        }
    }

    async function DeleteCharge(idCharge) {
        await CleanCharge(idCharge)
        await getCharges();
    }

    const tools = { getCharges, listCharges, DeleteCharge };
    return <ListChargesContext.Provider value={tools}>{children}</ListChargesContext.Provider>
}

export { ListChargesProvider };
/** item*/
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { useContext } from "react";
import ListChargesContext from "./InternContext/ListChargesContext";

export const ListChargeItem = ({ charges }) => {
    const { DeleteCharge } = useContext(ListChargesContext);
    return (
        <tr>
            <td>
                <div>
                    <div>
                        <p className='fw-normal mb-1'>{charges.cargo_name}</p>
                    </div>
                </div>
            </td>
            <td>
                <MDBBtn color='link' rounded size='sm'>
                    <MDBIcon fas icon="edit" size='2x' />
                </MDBBtn>
            </td>
            <td>
                <MDBBtn color='link' rounded size='sm' onClick={() => {
                    charges.id && DeleteCharge(charges.id)
                }}>
                    <MDBIcon fas icon="trash" size='2x' />
                </MDBBtn>
            </td>
        </tr>
    );
}

/** lista*/
import { MDBContainer, MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import { useContext } from "react";
import ListChargesContext from "./InternContext/ListChargesContext";
import { ListChargeItem } from "./ListChargesItem";

export default function ListChargesView() {
    const { listCharges } = useContext(ListChargesContext);
    return (
        <MDBContainer className='newUser'>
            <MDBTable align='middle' style={{ textAlign: 'center' }}>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Edit</th>
                        <th scope='col'>Delete</th>
                    </tr>
                </MDBTableHead>

                <MDBTableBody>
                    {listCharges.map((charges) => {
                        return (
                            <ListChargeItem key={charges.id} charges={charges} />
                        );
                    })}
                </MDBTableBody>
            </MDBTable>
        </MDBContainer>
    );
}
/** render*/
import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'

export default function UnitsRender() {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol col='6'>
                    
                </MDBCol>
                <MDBCol col='6'>
                    
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

/** NEW************************************************************************************************************************/
import { createContext } from "react";
const NewUnitContext = createContext();
export default NewUnitContext;
/** supplier*/
export async function CleanUnit(idUnit) {
    try {
        const url = "http://127.0.0.1:8000/api/unidad/crud-unidad/" + idUnit + "/";
        await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        });
    } catch (err) {
        console.log(err);
    }
}
/** provider*/
import { useState } from "react"

const NewUnitProvider = ({ children }) => {
    const [listUnits, setListUnits] = useState([]);
    const [nameUnit, setNameUnit] = useState("");
    const [message,setMessage] = useState("");

    function handlerName(event) {
        setNameUnit(event.target.value);
    }

    function handlerSubmit(){
        if(nameUnit===""){
            setMessage("Debes ingresar un nombre");
        }else{
            await RegisterUnit();
        }
    }

    async function RegisterUnit() {
        try {
            const dirId = window.localStorage.getItem("dirId");
            const unitInfo = {
                unidad_name:nameUnit,
                dir:dirId
            }
            const url = "http://127.0.0.1:8000/api/dir/crud-dir/";
            const res = await fetch(url, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(unitInfo),
            });
            const data = await res.json();
            if(data.id !== 0){
                setMessage("Unidad creada correctamente");
                getUnits();
            }
        } catch (err) {
            console.log(err);
        }
    };

    async function getUnits() {
        try {
            const url = "http://127.0.0.1:8000/api/unidad/crud-unidad/";
            const res = await fetch(url, {
                method: "get",
                headers: {
                    "Content-Type": "application/json"
                },
            });
            const data = await res.json();
            setListUnits(data);
        } catch (err) {
            console.log(err);
        }
    }

    async function DeleteUnit(idCharge) {
        await (idCharge)
        await getUnits();
    }

    const tools = { handlerName, handlerSubmit, getUnits, DeleteUnit, listUnits, message};
    return <.Provider value={tools}>{children}</NewUnitContext.Provider>
}
export { NewUnitProvider };
/**view */
import React, { useContext } from 'react';
import { MDBBtn, MDBContainer, MDBInput, MDBCol } from 'mdb-react-ui-kit';

function NewUnitView() {
    const { handlerName, message, handleSubmit } = useContext();
    return (
        <MDBContainer fluid className='newUser'>
            <h2 className="fw-bold mb-3">CREAR UNIDAD</h2>
            <MDBCol col='6'>
                <MDBInput wrapperClass='mb-4' label='First name' id='form1'
                    type='text' onChange={handlerName} />
            </MDBCol>
            <MDBBtn style={{ marginBottom: '2px', marginTop: '5px' }}
                className='w-80' size='md' onClick={handleSubmit}>SAVE USER</MDBBtn>
            <hr/>
            <label className='mb-2'>{message}</label>
        </MDBContainer>
    );
}
export default NewUnitView;

/** */