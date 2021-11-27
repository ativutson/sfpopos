import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Title from '../components/Title/Title';
import POPOSList from '../components/POPOSList/POPOSList';
import POPOSDetails from '../components/POPOSDetails/POPOSDetails';
import Footer from '../components/Footer/Footer';
import About from '../components/About/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Routes> 
            <Route exact path="/" element={<POPOSList />} />
            <Route path="/about" element={<About />} />
            <Route path="/details/:id" element={(props) => <POPOSDetails {...props}/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
