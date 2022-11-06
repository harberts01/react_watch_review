import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './lib/font-awesome/css/all.min.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Header } from './components/header';
import { Watched } from './components/Watched'
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

              <Route path="/Watched" element = {<Watched/>}>
                
              </Route>

              <Route path="/Add" element={<Add/>}>
                
              </Route>

          </Routes>

      </Router>
    </GlobalProvider>
  ); 
}

export default App;
