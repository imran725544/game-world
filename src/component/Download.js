import React from 'react'
import StarRatings from 'react-star-ratings';
import './Download.css'



const Download = (props) => {

    
  return (
    <>
    <div className='space'>
    <h1>Download GameS</h1>
    <div className='down-btn'>
        <div className='down1'>
            DOWNLOAD GAMES
        </div>

        <div className='down1'>
            See all
        </div>
    </div>
    </div>
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
            starSpacing="3px"
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