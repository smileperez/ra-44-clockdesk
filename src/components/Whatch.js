import React, {useEffect, useState} from "react";
import getHours from './getHours';
import getMinutes from './getMinutes';
import getSeconds from './getSeconds';

function Whatch( {city, zone, callback} ) {

    const realTime = new Date();

    let hours = getHours(realTime, zone);
    let minutes = getMinutes(realTime);
    let second = realTime.getSeconds();

    const [seconds, setSeconds] = useState(second);

    const timer = () => {
        setInterval(() => {
            setSeconds(
                getSeconds()
            )
        }, 1000);
    }

    useEffect(() => {
        timer();
    }, [seconds]);

    return (
        <div className="whatch">
            <div className="whatch-block">
                <label className="whatch-label">{city}</label>
                <input className="whatch-btn" type={"button"} value={"X"} onClick={() => callback()}></input>
            </div>
            <div className="whatch-time">
                <p className="time">{hours}</p>
                <p className="time-divider">:</p>
                <p className="time">{minutes}</p>
                <p className="time-divider">:</p>
                <p className="time">{seconds}</p>
            </div>
            
        </div>
    );
}

export default Whatch;