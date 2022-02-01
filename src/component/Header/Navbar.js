import React from 'react'
import {Link} from 'react-router-dom'
import '../../style/NavBar.css'


function NavBar(){
  return(
    <dic>
      <div className='navbar' >
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/catalog'>Catalog</Link>
        <Link className='link' to='/cart'>Cart</Link>
      </div>
    </dic>
  )
}

export default NavBar