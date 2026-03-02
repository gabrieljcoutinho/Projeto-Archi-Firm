import React from 'react'
import "../Css/Header.css"


const Header = () => {
  return (
    <div>
           <ul className="headerMenu">
            <li className="headerMenuLista"><a href="#" className='linkListaHeader'>About</a></li>
            <li className="headerMenuLista"><a href="#" className='linkListaHeader'>Service</a></li>
            <li className="headerMenuLista"><a href="#" className='linkListaHeader'>Blog</a></li>
            <li className="headerMenuLista"><a href="#" className='linkListaHeader'>Careers</a></li>
           </ul>


    </div>
  )
}

export default Header