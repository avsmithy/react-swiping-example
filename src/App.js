import React, { Component } from 'react'
import StuntDoubles from './components/stunt-doubles.js'
import StuntDoubleService from './services/stunt-double-mock-service.js'
import logo from './logo.svg'
import './App.css'

const stuntDoubleService = new StuntDoubleService()

// create-react-app requires the root App.js file to be here
class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Stunt Doubles</h1>
        </header>
        <StuntDoubles service={stuntDoubleService} />
      </div>
    )
  }
}

export default App
