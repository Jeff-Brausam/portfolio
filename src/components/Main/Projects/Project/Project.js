import React from 'react';
import styled from 'styled-components';
import color from '../../../../styles/config/colors';
import breakpoint from '../../../../styles/config/breakpoints';
import grid from '../../../../styles/config/grid';
import sizing from '../../../../styles/config/sizing';
import ProjectPhoto from '../Project/ProjectPhoto/ProjectPhoto';
import Button from '../../../UI/Button/Button';

const Wrapper = styled.section`
  flex-basis: 50vh;
  background-color: ${color.gray100};

  display: grid;
  grid-template-columns: ${grid.gridTemplateColumnParent};
`;

const Container = styled.div`
  box-shadow: 2px 3px 10px rgba(0,0,0,.2);
  background-color: ${color.white};
  height: 30em;
  display: flex;
  flex-direction: column;
  grid-column: 1 / 4;
  @media ${`(min-width: ${breakpoint.screenMed})`} {
  grid-column: ${grid.gridColumnContainer};
  flex-flow: row nowrap;
  }
`;
  
const StyledWrapper = styled.div`
  flex: 1 1 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PictureWrapper = styled(StyledWrapper)`
  order: -1;
  @media ${`(min-width: ${breakpoint.screenMed})`} {
    order: ${props => props.left ? '-1' : '1'};
  }
`;

const InfoWrapper = styled(StyledWrapper)`
  order: 1;
`;

const InfoContainer = styled.article`
  flex-basis: 100%;
  display: flex;
  flex-flow: column;
  @media ${`(min-width: ${breakpoint.screenMed})`} {
    flex: 1 1 50%;
  }
`;



const Title = styled.h3`
  font-weight: 300;
  margin: 0;
  margin-left: 2rem;
`;

const Description = styled.p`
  margin-top: ${sizing.size4};
  margin-left: 2rem;
  font-weight: 300; 
`;

const TagsContainer = styled.div`
  margin-left: 2rem;
  width: 50%;
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.p`
  font-weight: 200;
  margin: .3rem 0;
  flex: 1 1 8rem;
  text-align: left;
  color: ${color.gray400};

  @media ${`(min-width: ${breakpoint.screenMed})`} {
    order: 1;
  }

`;

const ButtonContainer = styled.div`
  margin-top: ${sizing.size6};
  width: 22rem;
  
  button:nth-of-type(2){
    margin-left: ${sizing.size9}
  }
`;

const Project = ({ title, description, tags, image, order }) => {
  let picture;
  if (order % 2 == 0) {
    picture = (
      <PictureWrapper left>
        <ProjectPhoto image={image} />
      </PictureWrapper>
    )
  } else {
    picture = (
      <PictureWrapper>
        <ProjectPhoto image={image} />
      </PictureWrapper>
    )
  }; 

  return (
    <Wrapper>
      <Container>
        <InfoWrapper>
          {/* Break into Info Part */}
          <InfoContainer>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <TagsContainer>
              {tags.map((tag) => { 
                return <Tag key={tag}>{tag}</Tag> })}
            </TagsContainer>
            <ButtonContainer>
              <Button>Demo</Button>
              <Button>Repo</Button>
            </ButtonContainer>
          </InfoContainer>
          {/* Break this */}
        </InfoWrapper>
        {picture}
      </Container>
    </Wrapper>
  )
}

export default Project;