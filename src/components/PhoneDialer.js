import React from 'react';
import { FaPhone } from 'react-icons/fa';
import styled from 'styled-components';

const PhoneIcon = styled(FaPhone)`
  position: fixed; /* Fixed positioning to keep it on the screen */
  bottom: 20px; /* Adjust position as needed */
  right: 20px; /* Adjust position as needed */
  font-size: 50px; /* Adjust size as needed */
  color: #ffffff; /* Icon color */
  background: linear-gradient(135deg, #007bff, #0056b3); /* Gradient background */
  padding: 12px; /* Space around the icon */
  border-radius: 50%; /* Circular background */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Shadow for depth */
  cursor: pointer;
  z-index: 1000; /* Make sure it stays on top of other elements */
  transition: all 0.3s ease-in-out; /* Smooth transition for hover effects */
  
  &:hover {
    transform: scale(1.1); /* Slightly enlarge on hover */
    background: linear-gradient(135deg, #0056b3, #003d7a); /* Darker gradient on hover */
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4); /* Enhanced shadow on hover */
  }
`;

const PhoneDialer = () => {
  const handleClick = () => {
    window.location.href = 'tel:1234567890'; /* Opens the dialer with the specified number */
  };

  return (
    <PhoneIcon onClick={handleClick} />
  );
};

export default PhoneDialer;
