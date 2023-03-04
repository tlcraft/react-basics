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


function App() {

  const navigate = useNavigate();

  const headerProps = {
    navigateToStaticPage: () => navigate('/'),
    navigateToBody: () => navigate('/body'),
    navigateToCard: () => navigate('/card'),
    navigateToVrbo: () => navigate('/vrbo'),
    navigateToMeme: () => navigate('/meme')
  };

  return (
      <div className="App">
        <Header {...headerProps}/>
        <Routes>
            <Route path="/" element={<StaticPage />} />
            <Route path="/card" element={<BusinessCard />} />
            <Route path="/body" element={<Body />} />
            <Route path="/vrbo" element={<Vrbo />} />
            <Route path="/meme" element={<Meme />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
