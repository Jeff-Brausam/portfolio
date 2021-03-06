import React from 'react';
import styled from 'styled-components';
import color from '../../styles/config/colors';
import grid from '../../styles/config/grid';
// import NavBrand from './NavBrand/NavBrand';
import ContactButton from './ContactButton/ContactButton';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      {/* <GridContainer><NavBrand /></GridContainer> */}
      <ContactButton />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 5rem;
  background: ${color.gray900};
  display: grid;
  grid-template-columns: ${grid.gridTemplateColumnParent};
  box-shadow: 3px 2px 6px rgba(0, 0, 0, 0.15);
  z-index: 1;
`;

// const GridContainer = styled.div`
//   grid-column: ${grid.gridColumnContainer};
//   grid-row: 1 / 2;

//   display: flex;
//   flex-direction: row;
//   align-items: center;
// `;

export default Header;
