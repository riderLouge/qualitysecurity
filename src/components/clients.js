import React from "react";
import styled, { keyframes } from "styled-components";

// Animation for sliding the clients to the left
const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const ClientsWrapper = styled.div`
  width: 80%;
  overflow: hidden;
  white-space: nowrap;
  padding: 20px 0;
  margin: 0 auto; /* Centers the ClientsWrapper horizontally */
  text-align: center; /* Aligns content inside ClientsWrapper to center */

  @media (min-width: 768px) {
    width: 60%; /* Desktop view */
  }

  @media (max-width: 767px) {
    width: 80%; /* Mobile view */
  }
`;

const ClientsContainer = styled.div`
  display: flex;
  animation: ${scroll} 20s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const Client = styled.div`
  min-width: 150px;
  height: 100px;
  margin-right: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: bold;
  flex-shrink: 0; /* Prevents shrinking when container is resized */
`;

const clients = [
  "Client 1",
  "Client 2",
  "Client 3",
  "Client 4",
  "Client 5",
  "Client 6",
  "Client 7",
  "Client 8",
  "Client 9",
  "Client 10",
];

const Clients = () => {
  return (
    <ClientsWrapper>
      <ClientsContainer>
        {clients.map((client, index) => (
          <Client key={index}>{client}</Client>
        ))}
        {clients.map((client, index) => (
          <Client key={`duplicate-${index}`}>{client}</Client>
        ))}
      </ClientsContainer>
    </ClientsWrapper>
  );
};

export default Clients;
