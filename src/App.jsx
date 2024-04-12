
import './App.css'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Cart from './components/Pages/Cart'
import LoginSignup from './components/Pages/LoginSignup'
import Products from './components/Pages/Products'
import Shop from './components/Pages/Shop'
import ShopCategory from './components/Pages/ShopCategory'
import Navbar from './components/navbar/Navbar'
function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path = '/' element ={<Shop/>} />
        <Route path = '/shop' element ={<Shop/>} />
        <Route path = '/mens' element ={<ShopCategory category = "men"/>} />
        <Route path = '/womens' element ={<ShopCategory  category = "women"/>} />
        <Route path = '/kids' element ={<ShopCategory category = "kid"/>} />
        <Route path='product' element={<Products/>}>
          <Route path='productId' element={<Products/>}/>
        </Route>
        <Route path = '/cart' element ={<Cart/>} />
        <Route path = '/login' element ={<LoginSignup/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
