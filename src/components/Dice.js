import React from "react";
import "./dice.scss";

const Dice = (props) => {
    return (
        <div
            className={props.isSelected ? "dice checked" : "dice"}
            onClick={props.selectDice}
        >
            {props.value}
        </div>
    );
};

export default Dice;
