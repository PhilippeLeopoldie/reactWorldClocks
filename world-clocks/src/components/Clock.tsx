import React, { useState } from 'react';
import './clockStyle.css';
type clockProps = {
    timeZone : string
    city: string
}

const Clock = (props : clockProps ) => {
    const [time, setTime] = useState(new Date().toLocaleTimeString('en-GB', {timeZone : props.timeZone}))
    setTimeout(() => {
        setTime(new Date().toLocaleTimeString('en-GB', {timeZone : props.timeZone}))
    },1000)
    /*useEffect(() => {
        setTime(new Date().toLocaleTimeString('en-GB', {timeZone : props.timeZone}))
    },[])*/
    return (
        <div className="clockWrapper">
          <h2>{time}</h2>
          <h2> {props.city}</h2>
        </div>

    );
}

export default Clock;