import { useState } from 'react'
import './App.css'
import CLI from './comps/CLI';

function App() {

  return (
    <div className="App">
      <div className="intro">
        <h1>Command Line Interface like portfolio</h1>
        <h2>{'<F. Lutri/>'}</h2>
      </div>
      <CLI />
    </div>
  )
}

export default App
