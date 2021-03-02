import React from 'react';
import styled from 'styled-components';
import color from '../../../styles/config/colors';
import sizing from '../../../styles/config/sizing';
import grid from '../../../styles/config/grid';
import breakpoint from '../../../styles/config/breakpoints';
import HeroSVG from './HeroSVG';

const Wrapper = styled.section`
  background-color: ${color.gray100};
  flex-basis: 80vh;
  
  display: grid;
  grid-template-columns: ${grid.gridTemplateColumnParent};
`;
const GridContainer = styled.div`
  grid-column: 1 / 4;
  background-color: ${color.white};
  display: flex;
  flex-direction: column;
  align-content: center;
  box-shadow: 2px 3px 10px rgba(0,0,0,.2);


  @media ${`(min-width: ${breakpoint.screenMed})`} {
    grid-column: ${grid.gridColumnContainer};
    flex-direction: row;
    
  }
`;


const ContentContainer = styled.div`
  flex: 1 1 50%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
    
  @media ${`(min-width: ${breakpoint.screenMed})`} {
    justify-content: center;
    
  }
  
  &:nth-child(2){
    align-items: center;
    justify-content: flex-start;
    margin-top: ${sizing.size7};
    @media ${`(min-width: ${breakpoint.screenMed})`} {
      justify-content: center;
    }
  }
`;

const Title = styled.h1`
  line-height: 1em;
  font-weight: 400;
  margin: ${sizing.size3} ${sizing.size4};
`;
const StyledCatchPhrase = styled.p`
  margin-left: ${sizing.size4};
font-weight: 300;
`;
const Hero = () => {
  return (
    <Wrapper>
      <GridContainer>
        <ContentContainer>
          <Title>Frontend Developer</Title>
          <StyledCatchPhrase>I create scalable, optimized, performant web applications</StyledCatchPhrase>
        </ContentContainer>
        <ContentContainer>
          <HeroSVG />
        </ContentContainer>
      </GridContainer>
    </Wrapper>
  )
}

export default Hero;