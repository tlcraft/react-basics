import './App.css';
import React from 'react';
import Body from './components/static/body';
import Footer from './components/static/footer';
import Header from './components/static/header';
import StaticPage from './components/static-page';
import BusinessCard from './components/business-card';
import {Routes, Route, useNavigate} from 'react-router-dom';


function App() {

  const navigate = useNavigate();
  const navigateToStaticPage = () => {
      navigate('/');
  };

  const navigateToBody = () => {
    navigate('/body');
  }

  const navigateToCard = () => {
    navigate('/card');
  };

  const headerProps = {
    navigateToStaticPage: navigateToStaticPage,
    navigateToBody: navigateToBody,
    navigateToCard: navigateToCard
  };

  return (
      <div className="App">
        <Header {...headerProps}/>
        <Routes>
            <Route path="/" element={<StaticPage />} />
            <Route path="/card" element={<BusinessCard />} />
            <Route path="/body" element={<Body />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
