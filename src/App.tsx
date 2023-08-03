import './App.css';
import React from 'react';
import Body from './components/static/body';
import Footer from './components/static/footer';
import Header from './components/static/header';
import StaticPage from './components/static-page';
import BusinessCard from './components/business-card';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Vrbo from './components/vrbo/vrbo';
import Meme from './components/meme/meme';
import ScratchPad from './components/scratch-pad/scratch-pad';


function App() {

  const navigate = useNavigate();

  const headerProps = {
    navigateToStaticPage: () => navigate('/'),
    navigateToBody: () => navigate('/body'),
    navigateToCard: () => navigate('/card'),
    navigateToVrbo: () => navigate('/vrbo'),
    navigateToMeme: () => navigate('/meme'),
    navigateToScratchPad: () => navigate('/scratch-pad'),
    toggleDarkMode: () => { console.log("Toggle Dark Mode"); }
  };

  return (
    <>
      <div className="App">
        <Header {...headerProps}/>
        <Routes>
            <Route path="/" element={<StaticPage />} />
            <Route path="/card" element={<BusinessCard />} />
            <Route path="/body" element={<Body />} />
            <Route path="/vrbo" element={<Vrbo />} />
            <Route path="/meme" element={<Meme />} />
            <Route path="/scratch-pad" element={<ScratchPad />} />
        </Routes>
        <div className="footer-spacing"></div>
      </div>
      <Footer />
    </>
  );
}

export default App;
