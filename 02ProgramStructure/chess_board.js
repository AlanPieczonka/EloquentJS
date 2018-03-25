const createChessBoard = (width, height) => {
  let board = '';
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      ((i + j) % 2 == 0) ? (board += " ") : (board += "#");
    }
    i !== height - 1 && (board += "\n");
  }
  return board;
};

console.log(createChessBoard(20, 10));
