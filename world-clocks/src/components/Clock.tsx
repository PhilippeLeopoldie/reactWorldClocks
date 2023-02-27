import React, { useState } from 'react';


const timeFunc = (time : Date) => {
    return (`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`)
}
const Clock = () => {
    const [time, setTime] = useState(new Date())
    return (<h1>{timeFunc(time)}</h1>);
}

export default Clock;