import React, { useEffect, useState } from 'react';
type clockProps = {
    timeZone : string
}

const Clock = (props : clockProps ) => {
    const [time, setTime] = useState(new Date().toLocaleTimeString('en-GB', {timeZone : props.timeZone}))
    setTimeout(() => {
        setTime(new Date().toLocaleTimeString('en-GB', {timeZone : props.timeZone}))
    },1000)
    /*useEffect(() => {
        setTime(new Date().toLocaleTimeString('en-GB', {timeZone : props.timeZone}))
    },[])*/
    return (<h1>{time}</h1>);
}

export default Clock;