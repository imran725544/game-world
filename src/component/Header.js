import React from 'react'
import './Header.css'
import logo from '../Assets/logo.png'
import search from '../Assets/search.png'
// import bg from '../Assets/bg-panl.png'

const Header = () => {
  return (

   
  
                    
                        <div className='row'>
                         <div className='header'>
                        <div className='col-md-2'>
                        <div className='logo'>
                <img src= {logo} alt='' />
                </div>
                        </div>
               
                        <div className='header-middle'>

                        <div className='col-md-8'>
    <div className='menu'>
                <ul>
                <li>Games</li>
                <li>Live Streams</li>
                <li>Tournaments</li>
                <li>Spin and Win </li>
                </ul>
                </div>
    </div>
                <div className='col-md-2'>
                <div className='header-right'>
                <div className='search'>
                <img src ={search} alt=''/>
                </div>
                <div className='se-btn'>
                    search
                </div>
                </div> 
                </div>

                        </div>

   

                
                </div>
                        </div>
                        
                        
                        
                    
                    
                )
                }
                

                export default Header