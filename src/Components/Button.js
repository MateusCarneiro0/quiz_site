export default function Button({ children, onHandleClick }) {
    return (
      <button className="button" onClick={onHandleClick}>
        {children}
      </button>
    );
  }