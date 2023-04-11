import React from 'react'

import rangeone from '../Assets/pink.png'
import watch from '../Assets/watch.png'
import rangetwo from '../Assets/trans.png'
import rangethree from '../Assets/shad.png'
import fooright from '../Assets/foo-r.png'
import './Footer.css'

const footer = () => {
  return (
    <div className='footer'>


    <div className='row items-cen'>
    <div className='col-md-4'>
         <div className='f-left'>
        <div className='image-one'>
        <img src={rangethree} alt=''/>
        </div>

        <div className='image-two'>
            <img src={rangetwo} alt=''/>
        </div>

        <div className='image-three'>
        <img src={rangeone} alt=''/>
        </div> 

        <div className='f-watch'>
        <img src={watch} alt=""/>
        </div>

       

        </div>

        </div>

        <div className='col-md-4'>
            <div className='f-middle'>
            <div className='heading'>
            GAMES 
COMPETITIONS
            </div>

            <div className='text'>
            Compete to be Top in Leader 
board and Win Cash Prizes.
            </div>

            <div className='f-btn'>
        <button>SIGN UP</button>
            </div>
            </div>
        </div>

        <div className='col-md-4'>
            <div className='foo-right'>
            <img src={fooright} alt=''/>
            </div>
        </div>
    </div>
       

    
        

</div>
   
  )
}

export default footer