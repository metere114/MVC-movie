import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'

const Navbar = () => {
  return (
    <div className='navbar'>

      <div className="navbar-left">{/*Divi que guarda a logo do nosso site*/}

        {/* <img src={logo} alt="logo image" /> */}
        <h1>MVCmovie</h1>

        <ul>
          <li>home</li>
          <li>tv shows</li>
          <li>movies</li>
          <li>new and popular</li>
          <li>my list</li>
          <li>browse by languages</li>
        </ul>
      </div>

      <div className="navbar-right">{/*Dentro dessa div encontra-se o nosso icon de pesquisa*/}
        <img src={search_icon} alt="icon de pesquisa" className='icons' />{/*imgaem do icon de pesquisa*/}
        <p>children</p>
        <img src={bell_icon} alt="icon de pesquisa" className='icons' />{/*imagem do nosso sino*/}

        <div className="navbar-profile">
          <img src={profile_img} alt=""  className='profile'/>
          <img src={caret_icon} alt=""  />

          <div className="dropdown">
            <p>sign out of MVCmovie</p>
          </div>

        </div>

      </div>
      
    </div>
  )
}

export default Navbar
