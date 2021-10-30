import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../../Hooks/useAuth';
import { useFirebase } from '../../../Hooks/useFirebase';
import "./Header.css";



const Header = () => {
    // const {user,userLogout}=useFirebase()
    const {user,userLogout}=useAuth()
    const history = useHistory();
    const goToHome = () => {
      history.push("/home");
    };
    // const headerLoginButton=()=>{

    // }
    return (
        <div>
             <div className="text-center">
      <h1 onClick={goToHome} className="company-name ">
        Happy Holiday Tourism
      </h1>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="danger" variant="dark"
        className="text-center"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Navbar.Brand>
                <NavLink
                  to="/faq"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "black",
                  }}
                  to="home"
                  className="header-link"
                >
                <b>Home</b>
                </NavLink>
              </Navbar.Brand>
              
              <Navbar.Brand>
                {""}
                <NavLink
                  to="/faq"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "black",
                  }}
                  to="MyOrder"
                  className="header-link"
                >
                  <b>My Order</b>
                </NavLink>
              </Navbar.Brand>
              <Navbar.Brand>
                {" "}
                <NavLink
                  to="/faq"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "black",
                  }}
                  to="ManageOrder"
                  className="header-link"
                >
                  <b>Manage Order</b>
                </NavLink>
              </Navbar.Brand>
              <Navbar.Brand>
                {" "}
                <NavLink
                  to="/faq"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "black",
                  }}
                  to="AddPackages"
                  className="header-link"
                >
                  <b>Add New</b>
                </NavLink>
              </Navbar.Brand>
              <NavDropdown title="More Info" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <NavLink
                    to="/faq"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "black",
                    }}
                    to="./sponsors"
                    className="header-info"
                  >
                    About Us
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    to="/faq"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "black",
                    }}
                    to="forum"
                    className="header-info"
                  >
                    Forum
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    to="/faq"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "black",
                    }}
                    to="admission"
                    className="header-info"
                  >
                    Admission
                  </NavLink>
                </NavDropdown.Item>
                
              </NavDropdown>
            </Nav>
           
          </Navbar.Collapse>
          {user.email && <img className="header-img" src={user.photoURL} alt=""/>} 
          {user.email&&  <span className="text-light mx-1">{user?.displayName}</span>}
         {user.email? <button onClick={userLogout} className="btn btn-warning">Logout</button> : <Link to="/login"><button  className="btn btn-success">Login</button></Link>}
        </Container>

      </Navbar>
    </div>
        </div>
    );
};

export default Header;