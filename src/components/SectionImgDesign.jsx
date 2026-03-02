import React from 'react'
import "../Css/Sectiondesign.css"

import exclusiveVideo from "../img/exclusiveVideo.png"


const SectionImgDesign = () => {
  return (
    <div className='SectionImgDesign'>

        <h3 className='tituloSectionDesign'>Step inside our design journey:< br/>
             an exclusive video glimpse</h3>

             <img src={exclusiveVideo} alt="" />

    </div>
  )
}

export default SectionImgDesign