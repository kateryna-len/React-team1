import React from 'react'
import{Routes, Route} from 'react-router-dom'
import Cart from './component/Cart/Cart';
import Catalog from './component/Catalog/Catalog';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header'
import Home from './component/HomePage/Home';
import './App.css'

function App() {
  return (
    <div className='main-box'>
      <div>
        <Header/>
      </div>
      <div className='content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/catalog'  element={<Catalog/>} />
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
          <div className='footer-content'>
              <Footer/>
          </div>
      </div>
    </div>
  )
}

export default App;
