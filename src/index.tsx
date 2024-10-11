import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from './Provider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider>
      <App text='ReactComponent1' backgroundColor='darkblue' />
    </Provider>
  </React.StrictMode>
);

const root2 = ReactDOM.createRoot(
  document.getElementById('root2') as HTMLElement
);
root2.render(
  <React.StrictMode>
    <Provider>
      <App text='ReactComponent2' backgroundColor='darkgreen' />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
