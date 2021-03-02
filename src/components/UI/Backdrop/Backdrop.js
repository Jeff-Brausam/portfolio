import React from 'react';
import styled from 'styled-components';

const StyledBackdrop = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 100;
  background-color: rgba(0,0,0,.7);
  position: fixed;
`

const Backdrop = ({close}) => {
  return (
    <StyledBackdrop onClick={close}/>
  )
}

export default Backdrop;