import React from 'react';
import styled from 'styled-components';
import color from '../../../styles/config/colors';
import sizing from '../../../styles/config/sizing';
import grid from '../../../styles/config/grid';
import breakpoint from '../../../styles/config/breakpoints';
import HeroSVG from './HeroSVG';

const Wrapper = styled.section`
  background-color: ${color.gray100};
  flex-basis: 90vh;
  background-color: ${color.purple400};
  
  display: grid;
  grid-template-columns: ${grid.gridTemplateColumnParent};
`;

const GridContainer = styled.div`
  grid-column: 1 / 4; 
  display: flex;
  flex-direction: column;
 
  @media ${`(min-width: ${breakpoint.med})`} {
    grid-column: ${grid.gridColumnContainer};
    flex-direction: row;
  }
`;

const ContentContainer = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;

  &:nth-of-type(2){
    display: none;
    flex-basis: 0;
  }

  @media ${`(min-width: ${breakpoint.med})`} {
  &:nth-of-type(2){
    display: flex;
    flex-basis: 50%;
  }
} 
`;

const InfoContainer = styled.div`
  flex-basis: ${sizing.size15};
  padding: ${sizing.size5};
`;

const Title = styled.h1`
  line-height: 1em;
  font-weight: 400;
  text-shadow: 2px 2px 6px rgba(0,0,0,.2);
  align-items: flex-end;
  color: ${color.white};
`;

const StyledCatchPhrase = styled.p`
  text-shadow: 2px 2px 6px rgba(0,0,0,.2);
  margin-top: ${sizing.size4};
  font-weight: 300;
  color: ${color.white};
  align-items: flex-end;
`;

const Hero = () => {
  return (
    <Wrapper>
      <GridContainer>
        <ContentContainer>
          <InfoContainer>
            <Title>Frontend Developer</Title>
            <StyledCatchPhrase>I create scalable, optimized, performant web applications</StyledCatchPhrase>
          </InfoContainer>
        </ContentContainer>
        <ContentContainer>
          <HeroSVG />
        </ContentContainer>
      </GridContainer>
    </Wrapper>
  )
};

export default Hero;