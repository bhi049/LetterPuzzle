export function checkGuess(guess, target) {
  const feedback = [];

  const targetLetters = target.split('');

  // First pass - correct spots
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === target[i]) {
      feedback[i] = 'correct';
      targetLetters[i] = null; // mark it used
    } else {
      feedback[i] = null;
    }
  }

  // Second pass - present but wrong spot
  for (let i = 0; i < guess.length; i++) {
    if (feedback[i]) continue;
    const idx = targetLetters.indexOf(guess[i]);
    if (idx !== -1) {
      feedback[i] = 'present';
      targetLetters[idx] = null;
    } else {
      feedback[i] = 'absent';
    }
  }

  return feedback;
}
