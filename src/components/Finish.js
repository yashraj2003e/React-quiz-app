function Finish({ points, maxPoints, highScore, dispatch }) {
  const percentage = (points / maxPoints) * 100;
  return (
    <>
      <p className="result">
        <span>🏅</span> You scored <strong>{points}</strong> out of {maxPoints}{" "}
        ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore" style={{ margin: "2rem auto" }}>
        Highest Score: {highScore}
      </p>
      <button
        className="btn"
        style={{ textAlign: "center", display: "block", margin: "0 auto" }}
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart !
      </button>
    </>
  );
}

export default Finish;
