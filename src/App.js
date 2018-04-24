import React, { Component } from 'react'
import CardContainer from './components/card-container.js'
import StuntDoubleService from './services/stunt-double-mock-service.js'
import logo from './logo.svg'
import './App.css'

const stuntDoubleService = new StuntDoubleService()

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Stunt Doubles</h1>
        </header>
        <CardContainer {...{
          dislike: stuntDoubleService.dislike,
          like: stuntDoubleService.like,
          next: stuntDoubleService.next
        }} />
      </div>
    )
  }
}

export default App
