import React from 'react';
import styled from 'styled-components';
import sizing from '../../../styles/config/sizing';
import Button from '../../UI/Button/Button';

const StyledContactButton = styled(Button)`
    position: fixed;
    right: 10%;
    top: ${sizing.size4};
    z-index: 200;
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