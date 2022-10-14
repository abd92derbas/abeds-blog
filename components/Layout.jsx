// must use this logic in order to make the header availble for all images
import React from 'react';
import Header from './Header';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
