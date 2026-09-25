import { useState } from 'react'
import './App.css'

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Home from "@/pages/Home"

function App() {
  return (
    <div className="dot-matrix-bg">

      <Header />

      <div className="app-body">
        <Home />
      </div>

      <Footer />

    </div>
  )
}

export default App
