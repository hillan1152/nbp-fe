import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';

const initialState = {
    loggedIn: false,
    prospect: {
      first_name: '',
      last_name: '',
      email: '',
      grad_year: '',
      state: '',
      highschool: '',
      ft: '',
      in: '',
      wt: '',
      primary_pos: '',
      secondary_pos: '',
      hudl: '',
      twitter: '',
      gpa: '',
      camps: '',
      package: '',
    },
    message: '',
    isVisible: false,
};


const Store = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

  return(
    <Context.Provider value={[state, dispatch]}>
        {children}
    </Context.Provider>
  ) 
}

export const Context = createContext(initialState);

export default Store;