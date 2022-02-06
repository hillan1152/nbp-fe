import React, { useContext, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  withRouter
} from "react-router-dom";
import Signup from './Form/Signup.js';
import Confirmation from './Form/Confirmation';
import Store, { Context } from './State/Store';


function App(props) {

  return (
    <Store>
      <Router>
        <div className="App">
          <Routes>
              <Route path='/' element={<Signup/>}/> 
              <Route path='/confirmation' element={<Confirmation/>}/> 
          </Routes>
        </div>
      </Router>
    </Store>
  );
}

export default App;
