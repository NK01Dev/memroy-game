# 🧠 Memory Game

An interactive and fun memory game built with **React**, **TypeScript**, and **Tailwind CSS**. This project allows players to test their memory while enjoying advanced features like score tracking, difficulty levels, and user profiles.

---

## 🚀 Features

- **Player Management**:
  - Each player can enter their name before starting a game.
  - Best scores are saved per player.

- **Difficulty Levels**:
  - **Easy**: 6 cards (3 pairs).
  - **Medium**: 16 cards (8 pairs).
  - **Hard**: 20 cards (10 pairs).

- **Smooth Animations**:
  - 3D flip effect when flipping cards.

- **Dynamic Scores**:
  - Real-time score updates and best score calculation.

- **Data Persistence**:
  - Uses **localStorage** to save scores between sessions.

---

## 🛠 Technologies Used

- **Frontend**:
  - [React](https://reactjs.org/): For building interactive user interfaces.
  - [TypeScript](https://www.typescriptlang.org/): For type-safe and readable code.
  - [Tailwind CSS](https://tailwindcss.com/): For fast and responsive styling.

- **Other Tools**:
  - [Lucide React](https://lucide.dev/): For modern and elegant icons.
  - LocalStorage: For data persistence.

---

## 📂 Project Structure

- The project is organized modularly for better maintainability:
memory-game/
├── src/
│ ├── components/ # React components
│ │ ├── Card.tsx # Individual card
│ │ ├── GameBoard.tsx # Card grid
│ │ └── GameStats.tsx # Game statistics
│ ├── hooks/ # Custom hooks
│ │ └── useGame.ts # Game logic
│ ├── utils/ # Utilities
│ │ └── gameUtils.ts # Card-related functions
│ ├── types/ # TypeScript types
│ │ └── types.ts # Interfaces and types
│ ├── App.tsx # Main entry point
│ └── index.tsx # Application rendering
├── public/ # Static files
├── tailwind.config.js # Tailwind CSS configuration
├── package.json # Project dependencies
└── README.md # Project documentation   

---

## 🎨 User Interface

- **Colors**: Vibrant gradients from purple to pink.
- **Interactive Buttons**: Hover effects for a smooth user experience.
- **Icons**: Lucide React icons for clear visual indicators.

### Main Pages:
1. **Home Page**:
   - Input field for the player's name.
   - Difficulty level selection.
2. **Game Board**:
   - Card grid based on the selected difficulty.
3. **Statistics**:
   - Display of the current score and the player's best score.

---

## 🚀 How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/NK01Dev/memroy-game
2. Install dependencies:

cd memory-game
npm install
3. Start the development server:
npm start
4. Open your browser and navigate to:       
http://localhost:3000

🔮 Future Features
Leaderboard: Display top scores from all players.

Timer: Add a countdown to increase difficulty.

Sound Effects: Add sounds for correct or incorrect matches.

Multiplayer Mode: Allow multiple players to take turns.

🙏 Acknowledgments
A big thank you to everyone who contributed to this project, as well as the open-source communities for their amazing tools.
