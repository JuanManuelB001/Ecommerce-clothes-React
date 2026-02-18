import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { MyRoutes } from './routes/Routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyRoutes/>
  </StrictMode>,
)
