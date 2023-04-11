import React from 'react'
import StarRatings from 'react-star-ratings';
import './Download.css'



const Download = (props) => {

    
  return (
    <>
    <div className='heading-down'>
    <h1 > <span className='in'>Download</span> <span className='ga'>GAMES</span></h1>
    </div>
    <div className='down-btn'>
        <div className='down1'>
           <button>DOWNLOAD GAMES</button> 
        </div>

        <div className='down1'>
           <button>
           See all</button> 
        </div>
    </div>
    {/* </div> */}
        <div className='download-full'>
        
        {props.down.map((dow) => {
     return (
    <div className='down-cont'>
    <div className='image'>
        <img src={dow.image} alt=''/>
    </div>

    <div className='down-text'>
        <div className='head'>
       {dow.text}
        </div>

        

            <StarRatings
            rating={3}
            starDimension="20px"
            starSpacing="1px"
            />

        <div className='down-button'>
                <div className='do-btn1'>
                   <button>{dow.btn1}</button> 
                </div>

                <div className='do-btn1'>
                   <button>{dow.btn2}</button> 
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

export default Download