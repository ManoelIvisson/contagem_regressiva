import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ContagemProvider } from './context/ContagemContext.jsx'

import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Inicio from './Routes/Inicio.jsx'
import ContagemRegressiva from './Routes/ContagemRegressiva.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Inicio />
      },
      {
        path: "/contagem_regressiva",
        element: <ContagemRegressiva />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContagemProvider>
      <RouterProvider router={router} />
    </ContagemProvider>
  </React.StrictMode>,
)
