import React from "react";
import "./stopwatch.scss";

const Stopwatch = (props) => {
    const [time, setTime] = React.useState(0);
    const [intervalId, setIntervalId] = React.useState();

    React.useEffect(() => {
        if (!props.isDiceSelected && props.countOfRolls === 0) {
            setTime(0);
        } else if (
            (props.isDiceSelected || props.countOfRolls > 0) &&
            !props.isGameFinished
        ) {
            setIntervalId(
                setInterval(() => setTime((prevTime) => prevTime + 1), 1000)
            );
        } else {
            clearInterval(intervalId);
        }
    }, [props.isDiceSelected || props.countOfRolls > 0, props.isGameFinished]);

    React.useEffect(() => {
        if (props.isGameFinished && time < localStorage.getItem("time")) {
            localStorage.setItem("time", time);
        }
    }, [props.isGameFinished]);

    return (
        <div className="stopwatch">
            <div>
                <h3 className="stopwatch__heading">Time</h3>
                <span className="stopwatch__time">
                    {("0" + Math.floor(time / 60)).slice(-2)}:
                </span>
                <span className="stopwatch__time">
                    {("0" + Math.floor(time % 60)).slice(-2)}
                </span>
            </div>
            <div>
                <h3 className="stopwatch__heading">Best Time</h3>
                <span className="stopwatch__time">
                    {("0" + Math.floor(localStorage.getItem("time") / 60)).slice(-2)}:
                </span>
                <span className="stopwatch__time">
                    {("0" + Math.floor(localStorage.getItem("time") % 60)).slice(-2)}
                </span>
                    
                
            </div>
        </div>
    );
};

export default Stopwatch;
