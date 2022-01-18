import "./App.css";
import React, { useState } from 'react'

import About from "./components/About";
import Navbar from "./components/Navbar";
import TextArea from './components/TextArea';
import Alerts from "./components/Alerts";
import {
  BrowserRouter as Router,
  Switch,
  // Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const [Alert, setAlert] = useState(null)

  const showAlerts = (type, messege) => {
    setAlert({
      type: type,
      messege: messege
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlerts('success', 'Switched to Dark Mode');
      setTimeout(() => {
        document.title = 'Welcome To TextUtils'
      }, 1000);
      setTimeout(() => {
        document.title = 'Hello From The Team'
      }, 2000);
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlerts('success', 'Switched to Light Mode');
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils.com" about="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alerts alert={Alert} />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <div className="container">
              <TextArea showAlerts={showAlerts} heading="Enter a text to Analyze Below" mode={mode} />
            </div>
          </Route>
        </Switch>

      </Router>








    </>
  );
}

export default App;
