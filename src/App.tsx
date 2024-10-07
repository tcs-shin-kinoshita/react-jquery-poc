import React from 'react';
import logo from './logo.svg';
import './App.css';

interface AppProps {
  text?: string;
  backgroundColor?: string;
}

const App: React.FC<AppProps> = ({ text = 'React Component', backgroundColor }) => {
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: backgroundColor }}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {text}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
