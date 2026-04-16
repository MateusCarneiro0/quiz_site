import "./index.css";
import data from "./data.js";
import { useState } from "react";
import Button from "./Components/Button.js";
import Question from "./Components/Question.js";
import Logo from "./Components/Logo.js";

function App() {
  const [numQuestion, setNumQuestion] = useState(0);

  const [question, setQuestion] = useState(data[numQuestion]);

  const [isChecked, setIsChecked] = useState([null, null]);

  function onHandleNext() {
    setNumQuestion((n) => (n >= data.length ? n : (n += 1)));
    setQuestion(() => data[numQuestion + 1]);
    setIsChecked(() => [null, null]);
  }
  function onHandlePrevious() {
    setNumQuestion((n) => n - 1);
    setQuestion(() => data[numQuestion - 1]);
    setIsChecked(() => [null, null]);
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
        {question.marked !== null ? (
          <Button
            onHandleClick={() =>
              setIsChecked((c) =>
                c[0] === null && c[1] === null
                  ? question.marked === null
                    ? [null, null]
                    : [
                        question.alternativas[question.marked].correct,
                        question.marked,
                      ]
                  : c
              )
            }
          >
            Check Question
          </Button>
        ) : null}
        {numQuestion < data.length - 1 ? (
          <Button onHandleClick={onHandleNext}>Next</Button>
        ) : null}
      </div>
    </>
  );
}
export default App;

//O estado derivado continua sendo re-renderizado quando o estado real muda

//Se o estado persistir na hora de fazer uma mudança sempre faça
