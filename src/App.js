import "./App.css";
import DarkMode from "./components/DarkMode";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import { useState } from "react";
import AlertMsg from "./components/AlertMsg";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";

function App() {
  // setInterval(() => {
  //   document.title  = "Text Utils is Amazing"
  // }, 2000);
  // setInterval(() => {
  //   document.title  = "Install Text Utils now"
  // }, 1500);

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert("");
    }, 1500);
  };
  function toggleButton() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
    }
  }

  function changeColorRGB(text) {
    let buttonText = text.target.innerText;
    if (buttonText === "R") {
      document.body.style.backgroundColor = "#bf1111";
      document.body.style.color = "white";
    } else if (buttonText === "G") {
      document.body.style.backgroundColor = "#14871a";
      document.body.style.color = "white";
    } else if (buttonText === "Bl") {
      document.body.style.backgroundColor = "darkblue";
      document.body.style.color = "white";
    } else if (buttonText === "Br") {
      document.body.style.backgroundColor = "brown";
      document.body.style.color = "white";
    } else if (buttonText === "Pi") {
      document.body.style.backgroundColor = "#ab0ca6";
      document.body.style.color = "white";
    }
  }

  return (
    <>
      {/* <Navbar
        homeTitle="Tanveer Web"
        firstLink="Home"
        mode={mode}
        toggleButton={toggleButton}
        changeColorRGB={changeColorRGB}
      /> */}
      {/* <Navbar homeTitle ={2} firstLink= "My Home"/> */}
      {/* <Navbar /> */}
      {/* <AlertMsg showAlert={alert} />
      <Textarea
        heading="Enter your Text Below"
        mode={mode}
        showAlert={showAlert}
      /> */}
      {/* <DarkMode/> */}
      <Router>

        <Switch>
          <Route exact path="/about">
          <Navbar
          homeTitle="Tanveer Web"
          firstLink="Home"
          secondLink="About"
          mode={mode}
          toggleButton={toggleButton}
          changeColorRGB={changeColorRGB}
          />
        <AlertMsg showAlert={alert} />
            <DarkMode />
          </Route>
          <Route exact path="/">
          <Navbar
          homeTitle="Tanveer Web"
          firstLink="Home"
          secondLink="About"
          mode={mode}
          toggleButton={toggleButton}
          changeColorRGB={changeColorRGB}
          />
        <AlertMsg showAlert={alert} />
            <Textarea
              heading="Enter your Text Below"
              mode={mode}
              showAlert={showAlert}
            />
          </Route>
          <Route exact path="*">
        <PageNotFound/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
