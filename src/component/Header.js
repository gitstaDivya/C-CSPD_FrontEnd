import React from "react";
import SignIn from "./googleSignIn/signIn";
import { useEffect, useState } from "react";
import { auth, provider } from "./googleSignIn/config";
import { signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showQuizButton, setShowQuizButton] = useState(false);

  const handleLoginClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      localStorage.setItem("email", data.user.email);
      setIsLoggedIn(true);
      setShowQuizButton(true);
    });
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    setShowQuizButton(false);
    localStorage.clear();
    window.location.href = "/";
  };

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setIsLoggedIn(true);
      setShowQuizButton(true);
    }
  }, []);

  return (
    <React.StrictMode>
      <div className="menubar">
        <div className="menubar-content">
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-3">
                  <div className="site-title">
                    <a href="/#home" style={{ textDecoration: "none" }}>
                      <h3>C-CSPD</h3>
                    </a>
                  </div>
                </div>
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className="col-md-9 col-sm-9 navbar-style">
                  <div
                    className="collapse navbar-collapse"
                    id="bs-example-navbar-collapse-1"
                  >
                    <ul className="nav navbar-nav">
                      <li>
                        <a href="/#home" className="active">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="/#about">About</a>
                      </li>
                      <li>
                        <a href="/#announcements">Announcements</a>
                      </li>
                      <li>
                        <a href="/#resources">Resources</a>
                      </li>
                      <li>
                        <a href="/pastevents">Past Events</a>
                      </li>
                      <li>
                        <a href="/#contact">Contact</a>
                      </li>
                      <li>
                        <a href="/discuss">Discuss</a>
                      </li>
                      <li className="logincss">
                        {isLoggedIn ? (
                            <div>
                              <button className="Allbutton" id="logoutbutt" onClick={handleLogoutClick}>
                                Logout
                              </button>
                              {showQuizButton && (
                                  <Link to="/quizApp">
                                    <button className="Allbutton">
                                      Quiz
                                    </button>
                                  </Link>
                              )}
                            </div>
                        ) : (
                            <button className="Allbutton" onClick={handleLoginClick}>
                              Login
                            </button>
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </React.StrictMode>
  );
}
export default Header;

