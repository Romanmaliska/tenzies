import React from "react";
import "./stopwatch.scss";

const Stopwatch = (props) => {
    const [count, setCount] = React.useState(0);
    const [intervalId, setIntervalId] = React.useState();

    React.useEffect(() => {
        if (props.isDiceSelected) {
            setIntervalId(
                setInterval(() => setCount((prevCount) => prevCount + 1), 1000)
            );
        } else {
            clearInterval(intervalId);
        }
    }, [props.isDiceSelected]);

    return (
        <div className="stopwatch">
            <h3 className="heading">Time
            </h3>
                <span>{("0" + Math.floor(count / 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor(count % 60)).slice(-2)}</span>
        </div>
    );
};

export default Stopwatch;
