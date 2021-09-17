import React, { useState } from "react";

export default function Textarea(props) {
  const [text, setText] = useState("");

  function myUpButton() {
    setText(text.toUpperCase());
    text.length !== 0
      ? props.showAlert("Converted to Upper Case", "success")
      : props.showAlert("Text Box is Empty", "warning");
  }

  function myLoButton() {
    setText(text.toLowerCase());
    text.length !== 0
      ? props.showAlert("Converted to Lower Case", "success")
      : props.showAlert("Text Box is Empty", "warning");
  }

  function inputOnChange(e) {
    setText(e.target.value);
  }

  function clearText() {
    setText("");
    text.length !== 0
      ? props.showAlert("Cleared", "success")
      : props.showAlert("Text Box is Empty", "warning");
  }

  function copyText() {
    let newText = document.getElementById("textBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    text.length !== 0
      ? props.showAlert("Copied to clipboard", "success")
      : props.showAlert("Text Box is Empty", "warning");
  }

  function removeSpaces() {
    let extraSpaces = text.split(/[ ]+/);
    setText(extraSpaces.join(" "));
    text.length !== 0
      ? props.showAlert("Extra spaces removed", "success")
      : props.showAlert("Text Box is Empty", "warning");
  }

  return (
    <>
      <div className="container my-3">
        <h1>{props.heading}</h1>
        <textarea
          tabIndex="1"
          value={text}
          onChange={inputOnChange}
          className="form-control my-2"
          id="textBox"
          rows="6"
          placeholder="Type your text here and see magic..."
          style={
            props.mode === "dark"
              ? { backgroundColor: "#0d416b", color: "white" }
              : { backgroundColor: "white", color: "black" }
          }
        ></textarea>
        <button
          type="button"
          className="btn btn-success my-1 mx-1"
          onClick={myUpButton}
          tabIndex="2"
        >
          Convert to Uppercase
        </button>
        <button
          type="button"
          className="btn btn-warning text-white my-1 mx-1"
          onClick={myLoButton}
          tabIndex="3"
        >
          Convert To Lowercase
        </button>
        <button
          type="button"
          className="btn btn-danger my-1 mx-1"
          onClick={clearText}
          tabIndex="4"
        >
          Clear Text
        </button>
        <button
          type="button"
          className="btn btn-info text-white my-1 mx-1"
          onClick={copyText}
          tabIndex="5"
        >
          Copy Text
        </button>
        <button
          type="button"
          className="btn btn-dark my-1 mx-1"
          onClick={removeSpaces}
          tabIndex="6"
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.length !== 0 ? text.split(/[ ][a-z0-9A-Z]/).length : 0} words
          and {text.length} characters {text.split(" ").length - 1} spaces
        </p>
        <p>
          {text.length !== 0 ? 0.008 * text.split(" ").length : 0} minutes read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length === 0
            ? "Enter something in the text box above to preview it here"
            : text}
        </p>
      </div>
    </>
  );
}
