import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Heading from "./components/Heading";
import SubHeading from "./components/SubHeading";
import InputQuery from "./components/InputQuery";
import SubmitButton from "./components/SubmitButton";

function App() {
  return (
    <>
    <Heading/>
    <SubHeading/>
    <InputQuery/>
    <SubmitButton/>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
