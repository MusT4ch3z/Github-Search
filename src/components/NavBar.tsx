import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import Navbar from "react-bootstrap/esm/Navbar";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="sticky-top bg-emerald-400">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="no-underline text-black">
              GitHub Search
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item>
                <Link to="/" className="no-underline text-black mr-3">
                  Home
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/favourites" className="no-underline text-black">
                  Favourites
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
