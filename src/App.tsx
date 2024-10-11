import React, { useContext, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Context } from './Provider';
import $ from 'jquery';

interface AppProps {
  text?: string;
  backgroundColor?: string;
}

const App: React.FC<AppProps> = ({ text = 'React Component', backgroundColor }) => {
  const { clickCount, plusClickCount} = useContext(Context);
  const jqueryTextID = 'jquery-click-count-' + text;
  const jqueryButtonID = 'jquery-button-' + text;

  useEffect(() => {
    let count = 0;
    const handleClick = () => {
      count++;
      $('#' + jqueryTextID).html('<p>' + count + '</p>');
    };

    $('#' + jqueryTextID).html('<p>' + count + '</p>');
    $('#' + jqueryButtonID).on('click', handleClick);
    return () => {
      $('#' + jqueryButtonID).off('click', handleClick);
    };
  }, [jqueryTextID, jqueryButtonID]);

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: backgroundColor }}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>{text}</p>
        <p>{clickCount}</p>
        <button className='App-button' onClick={plusClickCount}>plus count</button>
        <p id={jqueryTextID}></p>
        <button id={jqueryButtonID} className='App-button'>jquery plus count</button>
      </header>
    </div>
  );
};

export default App;
