import React, {useState} from 'react';
import Clock from "./Clock";
import './BoardStyle.css';

const Board = () => {
    const clockArr = [
        ['America/New_York', 'New York'],
        ['Europe/Paris', 'Paris'],
        ['Europe/Stockholm', 'Stockholm'],
        ['Asia/Tokyo', 'Tokyo'],
        ['Asia/Dubai', 'Dubai']];

    const [clocks, addClock] = useState(clockArr);
    return (
        <div className='boarderContainer'>
        <div className="title">World Clocks</div>
            <form>
                <label>
                    <input name="city" type={"text"}/>
                </label>
                <label htmlFor={"timezone"}>
                    <input name="timezone" type={"text"}/>
                </label>
                <button onClick={addClocks} type={"submit"}>Add Clock</button>
            </form>
            <div className="clockContainer">
                {clocks.map((clock, index) => {
                    return (<Clock key={index} timeZone={clock[0]} city={clock[1]}/>)
                }) }
            </div>
        </div>
    )
}

const addClocks = (e : any) => {
    e.preventDefault();
    console.log(e.target);
}

export default Board;