import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { getUser } from "../../service/authorize";
import { useNavigate } from "react-router-dom"; // Import useNavigate
// A sample Logout function (you should adapt this to your actual implementation)
function Logout(callback) {
  // Perform logout actions, such as clearing session data
  sessionStorage.removeItem("username");
  sessionStorage.removeItem("token");

  // After performing the logout actions, call the provided callback
  if (typeof callback === "function") {
    callback();
  }
}
function MyNav() {
  const navigate = useNavigate();

  const handleLogout = () => {
    Logout(() => {
      // After the logout actions are complete, navigate to the root path
      navigate("/");
    });
  };

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            {getUser() && <Nav.Link href="/create">addpage</Nav.Link>}

            {!getUser() && <Nav.Link href="/Login">Login</Nav.Link>}
            {getUser() && (
              <Nav.Link to="/" onClick={handleLogout}>
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNav;
