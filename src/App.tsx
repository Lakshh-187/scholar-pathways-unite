import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Contact from './pages/Contact';
import About from './pages/About';
import Memories from './pages/Memories';
import GFT from './pages/GFT';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Toaster } from "@/components/ui/toaster"
import {
  QueryClient,
} from '@tanstack/react-query'
import CertificateAwards from "./pages/CertificateAwards";

function App() {
  return (
    <QueryClient>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/memories" element={<Memories />} />
            <Route path="/gft" element={<GFT />} />
            <Route path="/certificate-awards" element={<CertificateAwards />} />
          </Routes>
        </Router>
        <Toaster />
      </div>
    </QueryClient>
  );
}

export default App;
