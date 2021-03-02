import React from 'react';
import styled from 'styled-components';
// import color from '../../../styles/config/colors';
import Images from '../../../assets/Images';
import Project from './Project/Project';

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
      demo: "",
      repo: "",
    }
  },
  {
    title: "Calculator",
    description: "Solve math equations with precision and ease",
    tags: ["HTML5", "Javascript", "CSS", "Application"],
    image: {
      url: Images.projects.calculator.url,
      alt: Images.projects.calculator.alt,
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
  },
  {
    title: "Weather App",
    description: "Five day weather forecast",
    tags: ["HTML5", "API", "Javascript", "CSS"],
    image: {
      url: Images.projects.weatherApp.url,
      alt: Images.projects.weatherApp.alt,
    },
  },
];

const StyledWrapper = styled.article`
  display: flex;
  flex-direction: column;
`;

const Projects = () => {
  const allProjects = ProjectsData.map(({ title, description, tags, image }, i) => {
    return (
      <Project
        key={i}
        order={i}
        description={description}
        image={image}
        tags={tags}
        title={title}
      />
    )
  });
  return (
    <StyledWrapper>
      {allProjects}
    </StyledWrapper>
  )
};

export default Projects;