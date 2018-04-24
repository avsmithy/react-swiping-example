import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

function * gen () {
  let i = 1
  while (true) {
    yield i++
  }
}

const generator = gen()

window.setInterval(() => console.log(generator.next()), 1000)

// create-react-app requires the root App.js file to be here
class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>

        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
