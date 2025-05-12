
import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import WhatsAppHelpDesk from './WhatsAppHelpDesk';
import NotificationBanner from './NotificationBanner';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <NotificationBanner />
      <NavBar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <WhatsAppHelpDesk />
    </div>
  );
};

export default Layout;
