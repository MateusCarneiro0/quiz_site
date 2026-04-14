import "./index.css";
import data from "./data.js"
import { useState } from "react";

function App() {
  const [numQuestion,setNumQuestion] = useState(0);
  const testQuestion = data[numQuestion];
  return (
    <>
      <Logo />
      <Question titleQuestion={testQuestion.titulo} numberQuestion={1} alternativeText={testQuestion.alternativas[0].texto} alternatives={testQuestion.alternativas}/>
      <div className="buttons"> 
        <Button>Previous</Button>
        <Button>Check Question</Button>
        <Button>Next</Button>
      </div>
    </>
  );
}
function Question({titleQuestion,numberQuestion,alternatives}) {
  const letters = ["A","B","C","D","E"];
  
  
  return (
    <div className="question">
      {numberQuestion}
      <p className="title">{titleQuestion}</p>
      {alternatives.map((q,i) => <Alternative letter={letters[i]} alternativeText={q.texto}/>)}
    </div>
  )
}
function Alternative({ letter, alternativeText,marked }) {
  const [mark,setMark] = useState(false)

  return (
    <div className="alternatives">
      <button onClick={() => setMark((m) => !m)} className="alternative">
        <div className="circle">
          {letter}
        </div>
        <p>{alternativeText}</p>
      </button>
    </div>
  
  )
}
function Logo() {
  return(
    <header style={{alignSelf:"center"}} className="logo">
      <h1>The Quiz</h1>
    </header>
  )
}
function Button ({ children, onHandleClick }) {
  return (
    <button className="button" onClick={onHandleClick}>{children}</button>
  )
}
export default App;
