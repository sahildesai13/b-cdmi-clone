import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import HeaderData from './HeaderData';
import './Header.css'
function Header() {
    var header = ['HOME','COURSE','ACTIVITIES','BLOG','KNOW US','GET IN TOUCH', 'STUDENT ZONE'];
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="">
                        <img src={require('./img/logo1.png')} style={{maxWidth:'200px'}}></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Col lg={4}></Col>
                        <Nav>
                        {
                            header.map((ele)=>{
                                return(
                                    <Nav.Link className='fw-bold fs-7'>{ele}</Nav.Link>
                                )
                            })
                        }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
export default Header;