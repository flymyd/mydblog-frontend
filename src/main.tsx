import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter, HashRouter} from 'react-router-dom'
import '@/assets/css/Framework/HideScrollBar.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <App/>
  </HashRouter>
)
