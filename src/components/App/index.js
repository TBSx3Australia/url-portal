import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Welcome to {process.env.REACT_APP_TITLE}</h1>
      </div>
    )
  }
}

export default App
