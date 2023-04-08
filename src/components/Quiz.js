import { useState, useContext } from "react";
import { Questions } from "../helpers/Questions";
import { GameStateContext } from "../helpers/Contexts";
import "../QApp.css";

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    const {score, setScore, gameState, setGameState } = useContext(GameStateContext);

    const chooseOption = (option) => {
        setOptionChosen(option);
    };

    const nextQuestion = () => {
        if (Questions[currentQuestion].answer === optionChosen) {
            setScore(score + 1);
        }

        setCurrentQuestion(currentQuestion + 1);
        setOptionChosen("");
    };

    const restartQuiz = () => {
        setScore(0);
        setGameState("menu");
    };

    const finishQuiz = () => {
        if (Questions[currentQuestion].answer === optionChosen) {
            setScore(score + 1);
        }
        setGameState("finished");
    };

    return (
        <div className="Quiz">
            <div id="qHeadandScore">
                <h2>
                    {currentQuestion + 1} / {Questions.length}
                </h2>
                <h2 className="questionsAhead">{Questions[currentQuestion].prompt}</h2>
            </div>
            {/*
            ------ for showing current question number greater than total number of questions -----
            <div className="qHeadandScore">
                <h1 style={{display: "inline-block", marginRight: "7px"}}>{currentQuestion + 1}</h1>
                <h3 style={{display: "inline-block"}}> / {Questions.length}</h3>
                <h2 className="questionsAhead">{Questions[currentQuestion].prompt}</h2>
            </div>
            */}
            <div className="questions">
                <button
                    className={`qbutton ${optionChosen === "optionA" ? "selected" : ""}`}
                    onClick={() => {
                        chooseOption("optionA");
                    }}
                >
                    {Questions[currentQuestion].optionA}
                </button>
                <button
                    className={`qbutton ${optionChosen === "optionB" ? "selected" : ""}`}
                    onClick={() => {
                        chooseOption("optionB");
                    }}
                >
                    {Questions[currentQuestion].optionB}
                </button>
                <button
                    className={`qbutton ${optionChosen === "optionC" ? "selected" : ""}`}
                    onClick={() => {
                        chooseOption("optionC");
                    }}
                >
                    {Questions[currentQuestion].optionC}
                </button>
                <button
                    className={`qbutton ${optionChosen === "optionD" ? "selected" : ""}`}
                    onClick={() => {
                        chooseOption("optionD");
                    }}
                >
                    {Questions[currentQuestion].optionD}
                </button>
            </div>

            {currentQuestion === Questions.length - 1 ? (
                <button className="qbutton qfinish" onClick={finishQuiz}>
                    Finish Quiz
                </button>
            ) : (
                <button className="qbutton qnext qb200px" onClick={nextQuestion} id="nextQuestion">
                    Next Question
                </button>
            )}

            <button className="qbutton qrestart" onClick={restartQuiz}>
                Restart Quiz
            </button>

            <GameStateContext.Provider value={{ score, setScore }}>
                {gameState === "finished" ? <EndScreen /> : null}
            </GameStateContext.Provider>
        </div>
    );
}

export default Quiz;
