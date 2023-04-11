import React from "react";
import "./App.css";
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
// import Router
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";

// import Component
import Header from "./component/Header";
import Footer from "./component/Footer";
import ScrollToTop from "./component/ScrollToTop";

// import Pages
import Home from "./Pages/Home";
import Resources from "./Pages/Resources";
import SoftSkills from "./Pages/softskills";
import Communication from "./Pages/communication";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/softskills" component={SoftSkills} />
            <Route exact path= "/communication" component={Communication} />
          </Switch>
        </ScrollToTop>
        
      </Router>
    </React.StrictMode>
  );
}

export default App;
