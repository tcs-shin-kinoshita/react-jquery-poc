import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { Context } from './Provider';

interface AppProps {
  text?: string;
  backgroundColor?: string;
}

const App: React.FC<AppProps> = ({ text = 'React Component', backgroundColor }) => {
  const { clickCount, plusClickCount} = useContext(Context);

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: backgroundColor }}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>{text}</p>
        <p>{clickCount}</p>
        <button className='App-button' onClick={plusClickCount}>plus count</button>
      </header>
    </div>
  );
};

export default App;
