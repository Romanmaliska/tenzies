import React from "react";
import "./dice.scss";

const Dice = (props) => {
    const styles = {
        backgroundColor: props.isSelected ? "#59E391" : "#FFFFFF",
    };

    return (
        <div className="dice" style={styles} onClick={props.selectDice}>
            {props.value}
        </div>
    );
};

export default Dice;
