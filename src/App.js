

import React from 'react'
import Header from './component/Header'
import Panel from './component/Panel'
import Slider from './component/Slider'

import './App.css'

import sliderone from "./Assets/slider1.png";
import slidertwo from './Assets/slider2.png';
import sliderthree from './Assets/pictwo.png';
import sliderfour from './Assets/slider4.png';
import sliderfive from './Assets/slider5.png';
import Instant from './component/Instant';

import downone from './Assets/do.png'

// import background from './Assets/bg.png'

import instant from './Assets/in1.png'
import Download from './component/Download'


const App = () => {

  const Images = [sliderone,slidertwo,sliderthree,sliderfour,sliderfive,sliderone,slidertwo];

  const InstantCon = [
    {
      image:instant,
      text:"PUBG MOBILE GAME",
      btn1:"Shooting game",
      btn2:"Action",
      btn3:"Level up"

    },

    {
      image:instant,
      text:"PUBG MOBILE GAME",
      btn1:"Shooting game",
      btn2:"Action",
      btn3:"Level up"

    },


    {
      image:instant,
      text:"PUBG MOBILE GAME",
      btn1:"Shooting game",
      btn2:"Action",
      btn3:"Level up"

    },


    {
      image:instant,
      text:"PUBG MOBILE GAME",
      btn1:"Shooting game",
      btn2:"Action",
      btn3:"Level up"

    },

    {
      image:instant,
      text:"PUBG MOBILE GAME",
      btn1:"Shooting game",
      btn2:"Action",
      btn3:"Level up"

    }
  ]

  const DownloadCon = [
    {
      image:downone,
      text:"PUBG MOBILE GAME",
      btn1:"Shooting game",
      btn2:"Action",
     

    },

    {
      image:downone,
      text:"PUBG MOBILE GAME",
      btn1:"Shooting game",
      btn2:"Action",
     

    },

    {
      image:downone,
      text:"PUBG MOBILE GAME",
      btn1:"Shooting game",
      btn2:"Action",
     

    },


    {
      image:downone,
      text:"PUBG MOBILE GAME",
      btn1:"Shooting game",
      btn2:"Action",
     

    },

    {
      image:downone,
      text:"PUBG MOBILE GAME",
      btn1:"Shooting game",
      btn2:"Action",
     

    },

    {
      image:downone,
      text:"PUBG MOBILE GAME",
      btn1:"Shooting game",
      btn2:"Action",
     

    },

    {
      image:downone,
      text:"PUBG MOBILE GAME",
      btn1:"Shooting game",
      btn2:"Action",
     

    }
  ]
  return (
    <>
    <div><Header/>
      <Panel/>
    </div>

    <div className='slider-content'>
     
      <Slider Image={Images} />

   <Instant inst={InstantCon}/>

   <Download down={DownloadCon}/>
    
      
    </div>
    </>
  )
}

export default App
