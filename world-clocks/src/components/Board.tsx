import React from 'react';
import Clock from "./Clock";
import './BoardStyle.css';

const Board = () => {
    return (
        <div className='boarderContainer'>
        <div className="title">World Clocks</div>
        <Clock timeZone ='America/New_York' city='New York'/>
        <Clock timeZone ='Europe/Paris' city='Paris'/>
        <Clock timeZone ='Europe/Stockholm' city='Stockholm'/>
        <Clock timeZone ='Asia/Tokyo' city='Tokyo'/>
        <Clock timeZone ='Asia/Dubai' city='Dubai'/>
        </div>
    )
}

export default Board;