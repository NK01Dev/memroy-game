import React from 'react';
import { Trophy, Move } from 'lucide-react';
import { GameState } from '../types/game';

interface GameStatsProps {
  gameState: GameState;
  playerName: string | null;
}

export const GameStats: React.FC<GameStatsProps> = ({ gameState, playerName }) => {
  return (
    <div className="flex flex-col gap-4 mb-8">
      <div className="flex items-center gap-2">
        <Trophy className="w-6 h-6 text-yellow-500" />
        <span className="text-lg font-semibold">
          Best Score: {gameState.bestScore} {playerName && `(${playerName})`}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Move className="w-6 h-6 text-blue-500" />
        <span className="text-lg font-semibold">Moves: {gameState.moves}</span>
      </div>
    </div>
  );
};
