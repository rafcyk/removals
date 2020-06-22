import React from 'react';

import Navigation from './components/Navigation';
import Header from './sections/Header';
import About from './sections/About';
import Offer from './sections/Offer';
import Opinions from './sections/Opinions';
import Contact from './sections/Contact';

import './App.css';
import './Media.css';

function App() {

  window.addEventListener('scroll', () => {
    if(window.pageYOffset > 500 && window.innerWidth > 800){
      document.querySelector('nav').classList.add('transparent')
    }
    else if(window.pageYOffset < 500 && window.innerWidth > 800){
      document.querySelector('nav').classList.remove('transparent')
    }
  })

  return (
    <div className="App">
      <Navigation/>
      <Header/>
      <About/>
      <Offer/>
      <Opinions/>
      <Contact/>
    </div>
  );
}

export default App;
