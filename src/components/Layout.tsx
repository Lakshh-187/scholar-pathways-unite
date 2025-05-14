
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
    <div className="relative flex min-h-screen flex-col">
 <NotificationBanner className="absolute top-0 w-full z-50" />
 <div className="pt-[50px]"> {/* Add padding equal to the banner height */}
 <NavBar />
 <main className="flex-grow">{children}</main>
 <Footer />
 <WhatsAppHelpDesk />
 </div>
    </div>
  );
};

export default Layout;
