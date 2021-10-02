import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div className="lines">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
