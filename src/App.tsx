import './App.css';
import React from 'react';
import Body from './components/static/body';
import Footer from './components/static/footer';
import Header from './components/static/header';
import StaticPage from './components/static-page';
import BusinessCard from './components/business-card';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <StaticPage />
      <BusinessCard />
      <Footer />
    </div>
  );
}

export default App;
