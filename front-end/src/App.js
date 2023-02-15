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
      <WebsiteHeader />
      <InputBox />
      <ArrowPointer />
      <OutputBox />
      <WebsiteFooter />
    </div>
  );
}

export default App;
