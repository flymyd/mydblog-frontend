import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {HashRouter} from 'react-router-dom'
import '@/assets/css/Framework/HideScrollBar.css'
import {MantineProvider} from "@mantine/core";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App/>
    </MantineProvider>
  </HashRouter>
);
