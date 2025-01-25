import React, { useState } from 'react';
import { GameBoard } from './components/GameBoard';
import { GameStats } from './components/GameStats';
import { useGame } from './hooks/useGame';
import { Gamepad2 } from 'lucide-react';

function App() {
  const { 
    cards, 
    gameState, 
    initializeGame, 
    handleCardClick, 
    playerName, 
    setPlayerName, 
    difficulty, 
    setDifficulty 
  } = useGame();

  const [showModal, setShowModal] = useState(true);

  const startGame = () => {
    setShowModal(false);
    initializeGame();
  };

  const logout = () => {
    // Clear player name and reset modal
    setPlayerName(null);
    localStorage.removeItem('playerName'); // Remove playerName from localStorage
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl max-w-2xl w-full">
        {showModal ? (
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Memory Game</h1>
            <input
              type="text"
              placeholder="Enter your name"
              value={playerName || ''}
              onChange={(e) => setPlayerName(e.target.value)}
              className="border rounded-lg px-4 py-2 mb-4 w-full"
            />
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value as 'easy' | 'medium' | 'hard')}
              className="border rounded-lg px-4 py-2 mb-4 w-full"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            <button
              onClick={startGame}
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Start Game
            </button>
          </div>
        ) : (
          <>
            {/* Display player name */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-700">
                Welcome, {playerName}!
              </h2>
              {/* Logout button */}
              <button
                onClick={logout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
            <GameStats gameState={gameState} playerName={playerName} />
            <GameBoard cards={cards} onCardClick={handleCardClick} />
            {gameState.gameStatus === 'won' && (
              <div className="mt-8 text-center">
                <h2 className="text-2xl font-bold text-green-600 mb-4">
                  Congratulations, {playerName}! You won! 🎉
                </h2>
                <button
                  onClick={initializeGame}
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Play Again
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
