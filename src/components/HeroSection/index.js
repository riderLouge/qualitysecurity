import React from "react";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  HeroRightContainer,
  HeroInnerContainer,
  Title,
  ResumeButton,
  Typography
} from "./HeroStyle";
// import HeroImg from "../../images/HeroImage.jpg";

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>{/* <HeroBgAnimation /> */}</HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>Secure Your Space with Our Professional Services.</Title>

            <ResumeButton href="#contact">Book Now</ResumeButton>
            <Typography>24/7 Monitoring</Typography>
            <Typography>Trained Professional</Typography>
            <Typography>Emergency Preparedness</Typography>
          </HeroLeftContainer>
          <HeroRightContainer id="Right">
            {/* <Img src={HeroImg} alt="hero-image" /> */}
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
