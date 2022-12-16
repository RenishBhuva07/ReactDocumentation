import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    // MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    // MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default class HeaderFile extends React.Component {
    render() {
        return (
            <MDBNavbar expand='lg' dark bgColor='dark'>
                <MDBContainer fluid>
                    {/* <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand> */}
                    <Link className="navbar-brand" to="/">React JS</Link>
                    <MDBNavbarToggler
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>

                    <MDBCollapse navbar>
                        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                            <MDBNavbarItem>
                                <Link className="nav-link" to="/">Home</Link>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link className="nav-link" to="">Link</Link>
                            </MDBNavbarItem>

                            <MDBNavbarItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle tag='a' className='nav-link'>
                                        Dropdown
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem link>Action</MDBDropdownItem>
                                        <MDBDropdownItem link>Another action</MDBDropdownItem>
                                        <MDBDropdownItem link>Something else here</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavbarItem>

                            <MDBNavbarItem>
                                {/* <MDBNavbarLink href='example' tabIndex={-1} aria-disabled='true'>
                                    Examples
                                </MDBNavbarLink> */}
                                <Link className="nav-link" to="example">Example</Link>
                            </MDBNavbarItem>
                        </MDBNavbarNav>

                        <form className='d-flex input-group w-auto'>
                            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
                            <MDBBtn color='primary'>Search</MDBBtn>
                        </form>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        )
    }
}
