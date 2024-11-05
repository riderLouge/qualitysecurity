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
  LogoImage2,
} from "./NavbarStyledComponent";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { useTheme } from "styled-components";
import { useMediaQuery } from "react-responsive";
import logo from "../../asset/p1.png";
import logo2 from "../../asset/p2.png";
import logo3 from "../../asset/p1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const handleDownload = () => {
    // Toggle the menu (if applicable)
    setIsOpen(!isOpen);

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = "Clientlist (1).pdf";
    link.download = "Clientlist.pdf"; // Set the name for the downloaded file
    link.click();
  };
  const handleDownloadDesktop = () => {

    const link = document.createElement("a");
    link.href = "Clientlist (1).pdf";
    link.target = "_blank"; // Open the PDF in a new tab
    link.rel = "noopener noreferrer"; // Security feature for external links
    link.click();
  };
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
                <LogoImage2 src={logo2} alt="Logo" />
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
          <NavLink href="#clients" onClick={handleDownloadDesktop}>Clients</NavLink>
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
              href="#clients"
              onClick={handleDownload}
            >
              Clients
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
