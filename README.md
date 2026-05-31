# 🐍 Snake Game

A classic Snake game built with vanilla HTML, CSS, and JavaScript. Control the snake to collect apples, avoid obstacles, and try to achieve the highest score possible!

## 🎮 Features

- **Interactive Gameplay**: Control the snake using arrow keys to navigate the game board
- **Score System**: Earn points by eating apples and watch your score increase
- **Progressive Difficulty**: Game speed increases as you eat more apples, making the challenge harder
- **Obstacles**: Navigate around randomly placed obstacles to avoid instant death
- **Audio Effects**: Enjoy sound effects when eating food or hitting obstacles
- **Game Over Screen**: View your final score and restart the game easily
- **Retro Styling**: Classic retro aesthetic with the "Press Start 2P" font
- **Responsive Design**: Centered game interface with visually appealing background

## 🕹️ How to Play

1. Open `index.html` in your web browser
2. Click the **"startgame"** button to begin
3. Use **Arrow Keys** to control the snake:
   - ⬆️ Up Arrow - Move up
   - ⬇️ Down Arrow - Move down
   - ⬅️ Left Arrow - Move left
   - ➡️ Right Arrow - Move right
4. Eat apples (🍎) to increase your score
5. Avoid:
   - Hitting the snake's own body
   - Hitting obstacles (🚧)
6. The game board wraps around edges - exiting one side brings you to the opposite side
7. Speed increases with each apple eaten, making the game progressively harder
8. Game ends when you hit an obstacle or collide with yourself
9. Click "Play Again" on the Game Over screen to restart

## 🛠️ Technical Stack

- **HTML5**: Game structure and canvas element
- **CSS3**: Styling with flexbox layout, background images, and animations
- **JavaScript (ES6+)**: Game logic, collision detection, and animation

## 📋 Game Mechanics

### Snake Movement
- The snake grows by one segment each time it eats an apple
- If it doesn't eat, it moves normally without growing

### Apple Generation
- Apples spawn at random locations that don't overlap with obstacles
- Eating an apple increases your score and increases game speed

### Obstacles
- 35 obstacles are randomly placed at the start of each game
- Obstacles are positioned with minimum distance spacing to ensure playability
- Obstacles are generated avoiding the initial snake position

### Speed Progression
- Initial speed: 120ms per frame
- Minimum speed: 50ms per frame
- Each apple eaten reduces speed by 5ms (making the game faster)

### Audio
- **eat.mp3**: Plays when the snake eats an apple
- **die.mp3**: Plays when the game ends

## 📂 Project Structure

```
.
├── index.html          # Main HTML file
├── index.css           # Styling for the game
├── index.js            # Game logic and mechanics
├── apple.png           # Apple sprite
├── obstacle.png        # Obstacle sprite
├── grid.jpg            # Game board background
├── po.png              # Main background image
├── eat.mp3             # Eat sound effect
├── die.mp3             # Game over sound effect
└── README.md           # This file
```

## 🚀 Installation

1. Clone or download the repository
2. Open `index.html` directly in your web browser
3. No installation or dependencies required - it's pure vanilla JavaScript!

## 👥 Team

This project was created by:

- **LOUZRI Ibrahim**
- **MESBAHI Adem**
- **GUENDOUZ Ayoub**
- **RIDA Aymen Abderrahmane**
- **LARBANI Imrane**
- **ZERAIB Haroune**

## 📝 License

This project is open source and available for educational purposes.
