import React from 'react'
import fondo from './fondo.webp'

const Header = () => {
  return (
    <header className="main-header-container">
      <img src={fondo} alt="imagen de fondo" className="img-header-fondo"/>
      <div className="main-header">
        <h1 className="main-header--logo">nelson-pixabay</h1>
      </div>
    </header>
  )
}

export default Header
