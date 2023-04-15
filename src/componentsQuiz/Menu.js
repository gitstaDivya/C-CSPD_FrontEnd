import "../QApp.css";
import { useContext, useState } from "react";
import { GameStateContext } from "../helperQuiz/Contexts";
import Quiz from "./Quiz";
import PDQuiz from "../compPDquiz/PDQuiz";
import CSQuiz from "../compCSquiz/CSQuiz";
import SSQuiz from "../compSSquiz/SSQuiz";

function Menu() {
    const { gameState, setGameState, userName, setUserName } = useContext(
        GameStateContext
    );

    const [selectedTopic, setSelectedTopic] = useState("");

    const handleStartQuiz = () => {
        if (selectedTopic === "cs") {
            setGameState("playingcs");
        } else if (selectedTopic === "pd") {
            setGameState("playingpd");
        } else if (selectedTopic === "ss") {
            setGameState("playingss");
        } else {
            setGameState("playing");
        }
    };

    const handleSelectTopic = (event) => {
        setSelectedTopic(event.target.value);
    };

    return (
        <div className="Menu">
            <div>
                <h1 id="quizhead">Quiz App</h1>
                <div>
                    <label className="qmenulabel">Enter Your Name :</label>
                    <input
                        type="text"
                        placeholder="Ex. John Smith"
                        onChange={(event) => {
                            setUserName(event.target.value);
                        }}
                        style={{ paddingLeft: "15px" }}
                    />
                    <label className="qmenulabel">Choose a Topic :</label>
                    <select onChange={handleSelectTopic}>
                        <option value="">General</option>
                        <option value="cs">Communication Skills</option>
                        <option value="pd">Personality Development</option>
                        <option value="ss">Soft Skills</option>
                    </select>
                    <br />
                    <button className="qbutton" onClick={handleStartQuiz}>
                        Start Quiz
                    </button>
                </div>
            </div>
        </div>
    );
}


export default Menu;
