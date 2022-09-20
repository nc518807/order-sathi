import React from 'react';
// import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';
// import { logOut } from '../Redux/ActionNames/ActionCreator';

const FilterProfile = () => {

  const navigate = useNavigate();
  // const disptach = useDispatch();

  const handleLogout = () => {
    // disptach(logOut())
    window.localStorage.removeItem("x-access-token");
      navigate("/login/")
    console.log("LogOut Successful");
  }

  return (
    <Nav>
      <NavItem>
        <NavLink to="/client/profile">
          <span>
            <i className="fas fa-cog"></i>
          </span>
          My Account
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/client/orders/">
          <span>
            <i className="fas fa-box"></i>
          </span>
          My Orders
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/client/track/">
          <span>
            <i className="fas fa-map-marker"></i>
          </span>
          Track Orders
        </NavLink>
      </NavItem>
      <NavItem>
        <button style={{border:"none", backgroundColor: "#fff"}}
          onClick={
            handleLogout
          }
        >
          <span>
            <i className="fas fa-sign-out-alt"></i>
          </span>
          Log Out
        </button>
      </NavItem>
    </Nav>
  )
}

export default FilterProfile