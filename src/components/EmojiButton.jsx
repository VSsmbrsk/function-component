function EmojiButton({ emoji, count, onClick }) {
  return (
    <button className="counter-btn" onClick={onClick}>
      {emoji} {count}
    </button>
  );
}

export default EmojiButton;
