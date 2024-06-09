import React from "react";
import {
  Container,
  Wrapper,
  Title,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
  ImageContainer,
  Image,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/projectCard";
import { projects } from "../../data/constants";
import pic from "../../asset/s.png";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = React.useState("all");

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Services</Title>
        <ToggleButtonGroup>
          <ToggleButton
            active={toggle === "all"}
            onClick={() => setToggle("all")}
          >
            All
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "Security Service"}
            onClick={() => setToggle("Security Service")}
          >
            Security Service
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "Facility Service"}
            onClick={() => setToggle("Facility Service")}
          >
            Facility Service
          </ToggleButton>
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
        <ImageContainer>
          <Image src={pic} alt="Services" />
        </ImageContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
