import './App.css';
import React from 'react';
import Body from './components/static/body';
import Footer from './components/static/footer';
import Header from './components/static/header';
import StaticPage from './components/static-page';
import BusinessCard from './components/business-card';
import {Routes, Route, useNavigate} from 'react-router-dom';
import VrboNav from './components/vrbo/vrbo-nav';


function App() {

  const navigate = useNavigate();

  const headerProps = {
    navigateToStaticPage: () => navigate('/'),
    navigateToBody: () => navigate('/body'),
    navigateToCard: () => navigate('/card'),
    navigateToVrbo: () => navigate('/vrbo')
  };

  return (
      <div className="App">
        <Header {...headerProps}/>
        <Routes>
            <Route path="/" element={<StaticPage />} />
            <Route path="/card" element={<BusinessCard />} />
            <Route path="/body" element={<Body />} />
            <Route path="/vrbo" element={<VrboNav />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
