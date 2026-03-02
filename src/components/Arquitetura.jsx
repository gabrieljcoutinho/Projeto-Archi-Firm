import React from 'react'
import "../../src/Css/Arquitetura.css"

import imgArquitetura1 from "../img/iconeArquitetura1.png"
import imgArquitetura2 from "../img/iconeArquitetura2.png"
import imgArquitetura3 from "../img/iconeArquitetura3.png"

const Arquitetura = () => {
  return (
    <div className='arquiteura'>

     <div className="tituloTexto">
            <h2 className='titulo'>Our range of <br />
                architectural services</h2>

                    <p className='paragarafoArquitetura'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est id explicabo dicta eaque <br/>
                        expedita perferendis exercitationem dolorum molestiae similique, eveniet, suscipit quos<br/>
                         officia voluptatibus voluptatum neque aliquam quo libero doloremque?</p>
            </div>
                <div className="flexbox">


    <div className="arquiteturasDivConteudo">
<img src={imgArquitetura1} alt="" />
<h3>Interior design</h3>
<p className="descricaoArquitetura">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam odit sit praesentium sequi
     exercitationem in ab officia doloribus repudiandae culpa magni delectus ratione deserunt
      incidunt, rerum mollitia temporibus quae. Ea.
</p>
<br />
<a href="#" className='btnDiscover'>DISCOVER -></a>
    </div>

    <div className="arquiteturasDivConteudo">
    <img src={imgArquitetura2} alt="" />
    <h3>Exterior desgin</h3>
    <p className="descricaoArquitetura">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam odit sit praesentium sequi
     exercitationem in ab officia doloribus repudiandae culpa magni delectus ratione deserunt
      incidunt, rerum mollitia temporibus quae. Ea.
</p>
<br />
<a href="#" className='btnDiscover'>DISCOVER -></a>
    </div>

    <div className="arquiteturasDivConteudo">
    <img src={imgArquitetura3} alt="" />
    <h3>Space planning</h3>
    <p className="descricaoArquitetura">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam odit sit praesentium sequi
     exercitationem in ab officia doloribus repudiandae culpa magni delectus ratione deserunt
      incidunt, rerum mollitia temporibus quae. Ea.
</p>
<br />
<a href="#" className='btnDiscover'>DISCOVER -></a>
    </div>

                </div>

    </div>
  )
}

export default Arquitetura