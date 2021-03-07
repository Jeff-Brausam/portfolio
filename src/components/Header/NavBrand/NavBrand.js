import React from 'react';
import styled from 'styled-components';
import color from '../../../styles/config/colors';
import sizing from '../../../styles/config/sizing';

const BrandLink = styled.a`
  color: ${color.white};
  margin-left: ${sizing.size5};
  font-size: 1.3rem;
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