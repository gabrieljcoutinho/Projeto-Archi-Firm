import React from 'react'
import "../Css/Desgnerideas.css"

import img1 from "../../src/img/igmDesinerArea1.png"
import img2 from "../../src/img/igmDesinerArea2.png"
import img3 from "../../src/img/igmDesinerArea3.png"

const DesignrIdeas = () => {
  return (
    <div className='designers'>

                        <div className="conteudoInicialDesigner">
                                    <div className="conteudoDesigner1">
                                    <h4 className='subTituloDesgner'>Exploring design <br />
                                    trends and ideas</h4>
                                    </div>

                                        <div className="conteudoDesginer2">
                                        <p className="paragrafoDescricaoDesgnerIdeas">Lorem ipsum dolor sit amet consectetur adipisicing elit.  <br />
                                            Sunt ipsa quod, exercitationem molestiae id nam, vel quam et aspernatur blanditiis nostrum. <br />
                                            Aliquam vitae distinctio sapiente assumenda pariatur quo! Ducimus, nesciunt.</p>
                                        </div>

                        </div>

<br /><br /><br />


                        <div className="desinerAreasDemostracao">

                                <div className="divs">
                                    <img src={img1} alt="" />
                                       <div className="conteudoInterno">
                                       <h6>Modernizinf a classic loft with serene interiors</h6>

                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et dignissimos quis, laudantium assumenda iste est sunt quod tenetur sequi magni corrupti inventore optio eius possimus voluptas architecto dolor qui aspernatur.</p>
                                       </div>
                                </div>

                                <div className="divs">
                                <img src={img2} alt="" />
                                <h6>Modernizing a classic loft with serene interiors</h6>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et dignissimos quis, laudantium assumenda iste est sunt quod tenetur sequi magni corrupti inventore optio eius possimus voluptas architecto dolor qui aspernatur.</p>
                                    </div>

                                    <div className="divs">
                                    <img src={img3} alt="" />
                                    <h6>Modernizing a classic loft with serene interiors</h6>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et dignissimos quis, laudantium assumenda iste est sunt quod tenetur sequi magni corrupti inventore optio eius possimus voluptas architecto dolor qui aspernatur.</p>
                                    </div>

                        </div>

    </div>
  )
}

export default DesignrIdeas