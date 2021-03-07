import React from 'react';
import styled from 'styled-components';
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import color from '../../styles/config/colors';

const Wrapper = styled.main`
  flex-basis: 100vw;
  background-color: ${color.white};
  display: flex;
  flex-direction: column;
`;

const Main = () => {
  return (
    <Wrapper>
      <Hero />
      <Projects />
      <Contact />
    </Wrapper>
  )
}

export default Main;