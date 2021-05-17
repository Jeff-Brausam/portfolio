import React from 'react';
import styled from 'styled-components';
import color from '../../../../styles/config/colors';
import breakpoint from '../../../../styles/config/breakpoints';
import sizing from '../../../../styles/config/sizing';
import grid from '../../../../styles/config/grid';
import ProjectInfo from './ProjectInfo/ProjectInfo';
import ProjectPhoto from './ProjectPhoto/ProjectPhoto';

const Wrapper = styled.section`
  flex-basis: 50vh;
  background-color: ${color.gray100};

  display: grid;
  grid-template-columns: ${grid.gridTemplateColumnParent};
`;

const Container = styled.div`
  grid-column: 1 / 4;
  height: 30.4rem;
  background-color: ${color.white};
  padding: ${sizing.size6};
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  @media ${`(min-width: ${breakpoint.med})`} {
    grid-column: ${grid.gridColumnContainer};
    flex-direction: row;
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
  @media ${`(min-width: ${breakpoint.med})`} {
    /* Flips picture and info wrapper positions every odd render */
    order: ${(props) => (props.order % 2 === 0 ? '-1' : '1')};
  }
`;

const InfoWrapper = styled(StyledWrapper)`
  order: 1;
`;

const Project = ({title, description, tags, image, links, order}) => {
  return (
    <Wrapper>
      <Container>
        <InfoWrapper>
          <ProjectInfo
            title={title}
            description={description}
            tags={tags}
            links={links}
          />
        </InfoWrapper>
        <PictureWrapper order={order}>
          <ProjectPhoto image={image} />
        </PictureWrapper>
      </Container>
    </Wrapper>
  );
};

export default Project;
