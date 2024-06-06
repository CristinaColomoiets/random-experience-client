import React from 'react'
import Navigation from './components/Navigation/Navigation'
import AppRoutes from './routes/AppRoutes'
import Toast from './components/Toast/Toast'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (

    <>
      <Navigation />
      <div id="content">
        <AppRoutes />
        <Toast />
      </div>
      <Footer />
    </>
  )

}

export default App
