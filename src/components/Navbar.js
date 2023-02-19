import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="">Home</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="dashboard">Dashboard</NavLink>
      <NavLink to="login">Login</NavLink>
      <NavLink to="products">Products</NavLink>
    </nav>
  );
};

export default Navbar;
