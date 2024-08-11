import "./App.css";
import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import { BrowserRouter as Router } from "react-router-dom";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";
import Education from "./components/Education";
import Skills from "./components/Destination";
import StatsSection from "./components/Stats";
import pic from "../src/asset/h1.png";
import PhoneDialer from "./components/PhoneDialer";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;
// const Wrapper = styled.div`
//   background: linear-gradient(
//       38.73deg,
//       rgba(255, 204, 0, 0.15) 0%,
//       rgba(255, 204, 0, 0) 50%
//     ),
//     linear-gradient(
//       141.27deg,
//       rgba(255, 204, 0, 0) 50%,
//       rgba(255, 204, 0, 0.15) 100%
//     );
//   width: 100%;
//   clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
// `;

const Wrapper = styled.div`
  background: linear-gradient(to bottom, #80daee 0%, white 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 0px 0px 80px 0px;
`;
const ImageContainer = styled.div`
  width: 80%;
  max-width: 100%;
  margin-top: 2rem;
  overflow: hidden;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;
function App() {
  const [openModal, setOpenModal] = useState({
    state: false,
    project: null,
  });

  return (
    <ThemeProvider theme={lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <Hero />
          <Wrapper>
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
            <StatsSection />
            <Skills />
            <Container>
              <p
                style={{ fontSize: "34px", fontWeight: "bold", color: "#333" }}
              >
                Our Highlights
              </p>
              <ImageContainer>
                <Image src={pic} alt="Services" />
              </ImageContainer>
            </Container>

            <div style={{ paddingBottom: "100px" }}>
              <Contact />
            </div>
          </Wrapper>
          <PhoneDialer /> {/* Add the phone icon component */}
          <Footer />
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
