import "./index.css";
import data from "./data.js";
import { useState } from "react";

function App() {
  const [numQuestion, setNumQuestion] = useState(0);

  const [question, setQuestion] = useState(data[numQuestion]);

  function onHandleCheckQuestion() {
    

  } //O estado derivado age como um estado normal e muda quando outro estado muda
  
  function onHandleNext() {
    setNumQuestion((n) => n >= 5 ? n : n+=1)
    setQuestion(() => data[numQuestion + 1])

  }
  function onHandlePrevious() {
    setNumQuestion((n) => n - 1);
    setQuestion(() => data[numQuestion - 1])
  }

  return (
    <>
      <Logo />
      <Question
        marked={question.marked}
        setQuestion={setQuestion}
        titleQuestion={question.titulo}
        numberQuestion={numQuestion + 1}
        alternatives={question.alternativas}
      />
      <div className="buttons">
        {numQuestion ? <Button onHandleClick={onHandlePrevious}>Previous</Button>:null}
        <Button>Check Question</Button>
        {numQuestion < 4 ? <Button onHandleClick={onHandleNext}>Next</Button>: <Button>Finish Quiz</Button>}
      </div>
    </>
  );
}
function Question({
  marked,
  titleQuestion,
  numberQuestion,
  alternatives,
  setQuestion,
}) {
  const letters = ["A", "B", "C", "D", "E"];
  function onHandleMark(id) {
    setQuestion((question) => ({
      ...question,
      marked: id,
    }));
  }

  return (
    <div className="question">
      {numberQuestion}.<p className="title">{titleQuestion}</p>
      {alternatives.map((q, i) => {
        return (
          <Alternative
            marked={marked === i}
            letter={letters[i]}
            alternativeText={q.texto}
            key={i}
            indexQuestion={i}
            onClickMark={onHandleMark}
          />
        );
      })}
    </div>
  );
}
function Alternative({
  letter,
  alternativeText,
  marked,
  onClickMark,
  indexQuestion,
}) {
  return (
    <div className="alternatives">
      <button
        onClick={() => onClickMark(indexQuestion)}
        className={`alternative ${marked ? `marked` : ``}`}
      >
        <div className="circle">{letter}</div>
        <p>{alternativeText}</p>
      </button>
    </div>
  );
}
function Logo() {
  return (
    <header style={{ alignSelf: "center" }} className="logo">
      <h1>The Quiz</h1>
    </header>
  );
}
function Button({ children, onHandleClick }) {
  return (
    <button className="button" onClick={onHandleClick}>
      {children}
    </button>
  );
}
export default App;
