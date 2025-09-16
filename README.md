# The Odin Project - Full Stack JavaScript

## #12 Project: Knights Travails

A project to practice **graph traversal** in JavaScript. The goal is to find the shortest path a knight can take between two squares on a standard 8x8 chessboard.

This is solved using **Breadth-First Search (BFS)**, which guarantees the shortest path in an unweighted graph.

## Overview

- Chessboard represented as coordinates `[x, y]` (from `[0,0]` to `[7,7]`).
- A knight moves in "L" shapes: 2 squares in one direction, 1 square perpendicular.
- BFS is used to explore moves level by level until the target square is reached.
- Keeps track of visited squares to avoid infinite loops.

![Knight’s path example](https://cdn.statically.io/gh/TheOdinProject/curriculum/284f0cdc998be7e4751e29e8458323ad5d320303/ruby_programming/computer_science/project_knights_travails/imgs/00.png)

## Features

- `knightMoves(start, end)` function:
  - Shows the number of moves required.
  - Prints the shortest path between two positions.
  - Example output:
  ```javascript
  knightMoves([3,3], [4,3]);
  => You made it in 3 moves! Here is your path:
    [3,3]
    [4,5]
    [2,4]
    [4,3]
  ```
## Usage
1. Clone or download this repository.
2. Navigate to the project directory
3. Run the script with Node.js:

```bash
node main.js
```
(Change start and end positions to test)