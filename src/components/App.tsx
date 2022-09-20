import './App.css';
import React from 'react';
import Body from './static/body';
import Footer from './static/footer';
import Header from './static/header';
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
