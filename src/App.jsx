import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import Home from './pages/Home'
import Movies from './pages/Movies'
import './App.css'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <Navigation />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movies' element={<Movies />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App;
