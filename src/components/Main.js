import React from "react";
import Dice from "./Dice";
import "./main.scss";

const Main = () => {
    const randomNumber = () => {
        return Math.floor(Math.random() * 6) + 1;
    };

    const randomNumbers = () => {
        let empty = [];
        for (let i = 0; i < 10; i++) {
            empty.push({
                id: i + 1,
                number: randomNumber(),
                isSelected: false,
            });
        }
        return empty;
    };

    const [numbers, setNumbers] = React.useState(randomNumbers());

    const rollDices = () => {
        setNumbers((prevNumbers) => {
            if (prevNumbers.every((item) => item.isSelected)) {
             return randomNumbers();
            } else {
                return prevNumbers.map((item) =>
                    item.isSelected ? item : { ...item, number: randomNumber() }
                );
            }
        });
    };

    const selectDice = (id) => {
        setNumbers((prevNumbers) => {
            return prevNumbers.map((item) => {
                return item.id === id
                    ? { ...item, isSelected: !item.isSelected }
                    : item;
            });
        });
    };
    console.log(numbers);

    const boxes = () =>
        numbers.map((item) => {
            return (
                <Dice
                    key={item.id}
                    value={item.number}
                    isSelected={item.isSelected}
                    selectDice={() => selectDice(item.id)}
                />
            );
        });

    return (
        <div className="container">
            <div className="wrapper">
                <h1 className="heading">Tenzies</h1>
                <p className="text">
                    Roll until all dice are the same. Click each die to freeze
                    it at its current value between rolls.
                </p>
                {boxes()}
                <button className="btn" onClick={rollDices}>
                    Roll
                </button>
            </div>
        </div>
    );
};

export default Main;
