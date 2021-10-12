import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GlobalStyle from './global';
import Background from './components/Background';

ReactDOM.render(
  <React.StrictMode style={{ position: 'relative' }}>
    <App />
    <Background />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root'),
);
