import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import { AuthProviderWrapper } from './contexts/auth.context.jsx'
import { BalanceProviderWrapper } from './contexts/balance.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <Router>
    <React.StrictMode>
      <AuthProviderWrapper>
        <BalanceProviderWrapper>
          <App />
        </BalanceProviderWrapper>
      </AuthProviderWrapper>
    </React.StrictMode>
  </Router>
)
