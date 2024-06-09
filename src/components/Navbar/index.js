import React from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileNavLogo,
  MobileLink,
  LogoImage,
} from "./NavbarStyledComponent";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";
import { Close, CloseRounded } from "@mui/icons-material";
import { useTheme } from "styled-components";
import logo from "../../asset/logo1.jpeg";
import logo2 from "../../asset/logo2.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
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
            <LogoImage src={logo} alt="Logo" />
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

          {/* <NavLink href="#education">Education</NavLink> */}
        </NavItems>
        {/* <ButtonContainer>
          <GitHubButton target="_blank"> Contact</GitHubButton>
        </ButtonContainer> */}
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
            {/* <MobileLink
              href="#education"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Education
            </MobileLink> */}
            {/* <GitHubButton
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              // href={Bio.github}
              target="_blank"
            >
              Contact
            </GitHubButton> */}
          </MobileMenu>
        )}
        {/* <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "black",
              marginBottom: "20;",
              cursor: "pointer",
            }}
          >
            <LogoImage src={logo2} alt="Logo" />
          </a>
        </NavLogo> */}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
