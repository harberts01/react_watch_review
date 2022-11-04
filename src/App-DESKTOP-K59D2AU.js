import React from 'react';
import './App.css';
import './lib/font-awesome/css/all.min.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Header } from './components/header';
import { Watchlist }  from './components/watchlist';
import {Add} from './components/Add';
// import {FiveStars} from './components/five-stars';
import { GlobalProvider } from './context/GlobalState';



function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header/>

          <Routes>

              <Route exact path="/" element={<Watchlist/>}>
                
              </Route>

              <Route exact path="/Watched" element = {<Watched/>}>
                
              </Route>

              <Route path="/Add" element={<Add/>}>
                
              </Route>

          </Routes>

      </Router>
    </GlobalProvider>
  ); 
}

export default App;
