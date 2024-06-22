import {Navbar,Nav,NavLink} from 'react-bootstrap'
import { Link} from 'react-router-dom';
function Header() {
    return(
        <>
      <Navbar bg="dark" data-bs-theme="dark">
       
          <Nav className="me-auto nav-bar">
        <Link to="/home">Home</Link>
            <Link to="/Addproduct">AddProduct</Link>
            <Link to="/UpdateProduct">UpdateProduct</Link>
            <Link to="/login">Login</Link>
          </Nav>
      
      </Navbar>
        </>
    )
}
export default Header