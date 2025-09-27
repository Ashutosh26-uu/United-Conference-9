import React from 'react';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Header from './components/Header';
import Home from './components/Home';
import KeyAreas from './components/KeyAreas';
import ImportantDates from './components/ImportantDates';
import Papers from './components/paper';
import Registration from './components/Registration';
import Venue from './components/Venue';
import Speakers from './components/Speakers';
import OrganizationalTree from './components/OrganizationalTree';
import AboutPrayagraj from './components/AboutPrayagraj';
import Footer from './components/Footer';
import InteractiveElements from './components/InteractiveElements';
import { FloatingElements } from './components/CreativeElements';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="key-areas">
          <KeyAreas />
        </section>
        <section id="important-dates">
          <ImportantDates />
        </section>
        <section id="papers">
          <Papers />
        </section>
        <section id="registration">
          <Registration />
        </section>
        <section id="speakers">
          <Speakers />
        </section>
        <section id="organizing-committee">
          <OrganizationalTree />
        </section>
        <section id="venue">
          <Venue />
        </section>
        <section id="about-prayagraj">
          <AboutPrayagraj />
        </section>
      </main>
      <InteractiveElements />
      <FloatingElements />
      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;