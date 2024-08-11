import React from 'react';
import { FaPhone } from 'react-icons/fa';
import styled from 'styled-components';

const PhoneIcon = styled(FaPhone)`
  position: fixed; /* Fixed positioning to keep it on the screen */
  bottom: 20px; /* Adjust position as needed */
  right: 20px; /* Adjust position as needed */
  font-size: 40px; /* Adjust size as needed */
  color: #007bff; /* Icon color */
  cursor: pointer;
  z-index: 1000; /* Make sure it stays on top of other elements */
  
  &:hover {
    color: #0056b3; /* Change color on hover */
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
