export const shuffleAnswer = (array) =>
  [...array].sort(() => Math.random() - 0.5);
