import React from 'react';
import styled from 'styled-components';
import breakpoint from '../../../../../styles/config/breakpoints';
import sizing from '../../../../../styles/config/sizing';
import color from '../../../../../styles/config/colors';
import Button from '../../../../UI/Button/Button';

const InfoContainer = styled.article`
  display: flex;
  flex-flow: column;
  flex-basis: ${sizing.size13};
`;

const Title = styled.h3`
  font-weight: 300;
`;

const Description = styled.p`
  margin-top: ${sizing.size3};
  color: ${color.gray600};
  font-weight: 300; 
`;

const TagsContainer = styled.div`
  margin-top: ${sizing.size5};  
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.p`
  margin-top: ${sizing.size2};
  color: ${color.gray600};
  font-weight: 200;
  text-align: left;
  flex: 1 1 50%;

  @media ${`(min-width: ${breakpoint.med})`} {
    order: 1;
  }
`;

const ButtonsContainer = styled.div`
  margin-top: ${sizing.size5};
  display: flex;
  
  a {
    flex: 1 1 50%;
  }
`;

const Link = styled.a`
  &:hover{
    cursor: pointer;
  }
`;

const ProjectInfo = ({title, description, tags, links}) => {
  return (
      <InfoContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <TagsContainer> 
        {tags.map((tag) => { 
          return <Tag key={tag}>{tag}</Tag> })}
      </TagsContainer>
      <ButtonsContainer>
        <Link href={links.demo}>
          <Button>Demo</Button>
        </Link>
        <Link href={links.repo}>
          <Button>Repo</Button>
        </Link>
      </ButtonsContainer>
    </InfoContainer>
  );
}

export default ProjectInfo;