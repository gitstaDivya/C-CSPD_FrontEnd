import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Header from "../Header";
import Footer from "../Footer";
import '../../App.css'
import quizRenderer from "./quizRenderer";
import QApp from "../../QApp";

function LogIn() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showQuizButton, setShowQuizButton] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
        setShowQuizButton(true);
    };

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
        setShowQuizButton(false);
        localStorage.clear();
        window.location.reload();
    };

    const handleQuizClick = () => {
        quizRenderer();
    };
    useEffect(() => {
        const email = localStorage.getItem("email");
        if (email) {
            setIsLoggedIn(true);
            setShowQuizButton(true);
        }
    }, []);

    return (
        <div className="text-center wow fadeIn container row col-md-12 col-sm-12">
            {isLoggedIn && (
                <div className="button-group" style={{ whiteSpace: 'nowrap' }}>
                    <button className="Allbutton" id="logoutbutt" onClick={handleLogoutClick}>
                        Logout
                    </button>
                    {showQuizButton && (
                        <button className="Allbutton" onClick={handleQuizClick}>
                            Quiz
                        </button>
                    )}
                </div>
            )}
            {!isLoggedIn && (
                <button className="Allbutton" onClick={handleLoginClick}>
                    Login
                </button>
            )}
        </div>
    );
}

export default LogIn;
