import React from 'react'
import Navigation from './components/Navigation/Navigation'
import AppRoutes from './routes/AppRoutes'
import Toast from './components/Toast/Toast'

function App() {
  return (
    <>
      <Navigation />
      <AppRoutes />
      <Toast />
    </>
  )
}

export default App
