import React from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  NavLogo,
  NavItems,
  MobileIcon,
  MobileMenu,
  MobileLink,
  LogoImage,
} from "./NavbarStyledComponent";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { useTheme } from "styled-components";
import { useMediaQuery } from "react-responsive";
import logo from "../../asset/logo1.jpeg";
import logo2 from "../../asset/logo2.jpeg";
import logo3 from "../../asset/Quality_Security_logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "black",
              marginBottom: "20;",
              cursor: "pointer",
            }}
          >
            {isMobile ? (
              <LogoImage src={logo3} alt="Logo" style={{width:"50%",height:"50%"}}/>
            ) : (
              <>
                <LogoImage src={logo} alt="Logo" />
                <LogoImage src={logo2} alt="Logo" />
              </>
            )}
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">Home</NavLink>
          <NavLink href="#projects">Services</NavLink>
          <NavLink href="#skills">Gallery</NavLink>
          <NavLink href="#contact">Contact Us</NavLink>
        </NavItems>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Home
            </MobileLink>
            <MobileLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Gallery
            </MobileLink>
            <MobileLink
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Services
            </MobileLink>
            <MobileLink
              href="#contact"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Contact
            </MobileLink>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
