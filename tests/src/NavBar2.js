import React, { useState } from 'react';
import {MDBNavbar,MDBContainer,MDBIcon,MDBNavbarNav,MDBNavbarToggler,MDBNavbarBrand,MDBCollapse,MDBTabsItem,MDBTabsLink} from 'mdb-react-ui-kit';

export default function AdminNavBar() {
    const [showNavColorSecond, setShowNavColorSecond] = useState(false);
    return (
        <>
            <MDBNavbar expand='lg' dark bgColor='dark'>
                <MDBContainer>
                    <MDBNavbarBrand href='#'>TASKCONTROL</MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarColor02'
                        aria-controls='navbarColor02'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavColorSecond(!showNavColorSecond)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
                        <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
                            <MDBTabsItem style={{ marginRight: '50px', marginLeft: '50px' }}>
                                <MDBTabsLink>
                                    <MDBIcon fas icon='users' /> Users
                                </MDBTabsLink>
                            </MDBTabsItem>
                            <MDBTabsItem style={{ marginRight: '50px', marginLeft: '50px' }}>
                                <MDBTabsLink>
                                    <MDBIcon fas icon='address-card' /> Charges
                                </MDBTabsLink>
                            </MDBTabsItem>
                            <MDBTabsItem style={{ marginRight: '50px', marginLeft: '50px' }}>
                                <MDBTabsLink>
                                    <MDBIcon fas icon='sitemap' /> Units
                                </MDBTabsLink>
                            </MDBTabsItem>
                            <MDBTabsItem style={{ marginRight: '50px', marginLeft: '50px' }}>
                                <MDBTabsLink>
                                    <MDBIcon fas icon="sign-out-alt" /> Logout
                                </MDBTabsLink>
                            </MDBTabsItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                    <MDBNavbarBrand href='#'>ADMINISTRATOR</MDBNavbarBrand>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
}