import React from "react";
import Dice from "./Dice";
import Button from "./Button";
import RollCounter from "./RollCounter";
import Stopwatch from "./Stopwatch";
import Animation from "./Confetti";

import "./main.scss";

const Main = () => {

    const randomDice = ["⚀","⚁","⚂","⚃","⚄","⚅"];
    
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

    const [diceNumbers, setDiceNumbers] = React.useState(randomDicesArray());

    const [lastDiceValue, setLastDiceValue] = React.useState(0);

    const [isDiceSelected, setIsDiceSelected] = React.useState(false);

    const selectDice = (id) => {
        setIsDiceSelected(true)
        setDiceNumbers((prevDiceNumbers) => {
            return prevDiceNumbers.map((item) => {
                if (
                    item.id === id &&
                    (lastDiceValue === 0 || lastDiceValue === item.number)
                ) {
                    setLastDiceValue(item.number);
                    return { ...item, isSelected: !item.isSelected };
                } else return item;
            });
        });

        if (diceNumbers.every((item) => !item.isSelected)) {
            setLastDiceValue(0);
        }
    };

    const [countOfRolls, setcountOfRolls] = React.useState(0);

    const rollDices = () => {
        setcountOfRolls(countOfRolls + 1);

        setDiceNumbers((prevNumbers) => {
            return prevNumbers.map((item) =>
                item.isSelected ? item : { ...item, number: randomNumber() }
            );
        });
    };

    const resetDices = () => {
        setIsDiceSelected(false)
        setcountOfRolls(0);
        setDiceNumbers(randomDicesArray());
    };

    let isGameFinished = diceNumbers.every((item) => item.isSelected);

    return (
        <div className="container">
            <div className="game">
                <h1 className="game__heading">Tenzies</h1>
                <p className="game__text">
                    Roll until all dice are the same. Click each die to freeze
                    it at its current value between rolls.
                </p>
                {diceNumbers.map((item) => (
                    <Dice
                        key={item.id}
                        value={item.number}
                        isSelected={item.isSelected}
                        selectDice={() => selectDice(item.id)}
                    />
                ))}
                <div className="control">
                <RollCounter countOfRolls={countOfRolls} />
                <Button
                    rollDices={rollDices}
                    resetDices={resetDices}
                    isGameFinished={isGameFinished}
                />
                <Stopwatch isDiceSelected={isDiceSelected}/>
                </div>
                <Animation isGameFinished={isGameFinished} />
            </div>
        </div>
    );
};

export default Main;
