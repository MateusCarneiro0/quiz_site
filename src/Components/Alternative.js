import "animate.css"
export default function Alternative({
    letter,
    alternativeText,
    marked,
    onClickMark,
    indexQuestion,
    checked,
  }) {

    return (
      <div className="animation__animated animation__pulse alternatives">
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