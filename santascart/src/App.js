import Home from './pages/Home'
import Search from './pages/Search'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App