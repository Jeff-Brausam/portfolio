import React from 'react';
import styled from 'styled-components';
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import color from '../../styles/config/colors';

const Main: React.FC = () => {
  return (
    <Wrapper>
      <Hero />
      <Projects />
      <Contact />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  flex-basis: 100vw;
  background-color: ${color.white};
`;

export default Main;
