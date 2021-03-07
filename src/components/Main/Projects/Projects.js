import React from 'react';
import styled from 'styled-components';
import Images from '../../../assets/Images';
import Project from './Project/Project';
import color from '../../../styles/config/colors';
import sizing from '../../../styles/config/sizing';

const ProjectsData = [
  {
    title: "Mockup",
    description: "Ecommerce Styled Store",
    tags: ["React", "Firebase", "CSS Modules", "Authentication"],
    image: {
      side:"left",
      url: Images.projects.mockup.url,
      alt: Images.projects.mockup.alt,
    },
     links: {
      demo: "https://jeff-brausam.github.io/mockup-online-store/",
      repo: "https://github.com/Jeff-Brausam/mockup-online-store",
    },
  },
  {
    title: "Calculator",
    description: "Solve math equations with precision and ease",
    tags: ["HTML5", "Javascript", "CSS", "Application"],
    image: {
      url: Images.projects.calculator.url,
      alt: Images.projects.calculator.alt,
    },
     links: {
      demo: "https://jeff-brausam.github.io/calculator-app/",
      repo: "https://github.com/Jeff-Brausam/calculator-app",
    },
  },
  {
    title: "To-do App",
    description: "Track and maintain the things that you need to get done",
    tags: ["React", "Javascript", "LocalStorage", "CSS"],
    image: {
      url: Images.projects.ToDoList.url,
      alt: Images.projects.ToDoList.alt,
    },
    links: {
      demo: "https://jeff-brausam.github.io/to-do-list/",
      repo: "https://github.com/Jeff-Brausam/to-do-list",
    },
  },
  {
    title: "Weather App",
    description: "Five day weather forecast",
    tags: ["HTML5", "API", "Javascript", "CSS"],
    image: {
      url: Images.projects.weatherApp.url,
      alt: Images.projects.weatherApp.alt,
    },
    links: {
      demo: "https://jeff-brausam.github.io/weather-app/",
      repo: "https://github.com/Jeff-Brausam/weather-app",
    },
  },
];

const StyledWrapper = styled.article`
  display: flex;
  background-color: ${color.gray100};
  flex-direction: column;
`;

const Container = styled.div`
  background-color: ${color.gray100};
  height: 12vh;
  margin: 0 10%;

  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: row;
  margin-bottom: ${sizing.size7};
`;

const Heading = styled.h3`
  color: ${color.gray500};
  margin-left: ${sizing.size5};
`;

const Projects = () => {
  const allProjects = ProjectsData.map(({ title, description, tags, image, links }, i) => {
    return (
      <Project
        key={i}
        order={i}
        description={description}
        image={image}
        tags={tags}
        title={title}
        links={links}
      />
    )
  });
  return (
    <StyledWrapper>
      <Container>
        <Heading>Portfolio</Heading>
      </Container>
      {allProjects}
    </StyledWrapper>
  )
};

export default Projects;