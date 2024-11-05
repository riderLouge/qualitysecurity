import React, { useState } from "react";
import styled from "styled-components";
import Dialog from "./Dialog"; // Adjust the import path based on your project structure

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
  text-align: center; /* Center align the text within the FooterWrapper */
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 25px;
  color: ${({ theme }) => theme.primary};
  width: 100%; /* Ensure the logo takes up the full width of its container */
  display: inline-block; /* Ensures that it behaves like a block element for centering */
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  font-weight: 500; /* Makes the font bold */
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcon = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
  font-weight: 500; /* Makes the font bold */
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
  font-weight: 500; /* Makes the font bold */
`;

function Footer() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleManageClick = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Quality Security & Detective Bureau</Logo>
        <SocialMediaIcon>
          Ph : 6382288638, 9841628844
        </SocialMediaIcon>
        <SocialMediaIcon>
          Email : quality.sdb15@gmail.com, quality.fms16@gmail.com
        </SocialMediaIcon>
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Gallery</NavLink>
          <NavLink href="#projects">Services</NavLink>
          <NavLink href="#clients">Clients</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          {/* <NavLink onClick={handleManageClick}>Manage</NavLink> */}
        </Nav>
        <Copyright>
          &copy; 2015 Quality Security & Detective Bureau. All rights reserved.
        </Copyright>
        <Dialog open={isDialogOpen} onClose={handleCloseDialog} />
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
