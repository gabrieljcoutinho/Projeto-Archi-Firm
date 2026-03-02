import React from 'react'
import "../Css/Header.css"

import logo from "../img/logoHeader.png"

const Header = () => {
  return (
    <div className='header'>
           <img src={logo} alt="logo" />
           <ul className="headerMenu">

            <li className="headerMenuLista"><a href="#" className='linkListaHeader'>About</a></li>
            <li className="headerMenuLista"><a href="#" className='linkListaHeader'>Service</a></li>
            <li className="headerMenuLista"><a href="#" className='linkListaHeader'>Blog</a></li>
            <li className="headerMenuLista"><a href="#" className='linkListaHeader'>Careers</a></li>
           </ul>

    <div className="movimentacaobtn">
    <button>Contact US</button>
    <button>Learn more</button>
    </div>

    </div>
  )
}

export default Header