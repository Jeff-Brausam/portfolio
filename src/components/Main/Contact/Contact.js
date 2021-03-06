import React from 'react';
import styled from 'styled-components';
import color from '../../../styles/config/colors';
import grid from '../../../styles/config/grid';
import Form from './Form/ContactForm';

const StyledWrapper = styled.section`
  background-color: ${color.gray800};
  flex-basis: 90vh;
  display: grid;
  place-items: center;
  grid-template-columns: ${grid.gridTemplateColumnParent};
`;

const GridContainer = styled.div`
  grid-column: 1 / 4;
  display: flex;
  flex-direction: row;
  align-content: center;
`;

const StyledFormContainer = styled.div`
  flex-basis: 100%;
`;

const Contact = () => {
  return (
    <StyledWrapper id="contact">
      <GridContainer>
        <StyledFormContainer>
          <Form />
        </StyledFormContainer>
      </GridContainer>
    </StyledWrapper>
  )
}

export default Contact;