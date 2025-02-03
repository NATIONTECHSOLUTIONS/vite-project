import { NavLink } from "react-router-dom";
import "../assets/styles/navbar.css"

const Navbar = () => {
  return (
    <div className="navigation">
      {/* <p className="hormo">HORMONATION</p> */}
      <NavLink className="links" to="/">
        Home
      </NavLink>
      <NavLink className="links" to="about">
        {" "}
        About{" "}
      </NavLink>
      <NavLink className="links" to="contactus">
        {" "}
        Contactus{" "}
      </NavLink>
      <NavLink className="links" to="services">
        {" "}
        Services{" "}
      </NavLink>
      <NavLink className="links" to="resume">
        {" "}
        Resume{" "}
      </NavLink>
      <NavLink className="links" to="portfolio">
        {" "}
        Portfolio{" "}
      </NavLink>
      <NavLink className="links" to="Blog">
        {" "}
        Blog{" "}
      </NavLink>
    </div>
  );
};

export default Navbar;
