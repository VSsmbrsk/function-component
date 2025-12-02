import { useState } from "react";
import EmojiButton from "./components/EmojiButton";
import { getWinner } from "./components/helpers";
import './App.css'

function App() {
  const emojis = {
    happy: "😀",
    smile: "😄",
    love: "😍",
    angel: "😇",
    wink: "😉",
  };

  const [counters, setCounters] = useState({
    happy: 0,
    smile: 0,
    love: 0,
    angel: 0,
    wink: 0,
  });

  const increment = (key) => {
    setCounters((prev) => ({
      ...prev,
      [key]: prev[key] + 1,
    }));
  };

  const [result, setResult] = useState(null);

  const onShowResults = () => {
    const winnerEmoji = getWinner(counters, emojis);
    setResult(winnerEmoji);
  };

  const onClean = () => {
    setCounters({
      happy: 0,
      smile: 0,
      love: 0,
      angel: 0,
      wink: 0,
    });
    setResult(null);
  };

  return (
    <>
      <div className="wrapper">
        {Object.keys(emojis).map((key) => (
          <EmojiButton
            key={key}
            emoji={emojis[key]}
            count={counters[key]}
            onClick={() => increment(key)}
          />
        ))}
      </div>

      <div>
        <button className="show__results--btn" onClick={onShowResults}>
          Show Results
        </button>

        <button className="clean-btn" onClick={onClean}>
          Clean
        </button>
      </div>

      {result && (
        <div>
          <h2>Winner: {result}</h2>
        </div>
      )}
    </>
  );
}

export default App;
