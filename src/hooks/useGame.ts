import { useState, useEffect } from 'react';
import { Card, GameState } from '../types/game';
import { EMOJIS, createDeck } from '../utils/gameUtils';

export const useGame = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [gameState, setGameState] = useState<GameState>({
    score: 0,
    bestScore: 0,
    moves: 0,
    gameStatus: 'idle',
  });
  const [playerName, setPlayerName] = useState<string | null>(null);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');

  // Load player name and best score from localStorage
  useEffect(() => {
    if (playerName) {
      const savedBestScore = localStorage.getItem(`bestScore_${playerName}`);
      setGameState((prev) => ({
        ...prev,
        bestScore: savedBestScore ? parseInt(savedBestScore, 10) : 0,
      }));
    }
  }, [playerName]);

  const initializeGame = () => {
    const deckSize = difficulty === 'easy' ? 6 : difficulty === 'hard' ? 20 : 16;
    const deck = createDeck(deckSize);
    const newCards = deck.map((index) => ({
      id: Math.random(),
      emoji: EMOJIS[index],
      isFlipped: false,
      isMatched: false,
    }));

    setCards(newCards);
    setGameState({
      score: 0,
      bestScore: gameState.bestScore,
      moves: 0,
      gameStatus: 'playing',
    });
  };

  const handleCardClick = (id: number) => {
    if (gameState.gameStatus !== 'playing') return;

    const flippedCards = cards.filter((card) => card.isFlipped && !card.isMatched);
    if (flippedCards.length === 2) return;

    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, isFlipped: true } : card
      )
    );

    setGameState((prev) => ({ ...prev, moves: prev.moves + 1 }));
  };

  useEffect(() => {
    const flippedCards = cards.filter((card) => card.isFlipped && !card.isMatched);
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      if (first.emoji === second.emoji) {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === first.id || card.id === second.id
                ? { ...card, isMatched: true }
                : card
            )
          );
          setGameState((prev) => ({ ...prev, score: prev.score + 10 }));
        }, 500);
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === first.id || card.id === second.id
                ? { ...card, isFlipped: false }
                : card
            )
          );
        }, 1000);
      }
    }
  }, [cards]);

  useEffect(() => {
    if (cards.length > 0 && cards.every((card) => card.isMatched)) {
      setGameState((prev) => {
        const newBestScore = Math.max(prev.score, prev.bestScore);

        // Save best score per player
        if (playerName) {
          localStorage.setItem(`bestScore_${playerName}`, newBestScore.toString());
        }

        return {
          ...prev,
          gameStatus: 'won',
          bestScore: newBestScore,
        };
      });
    }
  }, [cards]);

  return {
    cards,
    gameState,
    playerName,
    setPlayerName,
    difficulty,
    setDifficulty,
    initializeGame,
    handleCardClick,
  };
};
