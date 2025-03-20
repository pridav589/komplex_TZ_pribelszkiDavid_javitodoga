import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './css/App.css'
import Home from './Oldalak/Home'
import Felvettek from './Oldalak/Felvettek'



function App() {
  return (
    <>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/felvettek/:agazat' element={<Felvettek />} />
          </Routes>
        </div>   
    </>
  )
}

export default App
