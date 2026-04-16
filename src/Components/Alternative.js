export default function Alternative({
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