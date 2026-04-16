import "./index.css";
import data from "./data.js";
import { useState } from "react";

function App() {
  const [numQuestion, setNumQuestion] = useState(0);

  const [question, setQuestion] = useState(data[numQuestion]);

  const [isChecked, setIsChecked] = useState([null, null]);

  function onHandleNext() {
    setNumQuestion((n) => (n >= data.length ? n : (n += 1)));
    setQuestion(() => data[numQuestion + 1]);
    setIsChecked(() => [null,null])
  }
  function onHandlePrevious() {
    setNumQuestion((n) => n - 1);
    setQuestion(() => data[numQuestion - 1]);
    setIsChecked(() => [null,null])
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
        checked={isChecked}
        explicationText={question.explicacao}
      />
      <div className="buttons">
        {numQuestion ? (
          <Button onHandleClick={onHandlePrevious}>Previous</Button>
        ) : null}
        {question.marked !== null ? <Button
          onHandleClick={() =>
            setIsChecked((c) =>
              c[0] === null && c[1] === null ?
              (question.marked === null
                ? [null, null]
                : [
                    question.alternativas[question.marked].correct,
                    question.marked,
                  ]
            ):c)
          }
        >
          Check Question
        </Button>:null}
        {numQuestion < data.length - 1 ? (
          <Button onHandleClick={onHandleNext}>Next</Button>
        ) : (
          null
        )}
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
  checked,
  explicationText
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
        const check =
          checked[0] === null && checked[1] === null
            ? null
            : checked[1] === i
            ? checked[0]
              ? "correct"
              : "wrong"
            : q.correct
            ? "correct"
            : "";

        return (
          <Alternative
            marked={marked === i}
            letter={letters[i]}
            alternativeText={q.texto}
            key={i}
            indexQuestion={i}
            onClickMark={onHandleMark}
            checked={check}
          />
        );
      })}
      <div className={`${checked[0] === null && checked[1] === null ? "explication_deactive":"explication_active"}`}>
        <p>Explicação:{explicationText}</p>
      </div>
    </div>
  );
}
function Alternative({
  letter,
  alternativeText,
  marked,
  onClickMark,
  indexQuestion,
  checked,
}) {
  return (
    <div className="alternatives">
      <button
        onClick={() => onClickMark(indexQuestion)}
        className={`alternative ${marked && !checked ? `marked` : ``} ${
          checked === null ? "" : checked
        }`}
      >
        <div className="circle">{letter}</div>
        <p>{alternativeText}</p>
      </button>
    </div>
  );
}
function Logo() {
  return (
    <header className="logo">
      <h1>The Quiz Of Python</h1>
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

//O estado derivado continua sendo re-renderizado quando o estado real muda

//Se o estado persistir na hora de fazer uma mudança sempre faça 
