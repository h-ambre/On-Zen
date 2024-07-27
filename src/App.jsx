import React from 'react';
import { BrowserRouter as Router,} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import './index.css'
import HomePage from './components/HomePage/HomePage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <HomePage />
    </Router>
  );
};

export default App;
