import './App.css';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { Route, Switch } from 'react-router';
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {

  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      document.title = "TextUtils-Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode has been disabled","success");
      document.title = "TextUtils-Light Mode";
    }
  }

  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
      <Switch>
          <Route path="/about">
              <About mode={mode}/>
          </Route>
          <Route path="/">
          <TextForm heading= "Enter text to analyze below" mode={mode} showAlert={showAlert}/>
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );

}
export default App;