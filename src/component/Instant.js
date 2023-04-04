import React from 'react'
import './Instant.css'


const Instant = (props) => {
  return (
<>
<h1>INSTANT GAMES</h1>
    <div className='ins-btn' >
        <div className='ins-btn1'>
           <button>  PLAY INSTANT GAMES</button>
        </div>

        <div className='ins-btn1'>
        <button>  see all</button>
        </div>
    </div>
        <div className='ins-full'>

        {props.inst.map((ins) => {
            return(
<div className='instant-content'>
<div className='image'>
   < img src={ins.image} alt=''/>
</div>
<div className='instant-con'>
<div className='head'>
{ins.text}
</div>
<div className='con-btn'>
    <div className='con-btn1'>
       <button>{ins.btn1}</button> 
    </div>

    <div className='con-btn1'>
    <button>{ins.btn2}</button> 
    </div>

    <div className='con-btn1'>
    <button>{ins.btn3}</button> 
    </div>
</div>
</div>
</div>
            )
    
})}
        </div>
  


</>
    
  )
}

export default Instant