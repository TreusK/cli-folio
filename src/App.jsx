import { useState } from 'react'
import './App.css'
import CLI from './comps/CLI';

function App() {

  return (
    <div className="App">
      <div className="intro">
        <h1>CLI like portfolio</h1>
        <h2>by Lutri</h2>
      </div>
      <CLI />
    </div>
  )
}

export default App
