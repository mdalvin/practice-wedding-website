import React from "react";
import { FaBars } from "react-icons/fa";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLink,
  NavLogo,
  NavMenu,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>JJ</NavLogo>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink
              to="about"
              smooth={true}
              duration={500}
              exact="true"
              offset={-80}
            >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="venue"
              smooth={true}
              duration={500}
              exact="true"
              offset={-80}
            >
              Venue
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="map"
              smooth={true}
              duration={500}
              exact="true"
              offset={-80}
            >
              Map
            </NavLink>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
