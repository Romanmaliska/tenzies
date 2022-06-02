import React from "react";

const Button = (props) => {
    const styles = {
        textContent: props.endOfGame ? "Reset Game" : "Roll",
    };

    return (
        <button className="btn" onClick={props.rollDices}>
            {styles.textContent}
        </button>
    );
};

export default Button;
