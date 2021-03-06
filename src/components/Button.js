import React from "react";
import './button.scss';

const Button = (props) => {
    return props.isGameFinished ? (
        <button className="btn" onClick={props.resetGame}>
            Reset game
        </button>
    ) : (
        <button className="btn" onClick={props.rollDices}>
            Roll 
        </button>
    );
};

export default Button;
