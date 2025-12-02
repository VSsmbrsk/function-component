export function getWinner(counters, emojis) {
  const keys = Object.keys(counters);

  const maxKey = keys.reduce((a, b) =>
    counters[a] > counters[b] ? a : b
  );

  return emojis[maxKey];
}
