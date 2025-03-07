import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './components/Home.jsx'
import RandomLayouts from './Layouts/RandomLayouts.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>

     <Route element={<RandomLayouts/>}>
     <Route path='home' element={<Home/>}/>
     
     </Route>

    </Routes>
    </BrowserRouter>

  </StrictMode>,
)
