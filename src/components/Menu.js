import "../QApp.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Menu() {
    const { gameState, setGameState, userName, setUserName } = useContext(
        GameStateContext
    );
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
                <button  className="qbutton"
                         onClick={() => {
                             setGameState("playing");
                         }}
                >
                    Start Quiz
                </button>
                </div>
            </div>
        </div>
    );
}

export default Menu;
