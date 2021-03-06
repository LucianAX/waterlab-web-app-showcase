import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// import logo from './logo.svg';
// import './App.css';
import Layout from './components/layout/Layout.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;