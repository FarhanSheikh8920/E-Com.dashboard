import { Navbar, Nav, NavLink, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Header() {
  const user = JSON.parse(localStorage.getItem('user-info'))
const history=useNavigate();
  const logout =() => {
  localStorage.clear();
  history('/login')

}






  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">

        <Nav className="me-auto nav-bar">
          {
            localStorage.getItem('user-info') ?
              <>
                <Link to="/Addproduct">AddProduct</Link>
                <Link to="/UpdateProduct">UpdateProduct</Link>
              </>
              :
              <>
                <Link to="/login">Login</Link>
                <Link to="/*"></Link>
                <Link to="/Register">Register</Link>
              </>
          }


        </Nav>
          {
             localStorage.getItem('user-info') ?
        <Nav className='nav-1'>
            
             <NavDropdown title={user && user.name}>
            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
            <NavDropdown.Item>Profile</NavDropdown.Item>
          
            
          </NavDropdown>

        </Nav>:null
          }
      </Navbar>
    </>
  )
}
export default Header