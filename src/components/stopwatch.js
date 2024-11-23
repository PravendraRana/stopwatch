import React, { useEffect, useState } from "react";

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let inervalId;

        if(isRunning) {
            inervalId = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(inervalId);
        }

        return () => clearInterval(inervalId);
    },[isRunning]);

    const startStop = () => {
        setIsRunning(prev =>!prev)
    };

    const reset = () => {
        setIsRunning(false);
        setTime(0);
    }

    const formateTime = (sec) => {
        const minutes = Math.floor(sec / 60);
        const remainingSec = sec % 60;
        return `${minutes}:${remainingSec < 10 ? "0" : ""}${remainingSec}`
    }
    return (
        <div style={{ border: "2px solid black", padding: "20px", borderRadius: "10px", width: "200px", margin: "20px auto" }}>
            <h1>Stopwatch</h1>
            <p>Time:{formateTime(time)}</p>
            <button onClick={startStop}>{isRunning ? "stop" : "start"}</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Stopwatch;