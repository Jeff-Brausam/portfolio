import React from 'react';
import styled from 'styled-components';
import grid from '../../styles/config/grid';
import color from '../../styles/config/colors';
import sizing from '../../styles/config/sizing';

const links = [
  {
    name: "Resume",
    href: "https://docs.google.com/document/d/1K_TrtDiOsUowKrvFaCBI7CDdd7lPhp8YOoiZotqY7RQ/edit?usp=sharing"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jeff-brausam-7584a2125/"
  },
  {
    name: "Github",
    href: "https://github.com/Jeff-Brausam"
  },
  {
    name: "Email",
    href: "mailto:jeffbrausam@gmail.com"
  },
];

const Wrapper = styled.footer`
  flex-basis: 100%;
  background-color: ${color.black};
  display: grid;
  grid-template-columns: ${grid.gridTemplateColumnParent};
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`;

const GridContainer = styled.div`
  grid-column: ${grid.gridColumnContainer};
  display: flex;
  flex-flow: row;
  align-content: center;
`;

const StyledLink = styled.a`
  text-decoration: none;
  font-size: 1em;
  color: ${color.white};
  margin-top: ${sizing.size2};

  &:hover{
   cursor: pointer;
   opacity: 1.4;
  }
`;


const Footer = () => {
  return (
    <Wrapper>
      <GridContainer>
        <LinkContainer>
          {
            links.map(({ name, href }) => {
              return <StyledLink key={name} href={href}>{name}</StyledLink>
            })
          }
        </LinkContainer>
      </GridContainer>
    </Wrapper>
  )
};

export default Footer;