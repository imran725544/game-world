import React from "react";

import "./Panel.css";

import heroone from "../Assets/heroone.png";
import herotwo from "../Assets/herotwo.png";
import downone from  "../Assets/picone.png";
import downtwo from  "../Assets/pictwo.png";
import icon from '../Assets/icon.png';

const Panel = () => {
  return (
  

    <div className="bg">
        <div className="bg-inside">
        <div className=" bg-content">
        <h1 className="para">POPULAR GAMES</h1>
        <h2 className="head">PUBG MOBILE</h2>
        <p className="para1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since.
        </p>
        <div className="hero-btn">
                     <div className="btn1">
                        <button> PLAY GAME</button>
                     </div>

                     <div className="btn2">
                        <button>DOWNLOAD GAME</button> 
                     </div>

                 </div>
      </div>
      
      <div className="bg-image">
            <img src={heroone} alt=""/>
      </div>
      <div className="bg-image-2">
      <img src={herotwo} alt=""/>
      </div>
        </div>

        <div className="panel-down">
         <div className="down-btn">
                <div className="d-btn1">
                    <button > live streams</button>
                </div>

                <div className="d-btn2">
                    <button > see all</button>
                </div>
            </div> 

            <div className="down-image">

            
                <div className="image">
            <img src = {downone} alt=""/>
                </div>

                <div className="image">
            <img src = {downtwo} alt=""/>
                </div>

                <div className="icon">
            <img src={icon} alt=""/>
            </div>
            </div>

           
        </div>
    </div>
  );
};

export default Panel;
