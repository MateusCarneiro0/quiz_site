import Alternative from "./Alternative";
export default function Question({
    marked,
    titleQuestion,
    numberQuestion,
    alternatives,
    setQuestion,
    checked,
    explicationText,
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
        <div
          className={`${
            checked[0] === null && checked[1] === null
              ? "explication_deactive"
              : "explication_active"
          }`}
        >
          <p>Explicação:{explicationText}</p>
        </div>
      </div>
    );
  }