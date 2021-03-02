import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: wrap;
 /* Master Page Layout Grid Settings */
 /* Header / Main / Footer */
  grid-template-rows: 6vh 370vh 20vh;
`

const Layout = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
};

export default Layout;