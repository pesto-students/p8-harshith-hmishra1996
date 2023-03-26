function spiral(arr) {
  var spi = [];
  var n = arr.length;
  var row = 0;
  var col = -1;
  while (n > 0) {
    // Moves Right
    for (let i = 0; i < n; i++) {
      spi.push(arr[row][++col]);
    }
    // Moves Down
    for (let i = 0; i < n - 1; i++) {
      spi.push(arr[++row][col]);
    }
    // Moves Left
    for (let i = 0; i < n - 1; i++) {
      spi.push(arr[row][--col]);
    }
    // Moves Up
    for (let i = 0; i < n - 2; i++) {
      spi.push(arr[--row][col]);
    }
    n -= 2;
  }
  return spi;
}

console.log(
  spiral([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
