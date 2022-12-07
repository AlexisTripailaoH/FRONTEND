import { MDBBtn, MDBContainer, MDBInput, MDBCol, MDBTextArea } from 'mdb-react-ui-kit';

function App() {
  return (
    <MDBContainer fluid className='newUser'>
      <h2 className="fw-bold mb-3">CREAR FLUJO</h2>
      <MDBCol col='6'>
        <MDBInput wrapperClass='mb-4' label='Nombre' id='form1'
          type='text' />
      </MDBCol>
      <MDBCol col='6'>
        <MDBTextArea label='Descripción' wrapperClass='mb-4' id='textAreaExample' rows={4} />
      </MDBCol>
      <MDBCol col='6'>
        <MDBInput wrapperClass='mb-4' label='thishitisgone' id='form3'
          type='text'/>
      </MDBCol>
      <MDBCol col='6'>
        <MDBInput wrapperClass='mb-4' label='thishitisgone' id='form3'
          type='text'/>
      </MDBCol>
      <MDBCol col='6'>
        <select className='form-select' aria-label='Default select example'>
          <option value={0}>Seleccionar estado</option>
          <option value={1}>Activo</option>
          <option value={2}>No activo</option>
        </select>
      </MDBCol>
      <MDBBtn style={{ marginBottom: '2px', marginTop: '5px' }}
        className='w-80' size='md'>CREAR FLUJO</MDBBtn>
      <hr />
    </MDBContainer>
  );
}
export default App;
