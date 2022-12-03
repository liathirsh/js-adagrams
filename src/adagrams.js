const LETTERPOOL = {
  A: 9,
  B: 2,
  C: 2,
  D: 4,
  E: 12,
  F: 2,
  G: 3,
  H: 2,
  I: 9,
  J: 1,
  K: 1,
  L: 4,
  M: 2,
  N: 6,
  O: 8,
  P: 2,
  Q: 1,
  R: 6,
  S: 4,
  T: 6,
  U: 4,
  V: 2,
  W: 2,
  X: 1,
  Y: 2,
  Z: 1,
};

export const createLetterPool = () => {
  const letterPoolList = [];
  for (const [letter, value] of Object.entries(LETTERPOOL)) {
    letterPoolList.push(...letter.repeat(value));
  }
  return letterPoolList;
};

// export const findRandomLetter = (allLetters) => {
//   let randomIndex = Math.floor(Math.random() * allLetters.length);
//   return allLetters[randomIndex];
// };

export const drawLetters = () => {
  let allLetters = createLetterPool(LETTERPOOL);
  let hand = [];
  for (let i = 0; i < 10; i++) {
    let randomIndex = Math.floor(Math.random() * allLetters.length);
    hand.push(allLetters[randomIndex]);
    allLetters.splice(randomIndex, 1);
    //consider adding map here
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let lettersInHandCopy = [...lettersInHand];

  for (let i = 0; i < input.length; i++) {
    if (lettersInHandCopy.includes(input[i])) {
      lettersInHandCopy.splice(input[i], 1);
    } else {
      return false;
    }
  }
  return true;
};

// for (let letter in input.toUpperCase()) {
//   if (letter in lettersInHand === false) {
//     return false;
//   }
//   if (letter in allLetters === false) {
//     return false;
//   }
//   if (letter in allLetters) {
//     let letterIndex = allLetters.indexOf(letter);
//     allLetters.splice(letterIndex, 1);
//   }
// }
// return true;

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
