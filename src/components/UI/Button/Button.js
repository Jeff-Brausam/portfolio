import React from 'react';
import styled from 'styled-components';
import color from '../../../styles/config/colors'
import sizing from '../../../styles/config/sizing';

const Button = ({children, className, cb = f => f}) => {
  return (
    <button onClick={cb} className={className} onBlur={cb}>
      {children}
    </button>
  ); 
}

const StyledButton = styled(Button)`
  width: ${sizing.size9};
  height: ${sizing.size6};
  color: ${props => props.primary ? color.white : color.purple400};
  background-color: ${props => props.primary ? color.purple400: color.white};
  border: ${props => props.primary ? `none` : `1px solid ${color.gray200}`};
  font-size: inherit;
  outline: none;
  border-radius: 5%; 

  &:hover{
    color: ${props => props.primary ? color.white : color.purple300};
    background-color: ${props => props.primary ? color.purple300: color.gray50};
    cursor: pointer;
  }
`;

export default StyledButton;