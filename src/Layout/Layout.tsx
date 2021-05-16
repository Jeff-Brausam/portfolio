import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const Layout: React.FC = ({children}) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Layout;
