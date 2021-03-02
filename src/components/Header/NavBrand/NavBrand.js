import React from 'react';
import styled from 'styled-components';
import color from '../../../styles/config/colors';

const BrandLink = styled.a`
  grid-row: 1 / 2;
  align-self: center;
  justify-content: center;
  color: ${color.black};
  font-size: 1.3em;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: ${color.gray600};
  }
`;

const NavBrand = () => {
  return (
      <BrandLink href="#">Jeff Brausam</ BrandLink>
  );
};

export default NavBrand;