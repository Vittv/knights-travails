// all knight move offsets
const moves = [
  [-2, -1], // 2 left,  1 down
  [-1, -2], // 1 left,  2 down
  [ 1, -2], // 1 right, 2 down
  [ 2, -1], // 2 right, 1 down
  [-2,  1], // 2 left,  1 up
  [-1,  2], // 1 left,  2 up
  [ 1,  2], // 1 right, 2 up
  [ 2,  1]  // 2 right, 1 up
];

// check if position is inside the board
function isValid([x, y]) {
  return x >= 0 && x < 8 && y >= 0 && y < 8;
}

function knightMoves(start, end) {
  if (start[0] === end[0] && start[1] === end[1]) {
    console.log("You made it in 0 moves! Here's your path:");
    console.log(start);
    return;
  }

  // queue stores full paths (arrays of coordinates)
  const queue = [[start]];
  const visited = new Set([start.toString()]);

  while (queue.length > 0) {
    const path = queue.shift();
    const [x, y] = path[path.length - 1];

    // check if target was reached
    if (x === end[0] && y === end[1]) {
      console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
      path.forEach(pos => console.log(pos));
      return path;
    }
    // explore all 8 possible knight moves from the current square
    for (let [dx, dy] of moves) {
      const next = [x + dx, y + dy];
      if (isValid(next) && !visited.has(next.toString())) {
        visited.add(next.toString());
        queue.push([...path, next]);
      }
    }
  }
}

knightMoves([3,3],[4,3]);
