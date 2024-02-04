import { useState } from 'react'
import './App.css'

import {Outlet, Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import ContagemRegressiva from './Routes/ContagemRegressiva'
import Inicio from './Routes/Inicio'

function App() {
  
  return (
    <Outlet />
  )
}

export default App
