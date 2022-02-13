import React, { useContext, useEffect } from 'react';
import './Styles/App.scss';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  withRouter
} from "react-router-dom";
import Signup from './Components/Form/Signup.js';
import Confirmation from './Components/Form/Confirmation';
import Store, { Context } from './Components/State/Store';
import Message from './Components/Navigation/Message.js'
import Welcome from './Components/Welcome/Welcome.js'

function App(props) {

  return (
    <Store>
      <Message/>
      <Router>
        <div className="App">
          <Routes>
              <Route path='/' element={<Welcome/>}/> 
              <Route path='/signup' element={<Signup/>}/> 
              <Route path='/confirmation' element={<Confirmation/>}/> 
          </Routes>
        </div>
      </Router>
    </Store>
  );
}

export default App;
