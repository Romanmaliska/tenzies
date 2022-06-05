import React from "react";
import "./rollCounter.scss";

const RollCounter = (props) => {
    return (
        <div className="rollCounter">
            <h2 className="rollCounter__heading">Number of Rolls</h2>
            <h3 className="rollCounter__count">{props.countOfRolls}</h3>
        </div>
    );
};

export default RollCounter;
