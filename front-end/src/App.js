import './App.css';
import React from 'react';
import WebsiteHeader from './components/WebsiteHeader';
import InputBox from './components/InputBox';
import ArrowPointer from './components/ArrowPointer';
import OutputBox from './components/OutputBox';
import WebsiteFooter from './components/WebsiteFooter';


function App() {
  return (
    <div className="App">
      
      <section id = "WebsiteHeader">
        <WebsiteHeader />
      </section>
      
      <section id = "InputBox">
        <InputBox />
      </section>

      <section id = "ArrowPointer">
        <ArrowPointer />
      </section>

      <section id = "OutputBox">
        <OutputBox />
      </section>

      <section id = "WebsiteFooter">
        <WebsiteFooter />
      </section>
    
    </div>
  );
}

export default App;
