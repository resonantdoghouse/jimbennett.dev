import React from 'react';
import { ThemeProvider } from 'styled-components';
import StyledLayout from './styled-layout';

const theme = {
  foreground: '#050505',
  background: 'white',
  faded: '#888',
};

const Layout = ({ pageTitle, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledLayout pageTitle={pageTitle}>{children}</StyledLayout>
    </ThemeProvider>
  );
};

export default Layout;