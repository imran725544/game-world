import React from 'react'

import './Market.css'


const Market = (props) => {
  return (
    <>
    <div className='market'>
            <div className='heading-mar'>
            <h1 > <span className='in'>Market</span> <span className='ga'>Place</span></h1>
            </div>

            <div className='market-btn'>
                <div className='m-btm'>
                    Market Place
                </div>
                <div className='m-btm'>
                    See all
                </div>
            </div>
        
    </div>
    
    <div className='market-data'>
    {props.mar.map((mdata) => {
    
    return(
       
<div className='market-cont'>
        <div className='image'>
            <img src={mdata.image} alt=''/>
        </div>
            <div className='bottom-content'>
            <div className='m-head'>
            <div className='text'>
                   <h3>{mdata.text1}</h3> 
                   <h6>{mdata.text2}</h6>
            </div>

            <div className='d-image'>
                <img src={mdata.image2} alt=''/>
            </div>

            
            
        </div>

        <div className='m-down-text'>
                <div className='p-down-text'>
                            <h5>{mdata.text3}</h5>

                            <h6> {mdata.text4}</h6>
                </div>

                <div className='m-d-btn'>
                    <button className='li'> {mdata.btnm}</button>
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

export default Market