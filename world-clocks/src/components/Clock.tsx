import React, { useEffect, useState } from 'react';


const timeFunc = (time : Date) => {
    return (`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`)
}

const Clock = () => {
    const [time, setTime] = useState(new Date())
    /* useEffect(() => {
        setTime(new Date())
    },[time]) */
    setTimeout(() => {
        setTime(new Date())
    },1000)
    return (<h1>{timeFunc(time)}</h1>);
}

export default Clock;