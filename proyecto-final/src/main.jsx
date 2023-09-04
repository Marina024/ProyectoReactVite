import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { About } from './Components/About/About.jsx'
import { Footer } from './Components/Footer/Footer.jsx'
import { Header } from './Components/Header/Header.jsx'
import { Project } from './Components/Project/Project.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
    <Project />
    <About />
    <Footer />
  </React.StrictMode>,
)
