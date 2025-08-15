
import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import WhatsAppHelpDesk from './WhatsAppHelpDesk';
import LinkedInHelpDesk from './LinkedInHelpDesk';
import NotificationBanner from './NotificationBanner';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <NotificationBanner />
      <div className="pt-12"> {/* Add padding equal to the banner height (48px/3rem) */}
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppHelpDesk />
        <LinkedInHelpDesk />
      </div>
    </div>
  );
};

export default Layout;
