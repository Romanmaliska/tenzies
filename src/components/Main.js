import React from "react";
import Dice from "./Dice";
import Button from "./Button";
import RollCounter from "./RollCounter";
import Stopwatch from "./Stopwatch";
import Confettis from "./Confetti";
import "./main.scss";

const Main = () => {
    const randomDice = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

    /* Select random dice from randomDice array*/

    const randomDiceIndex = () => {
        return Math.floor(Math.random() * 6);
    };

    /* Creates an array with object for every dice */

    const randomDicesArray = () => {
        let empty = [];
        for (let i = 0; i < 10; i++) {
            empty.push({
                id: i + 1,
                number: randomDice[randomDiceIndex()],
                isSelected: false,
            });
        }
        return empty;
    };

    const [diceNumbers, setDiceNumbers] = React.useState(randomDicesArray());

    const [lastDiceValue, setLastDiceValue] = React.useState("");

    const [isDiceSelected, setIsDiceSelected] = React.useState(false);

    /* managing dice selection */

    const selectDice = (id) => {
        setIsDiceSelected(true);
        setDiceNumbers((prevDiceNumbers) => {
            return prevDiceNumbers.map((item) => {
                if (
                    item.id === id &&
                    (lastDiceValue === "" || lastDiceValue === item.number)
                ) {
                    setLastDiceValue(item.number);
                    return { ...item, isSelected: !item.isSelected };
                } else return item;
            });
        });

        if (diceNumbers.every((item) => !item.isSelected)) {
            setLastDiceValue("");
        }
    };

    const [countOfRolls, setcountOfRolls] = React.useState(0);

    /* managing Roll button functionality */

    const rollDices = () => {
        setcountOfRolls(countOfRolls + 1);

        setDiceNumbers((prevNumbers) => {
            return prevNumbers.map((item) =>
                item.isSelected
                    ? item
                    : { ...item, number: randomDice[randomDiceIndex()] }
            );
        });
    };

    /* managing Reset Game button functionality */

    const resetGame = () => {
        setIsDiceSelected(false);
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
                <Button
                    rollDices={rollDices}
                    resetGame={resetGame}
                    isGameFinished={isGameFinished}
                />
                <RollCounter countOfRolls={countOfRolls} />
                <Stopwatch
                    isDiceSelected={isDiceSelected}
                    countOfRolls={countOfRolls}
                    isGameFinished={isGameFinished}
                />
               { isGameFinished && <Confettis/>}
            </div>
        </div>
    );
};

export default Main;
