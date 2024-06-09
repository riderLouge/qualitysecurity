import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 0px 0px 80px 0px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 110%; /* For desktop view */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-gap: 20px;
  justify-content: center;
  margin-top: 30px;
  @media (max-width: 768px) {
    width: 75%; /* For mobile view */
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
`;

const Skill = styled.div`
  width: 100%;
  height: 150px; /* Default height */
  background: ${({ theme, imageUrl }) => `url(${imageUrl})`} center/cover;
  border-radius: 16px;
  @media (min-width: 768px) {
    /* Adjusted height for desktop screens */
    height: 300px;
    /* Adjusted width for desktop screens */
    width: 300px;
  }
`;

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Gallery</Title>
        <Desc>
          Here are some of the images of our guards at work. Contact us to know
          more about our services.
        </Desc>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill key={skill.id} imageUrl={skill.image}></Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
