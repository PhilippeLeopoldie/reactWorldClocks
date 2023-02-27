import React from 'react';
import Clock from "./Clock";

const Board = () => {
    return (
        <>
        <Clock timeZone ='America/New_York'/>
        <Clock timeZone ='Europe/Paris'/>
        </>
    )
}

export default Board;