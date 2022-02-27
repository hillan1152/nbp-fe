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
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Navigation/Footer';

function App(props) {


  return (
    <Store>
      {/* <Navigation/> */}
      {/* <Message/> */}
      <Router>
        <div className="App">
          <Routes>
              <Route path='/' element={<Welcome/>}/> 
              <Route path='/signup' element={<Signup/>}/> 
              <Route path='/confirmation' element={<Confirmation/>}/> 
          </Routes>
        </div>
      </Router>
      <Footer/>
    </Store>
  );
}

export default App;
