import React from 'react'
import "../Css/Header.css"
import logo from "../img/logoHeader.png"

import img1 from "../img/imgHeaderContrucao1.png"
import img2 from "../img/imgHeaderContrucao2.png"
import img3 from "../img/imgHeaderContrucao3.png"
import img4 from "../img/imgHeaderContrucao4.png"

const Header = () => {
  return (
    <div className='header'>
      {/* BARRA DE NAVEGAÇÃO (LOGO + MENU + BOTÃO) */}
      <div className="headerNav">
        <img src={logo} alt="logo" className="logoHeader" />

        <ul className="headerMenu">
          <li className="headerMenuLista"><a href="#" className='linkListaHeader'>About</a></li>
          <li className="headerMenuLista"><a href="#" className='linkListaHeader'>Service</a></li>
          <li className="headerMenuLista"><a href="#" className='linkListaHeader'>Blog</a></li>
          <li className="headerMenuLista"><a href="#" className='linkListaHeader'>Careers</a></li>
        </ul>

        <div className="movimentacaobtn">
          <button className='btnContactUs'>Contact US</button>
        </div>
      </div>

      {/* CONTEÚDO (VAI FICAR EMBAIXO DA NAVEGAÇÃO) */}
      <div className="conteudo">
        <div className="conteudoEscrito">
          <h1>Crafting spaces, <br /> shaping futures</h1>
          <p className="paragrafoHeader">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo illum in inventore quibusdam incidunt optio fugiat,  <br />
            beatae blanditiis, sapiente quia delectus debitis molestiae corrupti laborum,<br />
             minima nostrum enim cumque quaerat.</p>

     <div className="btnsMovimentacao">
     <buton>Contact Us</buton>
     <buton>Learn More</buton>
     </div>
        </div>


              <div className="conteudo2">

                <div className="divConteudoImgParte1">
              <img src={img1} alt="" className='img1'/>
              <img src={img3} alt="" />

                </div>

                <div className="divConteudoImgParte1">
                <img src={img2} alt="" />
                <img src={img4} alt="" className='img4Headerdetalhe'/>

                </div>

              </div>



      </div>
    </div>
  )
}

export default Header