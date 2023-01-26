import logo from "./logo.svg";
import "./index.css";
import React, { useState, useEffect } from "react";

import Topbar from "./Components/Topbar";
import Footer from "./Components/Footer";
import ControlCard from "./Components/ServerControl/ControlCard";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main";
import CreateNewServer from "./Pages/CreatNewServer";

function App() {
  return (
    <div>
      <Topbar />

      <div className='container min-h-screen'>
        <Router>
          <Switch>
            <Route path='/create'>
              <CreateNewServer />
            </Route>
            <Route path='/'>
              <Main />
            </Route>
          </Switch>
        </Router>
      </div>

      <Footer />
    </div>
  );
}

export default App;
