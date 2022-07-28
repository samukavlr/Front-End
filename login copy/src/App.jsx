import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import { Login } from './components/Login/Login';
import {Dashboard} from'./page/Dashboard';

import {AuthProvider} from './Context/AuthContext'

function App() {
 

  return (
    <div>
      <AuthProvider>
        <Router>
         
        </Router>
      </AuthProvider>
    </div>
  )
}

export default App
