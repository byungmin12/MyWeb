import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GlobalStyle from './global';

ReactDOM.render(
  <Suspense fallback={<div>로딩중입니다.</div>}>
    <App />
    <GlobalStyle />
  </Suspense>,
  document.getElementById('root'),
);
