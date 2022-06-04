import React from "react";
import "./stopwatch.scss";

const Stopwatch = (props) => {
    const [count, setCount] = React.useState(0);
    const [intervalId, setIntervalId] = React.useState();

    React.useEffect(() => {
        if ((props.isDiceSelected || props.countOfRolls > 0) && !props.isGameFinished) {
            setIntervalId(
                setInterval(() => setCount((prevCount) => prevCount + 1), 1000)
            );
        }
        else  {
            clearInterval(intervalId);
            setCount(0);
        }
    }, [props.isDiceSelected || props.countOfRolls > 0, !props.isGameFinished ]);

    return (
        <div>
            <h3 className="heading">Time</h3>
            <span className="time">
                {("0" + Math.floor(count / 60)).slice(-2)}:
            </span>
            <span className="time">
                {("0" + Math.floor(count % 60)).slice(-2)}
            </span>
        </div>
    );
};

export default Stopwatch;
