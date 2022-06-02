import React from "react";
import Dice from "./Dice";
import Button from "./Button";
import "./main.scss";

const Main = () => {
    const randomNumber = () => {
        return Math.floor(Math.random() * 6) + 1;
    };

    const randomNumbersArray = () => {
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

    const [numbers, setNumbers] = React.useState(randomNumbersArray());

    const showDices = () =>
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

    const [lastDiceValue, setLastDiceValue] = React.useState(0);

    const selectDice = (id) => {
        setNumbers((prevNumbers) => {
            return prevNumbers.map((item) => {
                if (item.id === id && lastDiceValue === 0) {
                    console.log(lastDiceValue);
                    setLastDiceValue((prevlastDiceValue) => item.number);
                    return { ...item, isSelected: !item.isSelected };
                } else if (item.id === id && lastDiceValue === item.number) {
                    console.log(lastDiceValue);
                    setLastDiceValue((prevlastDiceValue) => item.number);
                    return { ...item, isSelected: !item.isSelected };
                } else return item;
            });
        });
    };

    const rollDices = () => {
        setNumbers((prevNumbers) => {
            if (prevNumbers.every((item) => item.isSelected)) {
                return randomNumbersArray();
            } else {
                return prevNumbers.map((item) =>
                    item.isSelected ? item : { ...item, number: randomNumber() }
                );
            }
        });
    };

    const isGameFinished = () => {
        return numbers.every((item) => (item.isSelected ? true : false));
    };

    return (
        <div className="container">
            <div className="wrapper">
                <h1 className="heading">Tenzies</h1>
                <p className="text">
                    Roll until all dice are the same. Click each die to freeze
                    it at its current value between rolls.
                </p>
                {showDices()}
                <Button rollDices={rollDices} endOfGame={isGameFinished()} />
            </div>
        </div>
    );
};

export default Main;
