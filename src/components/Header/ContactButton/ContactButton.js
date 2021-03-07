import React from 'react';
import styled from 'styled-components';
import sizing from '../../../styles/config/sizing';
import breakpoint from '../../../styles/config/breakpoints';
import Button from '../../UI/Button/Button';

const StyledContactButton = styled(Button)`
    position: fixed;
    right: 10%;
    top: ${sizing.size5};
    z-index: 200;
    box-shadow: 1px 3px 5px rgba(0,0,0,.2);
    
  @media ${`(max-width: ${breakpoint.small})`} {
    /* Top fix on mobile */
    top: ${sizing.size2}
  }
`;

const ContactButton = () => {
  return (
    <a href="#contact">
      <StyledContactButton primary>
        Contact
      </StyledContactButton>
    </a>
  )
}

export default ContactButton;