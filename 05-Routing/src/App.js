import './index.css'
import React from 'react'

import Topbar from './Components/Topbar'
import Footer from './Components/Footer'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './views/Home'

function App() {
  return (
    <div>
      <Topbar />

      <div className='container min-h-screen'>
        <Router>
          <div></div>
          <Switch>
            <Route path='/create'>
              <div></div>
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>

      <Footer />
    </div>
  )
}

export default App
