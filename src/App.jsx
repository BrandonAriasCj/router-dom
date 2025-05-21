import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './pages/LoginPage.jsx'
import HomePage from './pages/HomePage.jsx'
import CategoryPage from "./pages/CategoryPage.jsx"
import SeriePage from "./pages/SeriePage.jsx"
import SerieFormPage from "./pages/SerieFormPage.jsx"
import { BrowserRouter,Routes, Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={<LoginPage/>}/>
        <Route path= "/home" element={<HomePage/>}/>
        <Route path= "/categories" element={<CategoryPage/>}/>
        <Route path= "/series" element={<SeriePage/>}/>
        <Route path= '/series/edit/:idserie' element={<SerieFormPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
