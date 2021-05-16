import React from 'react';
import styled from 'styled-components';
import color from '../../../styles/config/colors';

const NavBrand: React.FC = () => {
  return <BrandLink href='#'>Jeff Brausam</BrandLink>;
};

const BrandLink = styled.a`
  color: ${color.black};
  font-size: 1.4rem;
  font-weight: 500;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: ${color.gray600};
  }
`;

export default NavBrand;
