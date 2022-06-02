import React from "react";
import Dice from "./Dice";
import Button from "./Button";
import "./main.scss";

const Main = () => {
    const randomNumber = () => {
        return Math.floor(Math.random() * 6) + 1;
    };

    const randomDicesArray = () => {
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

    const [numbers, setNumbers] = React.useState(randomDicesArray());

    const [lastDiceValue, setLastDiceValue] = React.useState(0);

    const selectDice = (id) => {
        setNumbers((prevNumbers) => {
            return prevNumbers.map((item) => {
                if (
                    item.id === id &&
                    (lastDiceValue === 0 || lastDiceValue === item.number)
                ) {
                    setLastDiceValue(item.number);
                    return { ...item, isSelected: !item.isSelected };
                } else return item;
            });
        });

        if (numbers.every((item) => !item.isSelected)) {
            setLastDiceValue(0);
        }
    };

    const rollDices = () => {
        setNumbers((prevNumbers) => {
            return prevNumbers.map((item) =>
                item.isSelected ? item : { ...item, number: randomNumber() }
            );
        });
    };

    const resetDices = () => {
        setNumbers(randomDicesArray());
    };

    let isGameFinished = numbers.every((item) => item.isSelected);

    return (
        <div className="container">
            <div className="wrapper">
                <h1 className="heading">Tenzies</h1>
                <p className="text">
                    Roll until all dice are the same. Click each die to freeze
                    it at its current value between rolls.
                </p>
                {numbers.map((item) => (
                    <Dice
                        key={item.id}
                        value={item.number}
                        isSelected={item.isSelected}
                        selectDice={() => selectDice(item.id)}
                    />
                ))}
                <Button
                    rollDices={rollDices}
                    resetDices={resetDices}
                    isGameFinished={isGameFinished}
                />
            </div>
        </div>
    );
};

export default Main;
