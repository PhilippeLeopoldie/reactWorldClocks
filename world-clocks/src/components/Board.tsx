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

    const [clocks, setClock] = useState(clockArr);
    const [city, setCity] = useState('')
    const [timeZone, setTimeZone] = useState('')

    const addClocks = (e : any) => {
        e.preventDefault(); // do not refresh the page and then loosing all the data
        console.log(e.target);
        setClock((initialData) => [...initialData,[timeZone,city]])

    }
    return (
        <div className='boarder--container'>
        <div className="title">World Clocks</div>
            <form>
                <label>
                    <input placeholder="City" onChange= {(e) => setCity(e.target.value)} value={city} name="city" type="text"/>
                </label>
                <label>
                    <input placeholder="TimeZone"onChange={(e) => setTimeZone(e.target.value)} value= {timeZone} name="timeZone" type="text"/>
                </label>
                <button onClick={addClocks} type="submit">Add Clock</button> {/* submit refresh the page so to avoid :  e.preventDefault(); */}
            </form>
            <div className="clock--container">
                {clocks.map((clock, index) => {
                    return (<Clock key={index} timeZone={clock[0]} city={clock[1]}/>)
                }) }
            </div>
        </div>
    )
}



export default Board;