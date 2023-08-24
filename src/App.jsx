
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './modules/Home/Home'
import Footer from "./components/Footer/Footer";
import Product from './modules/Product/Product';
import Products from './modules/Products/Products';


function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:id' element={<Product/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='*' element={<div>404</div>}/>
      </Routes>
      <Footer/>
      {/* <Home/> */}
    </>
  )
}

export default App
