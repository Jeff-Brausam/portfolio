import React from 'react';
import styled from 'styled-components';
import color from '../../../styles/config/colors';

const BrandLink = styled.a`
  color: ${color.white};
  font-size: 1.3rem;
  text-decoration: none;
  /* flex-basis: 10%; */
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