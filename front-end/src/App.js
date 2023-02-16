import './App.css';

import WebsiteHeader from './components/WebsiteHeader';
import InputArea from './components/InputArea';
import ArrowPointer from './components/ArrowPointer';
import OutputBox from './components/OutputBox';
import WebsiteFooter from './components/WebsiteFooter';

function App() {
  return (
    <div className="App">

      <section id = "WebsiteHeader">
        <WebsiteHeader />
      </section>

      <hr />

      <section id = "InputArea">
        <InputArea />
      </section>

      <section id = "ArrowPointer">
        <ArrowPointer />
      </section>

      <section id = "OutputArea">
        <OutputBox />
      </section>

      <hr />

      <section id = "WebsiteFooter">
        <WebsiteFooter />
      </section>

    </div>
  );
}

export default App;
