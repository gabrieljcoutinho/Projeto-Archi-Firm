import React from 'react';
import "../Css/focoDaEmpresa.css";
import img1 from "../../src/img/imgFocoDaEmpresa.png";
import img2 from "../../src/img/imgFocoDaEmpresa2.png";

const FocoDaEmpresa = () => {
  return (
    <div className="container-foco">
      <h4 className='tituloFocoDaEmpresa'>
        We consistently focus on <br/>
        both beauty and usability
      </h4>

      {/* Seção 1: Texto na Esquerda, Imagem na Direita */}
      <div className='secao-flex'>
        <div className="texto">
          <h3>Título da Seção 1</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repellendus earum sequi aperiam nobis molestias eligendi repudiandae ratione maiores, dolor quis necessitatibus voluptate consectetur omnis facilis accusantium beatae est eum!.</p>
        </div>
        <div className="imagem">
          <img src={img1} alt="Descrição 1" />
        </div>
      </div>

      {/* Seção 2: Imagem na Esquerda, Texto na Direita */}
      <div className='secao-flex reverse'>
        <div className="texto">
          <h3>Título da Seção 2</h3>
          <p>Outro texto explicativo, desta vez com a imagem invertida.</p>
        </div>
        <div className="imagem">
          <img src={img2} alt="Descrição 2" />
        </div>
      </div>
    </div>
  );
}

export default FocoDaEmpresa;