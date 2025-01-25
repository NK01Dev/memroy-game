export const EMOJIS = ['🌟', '🎮', '🎲', '🎯', '🎨', '🎭', '🎪', '🎡'];

export const createDeck = (size: number = 16): number[] => {
  const deck = [...Array(size / 2).keys(), ...Array(size / 2).keys()];
  return shuffle(deck);
};
export const shuffle = (array: number[]): number[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};