import React from 'react';
// Components
import Header from '../components/Header/Header';
import Footer from '../components/footer/Footer';
// Interfaces
import { MainLayoutProps } from '../types/MainLayoutProps';
import Block from '../components/Block/Block';

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <main>{children}</main>
      <Block  />
      <Footer />
    </div>
  );
};

export default MainLayout;