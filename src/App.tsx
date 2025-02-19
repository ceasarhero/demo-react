import React from 'react';
import './App.css';
import Buttoncompo from './components/buttonComponent';
import Showgraph from './components/graphcompo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Buttoncompo textForButton='This is a custom Button'/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <h1>Learn with summit</h1>
        </a>
        Lorem ipsum cati, atque dolor quam at voluptatum facere, cum doloribus pariatur necessitatibus us nesciunt autem officiis sapiente? Libero modi debitis quisquam tenetur.
        <Showgraph textsForParagraph=''/>
        <Buttoncompo  textForButton='Never Click Here'/>
      </header>
    </div>
  );
}

export default App;
