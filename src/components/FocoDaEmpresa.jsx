import React from 'react'

import "../Css/focoDaEmpresa.css"

import img1 from "../../src/img/imgFocoDaEmpresa.png"
import img2 from "../../src/img/imgFocoDaEmpresa2.png"

const FocoDaEmpresa = () => {
  return (
    <div>

        <h4>We consistently focus on < br/>
             both beauty and usability</h4>

<div className='secao1'>

    <img src={img1} alt="" />

</div>

<div className='secao2'>

<img src={img2} alt="" />


</div>


    </div>
  )
}

export default FocoDaEmpresa