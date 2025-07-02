export function checkGuess(guess, target) {
  const result = Array(target.length).fill('gray');
  const targetLetters = target.split('');

  // Mark greens
  for (let i = 0; i < target.length; i++) {
    if (guess[i] === target[i]) {
      result[i] = 'green';
      targetLetters[i] = null;
    }
  }

  // Mark yellows
  for (let i = 0; i < target.length; i++) {
    if (result[i] !== 'green' && targetLetters.includes(guess[i])) {
      result[i] = 'yellow';
      targetLetters[targetLetters.indexOf(guess[i])] = null;
    }
  }

  return result;
}
