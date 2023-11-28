import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/storytelling.png'; // Import your logo image

const Header = () => {
  return (
    <Navbar className='pt-3 pb-3' style={{ background: '#f7f7f7' }} expand="lg">
      <Container>
      <div className="d-flex align-items-center">
          <Navbar.Brand>
            <img
              alt=""
              src={logoImage}
              width="50"
              height="50"
              className="d-inline-block align-top me-3 mb-3"
            />
          </Navbar.Brand>
          <h3 className="mb-0">ReadScape</h3>
        </div>
      
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="mx-auto d-flex justify-content-end  w-100">
            <Link className='p-3  fs-5 fw-bold text-decoration-none' style={{color:"black"}} to="/"><h5>Home</h5></Link>
            <Link className='p-3  fs-5 fw-bold text-decoration-none' style={{color:"black"}} to="/"><h5>About Us</h5></Link>
            <Link className='p-3  fs-5 fw-bold text-decoration-none' style={{color:"black"}} to="/books"><h5>Books</h5></Link>
            <Link className='p-3  fs-5 fw-bold text-decoration-none' style={{color:"black"}} to="/"><h5>Login</h5></Link>
            <Link className='p-3  fs-5 fw-bold text-decoration-none' style={{color:"black"}} to="/"><h5>Contact Us</h5></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
