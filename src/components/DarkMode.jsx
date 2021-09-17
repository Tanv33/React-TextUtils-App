import React, { useState } from "react";

export default function DarkMode() {
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const [btnColor, setBtnColor] = useState("btn btn-dark");
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white"
  });

  const changeMode = () => {
      if (myStyle.backgroundColor === "white") {
        setMyStyle({
            color: "white",
            backgroundColor: "black",
          })
          setBtnText("Enable White Mode")
          setBtnColor("btn btn-light")
      } else {
        setMyStyle({
            color: "black",
            backgroundColor: "white",
          })
          setBtnText("Enable Dark Mode")
          setBtnColor("btn btn-dark")


      }
  };

  return (
    <div>
      <div className="container my-3 p-3" style={myStyle}>
        <h1>Dark Mode & White Mode </h1>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="true"
                aria-controls="flush-collapseOne"
                style={myStyle}
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Accordian 1. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Veniam iste facere officiis autem? Error corrupti sit
                aliquam blanditiis modi quam libero culpa repellendus nihil
                temporibus magni officia, quibusdam omnis fugiat maiores
                voluptates at? Dignissimos.
              </div>
            </div>
          </div>
        </div>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="true"
                aria-controls="flush-collapseTwo"
                style={myStyle}
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Accordian 2. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Facere aspernatur in, quas, quisquam cupiditate quod
                necessitatibus neque unde deserunt iure cum accusamus inventore
                sed totam consequatur doloremque vitae quaerat, voluptatum
                possimus tempora? Ea, corrupti.
              </div>
            </div>
          </div>
        </div>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="true"
                aria-controls="flush-collapseThree"
                style={myStyle}
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Accordian 3. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Numquam dolor aperiam pariatur nulla aliquam
                exercitationem ex quis aspernatur nam perspiciatis dolorum
                eligendi velit temporibus corrupti sapiente ipsa culpa quas,
                quod soluta corporis dignissimos ducimus!
              </div>
            </div>
          </div>
        </div>
        <div className="container my-3" >
          <button className={btnColor} onClick={changeMode}>
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
}
