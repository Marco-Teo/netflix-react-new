import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
const MyNavbar = () => {
  const location = useLocation();
  return (
    <Navbar variant="dark" expand="lg" style={{ backgroundColor: "#221f1f" }}>
      <Link to="/" className="navbar-brand">
        <img
          src="assets/logo.png"
          alt="logo"
          style={{ width: "100px", height: "55px" }}
        />
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link
            className={
              location.pathname === "/" ? "nav-link active" : "nav-link"
            }
            to="/"
          >
            Home
          </Link>

          <Link
            className={
              location.pathname === "/Tv-Show" ? "nav-link active" : "nav-link"
            }
            to="/Tv-Show"
          >
            TV Shows
          </Link>
          <Link
            className={location === "/Movies" ? "nav-link active" : "nav-link"}
            to="/Movies"
          >
            Movies
          </Link>
          <Link
            className={
              location === "/Recently-Added" ? "nav-link active" : "nav-link"
            }
            to="/Recently-Added"
          >
            Recently Added
          </Link>
          <Link
            className={location === "/My-List" ? "nav-link active" : "nav-link"}
            to="/My-List"
          >
            My List
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
