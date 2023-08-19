
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './modules/Home/Home'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Home/>
    </>
  )
}

export default App
