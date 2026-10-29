import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { pages } from './pages';
import { initializeInteractions } from './lib/interactions.js';

export default function App() {
  const pathname = window.location.pathname.replace(/\/$/, '');
  const filename = pathname.split('/').pop() || 'index.html';
  const page =
    pages[filename] || pages[`${filename}.html`] || pages['404-error.html'];
  const { Component, title, lang } = page;

  useEffect(() => {
    document.title = `${title} | SkinTherapie - Kinésithérapie & Soin Médico-Esthétique`;
    document.documentElement.lang = lang;
    return initializeInteractions();
  }, [title, lang]);

  return (
    <>
      <Navbar />
      <Component />
      <Footer />
    </>
  );
}
