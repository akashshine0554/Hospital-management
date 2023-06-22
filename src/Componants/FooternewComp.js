import React from 'react'
import { NavLink } from 'react-router-dom';


const FooternewComp = () => {
  return (
    <>
      <div className='footer' >


        <div className='footer1'>
          <div className='hospitalinfo'>
            <h3><strong>ɾεꜱρσռꜱıɓɭε</strong></h3>
            <hr id='hr1' />
            <h6><blockquote>“Don’t worry about a thing while you’re in the hospital. There’s a whole crew of ‘elves’ taking care of everything. Hope those doctors are taking good care of you!” <br />“I’m here for you. For whatever. For as long as you need.”</blockquote></h6>
          </div>

          <div className='services'>
            <h3><strong>ʂɛཞ۷ıƈɛʂ</strong></h3>
            <hr id='hr2' />
            <ul className='servicelist'>
              <strong>
                <li>Emergency room services.</li>
                <li>X-ray/radiology services.</li>
                <li>General and specialty surgical services.</li>
                <li>Blood services.</li>
                <li>Laboratory services.</li>
              </strong>
            </ul>
          </div>

          <div className='contact'>
            <h3><strong>ąɖɖཞɛʂʂ</strong></h3>
            <hr id='hr3' />
            <i className=" locationicon fa-solid fa-location-dot"></i>
            <h6><strong>S. No 13/1A/1E/2, <br /> Mundhwa - Kharadi Rd, Kharadi, <br /> Pune, Maharashtra 411014.</strong></h6>

          </div>


          <div className='contact'>
            <h3><strong>ƈơŋɬąƈɬ</strong></h3>
            <hr id='hr4' />
            <i className="fa-solid fa-mobile-retro"> : 09503026642</i>
            <br />
            <i class="fa-solid fa-mobile-retro"> : 07020415308</i>
            <br />
            <br />
            <i className=" locationicon fa-solid fa-envelope"></i>
            <h6><strong> motherhood12@gmail.com</strong></h6>
          </div>
        </div>



        <div className='icon'>
          <NavLink className='myicon nav-link'><i className="fa-brands fa-facebook"></i></NavLink>
          <NavLink className='myicon nav-link'><i className="fa-brands fa-instagram"></i></NavLink>
          <NavLink className='myicon nav-link'><i className="fa-brands fa-whatsapp"></i></NavLink>
          <NavLink className='myicon nav-link'><i className="fa-brands fa-twitter"></i></NavLink>
        </div>
        

        <div className='createdby'>
          <h6> Ⓒ 2023 All Rights Reserved | Privacy And Policy.  Ⓒⓡⓔⓐⓣⓔⓓ Ⓑⓨ :<strong> 𝒶𝓀𝒶𝓈𝒽 𝒷𝒶𝒹𝑒✍</strong></h6>
        </div>

      </div>
    </>
  )
}

export default FooternewComp