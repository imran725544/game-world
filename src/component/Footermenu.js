import React from 'react'

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footermenu.css'
import logo from '../Assets/logo.png'

const Footermenu = () => {
  return (
    <div className='foo-menu'> 
    
    <div className='fo-logo'>
    <img src={logo} alt=''/>
    </div> 

    <div className='foo-text'>
    © 2022 ABC. All Rights Reserved. 
    </div>


<div className='icons'>
<FacebookIcon />
<LinkedInIcon />

</div>

    

   

    
        
    </div>
  )
}

export default Footermenu