import React from "react";
import styled, { keyframes } from "styled-components";
import client1 from "../asset/c1.jpeg";
import client2 from "../asset/c2.jpeg";
import client3 from "../asset/c3.webp";
import client4 from "../asset/c4.jpeg";
import client5 from "../asset/c5.png";
import client6 from "../asset/c6.png";
import client7 from "../asset/c8.jpeg";

// Animation for sliding the clients to the left
const scroll = keyframes`
  0% {
    transform: translateX(100%);
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
  flex-shrink: 0; /* Prevents shrinking when container is resized */
  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 8px;
  }
`;

const clients = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
];

const Clients = () => {
  return (
    <ClientsWrapper >
      <ClientsContainer>
        {clients.map((client, index) => (
          <Client key={index}>
            <img src={client} alt={`Client ${index + 1}`} />
          </Client>
        ))}
        {clients.map((client, index) => (
          <Client key={`duplicate-${index}`}>
            <img src={client} alt={`Client ${index + 1}`} />
          </Client>
        ))}
      </ClientsContainer>
    </ClientsWrapper>
  );
};

export default Clients;
