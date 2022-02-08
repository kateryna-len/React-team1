import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import '../../style/NavBar.css'
import Researchbox from './Researchbox'


function NavBar(){
  const [visability, setVisability] = useState(false)
  function handlechange(){
    setVisability(true)
  }
  function handlenot(){
    setVisability(false)
  }

  return(
    <div>
      <div className='navbar' >
        <Link className='link' onClick={handlenot} to='/'>Home</Link>
        <Link className='link' onClick={handlechange}  to='/catalog'>Catalog</Link>
        <Link className='link' onClick={handlenot} to='/cart'>Cart</Link>
          {visability && <Researchbox />}
        
      </div>
    </div>
  )
}

export default NavBar