
import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import WhatsAppHelpDesk from './WhatsAppHelpDesk';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <WhatsAppHelpDesk />
    </div>
  );
};

export default Layout;
