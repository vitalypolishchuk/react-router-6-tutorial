import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import StyledNavbar from "../components/StyledNavbar";
import NavBar from "../components/Navbar";

const SharedLayout = () => {
  return (
    <Fragment>
      <NavBar />
      <Outlet />
    </Fragment>
  );
};

export default SharedLayout;
