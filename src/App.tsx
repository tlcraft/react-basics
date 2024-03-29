import './App.css';
import React, { createContext, useEffect, useState } from 'react';
import Body from './components/page-layout/body';
import Footer from './components/page-layout/footer';
import Header from './components/page-layout/header';
import StaticPage from './components/static-page/static-page';
import BusinessCard from './components/business-card/business-card';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Vrbo from './components/vrbo/vrbo';
import Meme from './components/meme/meme';
import ScratchPad from './components/scratch-pad/scratch-pad';
import Notes from './components/notes/notes';
import Tenzies from './components/tenzies/tenzies';

export const MessageContext = createContext("Context Example");

function App() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true);
  
  const headerProps = {
    navigateToStaticPage: () => navigate('/'),
    navigateToBody: () => navigate('/body'),
    navigateToCard: () => navigate('/card'),
    navigateToVrbo: () => navigate('/vrbo'),
    navigateToMeme: () => navigate('/meme'),
    navigateToScratchPad: () => navigate('/scratch-pad'),
    navigateToNotes: () => navigate('/notes'),
    navigateToTenzies: () => navigate('/tenzies'),
    toggleDarkMode: () => { setDarkMode(prevValue => !prevValue); },
    darkMode: darkMode
  };

  const darkModeProps = {
    darkMode: darkMode
  }

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <MessageContext.Provider value="Context Example">
      <div className={ darkMode ? "dark-mode App" : "App" }>
        <Header {...headerProps}/>
        <Routes>
            <Route path="/" element={<StaticPage {...darkModeProps } />} />
            <Route path="/card" element={<BusinessCard />} />
            <Route path="/body" element={<Body />} />
            <Route path="/vrbo" element={<Vrbo />} />
            <Route path="/meme" element={<Meme />} />
            <Route path="/scratch-pad" element={<ScratchPad />} />
            <Route path="/notes" element={<Notes {...darkModeProps }/>} />
            <Route path="/tenzies" element={<Tenzies />} />
        </Routes>
        <div className="footer-spacing"></div>
      </div>
      <Footer />
    </MessageContext.Provider>
  );
}

export default App;
