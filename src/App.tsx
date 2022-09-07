import './App.css';
import React from 'react';
import Body from './components/static/body';
import Footer from './components/static/footer';
import Header from './components/static/header';
import StaticPage from './static-page';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <StaticPage />
      <Footer />
    </div>
  );
}

export default App;
