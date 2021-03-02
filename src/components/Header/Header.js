import React from 'react';
import styled from 'styled-components';
import color from '../../styles/config/colors';
import grid from '../../styles/config/grid';
import NavBrand from './NavBrand/NavBrand';
import ContactButton from './ContactButton/ContactButton';

const StyledHeader = styled.header`
  /* grid-column: 1 / 3; */
  flex-basis: 100%;
  height: 6vh;
  background: ${color.white};
  
  display: grid;
  grid-template-columns: ${grid.gridTemplateColumnParent};
  box-shadow: 3px 2px 6px rgba(0,0,0,.15);
  z-index: 1;
`;

const GridContainer = styled.div`
  grid-column: ${grid.gridColumnContainer};
  /* border-bottom: 4px solid ${color.gray50}; */
  grid-row: 1 / 2;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Header = () => {
  return (
    <StyledHeader>
      <GridContainer>
        <NavBrand />
      </GridContainer>
      <ContactButton />
    </StyledHeader>
  )
};


export default Header;