

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

import market from './Assets/m1.png'
import ellicpe from './Assets/e1.png'

// import background from './Assets/bg.png'

import instant from './Assets/in1.png'
import Download from './component/Download'
import Market from './component/Market'
import Footer from './component/Footer'
import Footerlast from './component/Footerlast'
import Footermenu from './component/Footermenu'


const App = () => {


  const MarketData = [
    {
    image : market,
    text1 : "PUBG MOBILE GAME",
    text2 :  "PUBG MOBILE GAME",
    image2 : ellicpe,
    text3 :  "Rs : 1500",
    text4 :  "per gift",
    btnm :  "BUY NOW"


  },


  {
    image : market,
    text1 : "PUBG MOBILE GAME",
    text2 :  "PUBG MOBILE GAME",
    image2 : ellicpe,
    text3 :  "Rs : 1500",
    text4 :  "per gift",
    btnm :  "BUY NOW"


  },


  {
    image : market,
    text1 : "PUBG MOBILE GAME",
    text2 :  "PUBG MOBILE GAME",
    image2 : ellicpe,
    text3 :  "Rs : 1500",
    text4 :  "per gift",
    btnm :  "BUY NOW"


  },


  {
    image : market,
    text1 : "PUBG MOBILE GAME",
    text2 :  "PUBG MOBILE GAME",
    image2 : ellicpe,
    text3 :  "Rs : 1500",
    text4 :  "per gift",
    btnm :  "BUY NOW"


  },


  {
    image : market,
    text1 : "PUBG MOBILE GAME",
    text2 :  "PUBG MOBILE GAME",
    image2 : ellicpe,
    text3 :  "Rs : 1500",
    text4 :  "per gift",
    btnm :  "BUY NOW"


  }

]

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

   
  ]
  return (
    <>
    <Header/>
      <Panel/>

    <div className='slider-content'>
     
      <Slider Image={Images} />

   <Instant inst={InstantCon}/>

   <Download down={DownloadCon}/>

   <Market mar={MarketData}/>
   
    <Footer/>

    <Footerlast/>

    <Footermenu/>
      
    </div>
    </>
  )
}

export default App
