console.log("Empieza a escribir un nuevo mundo! 🎉")

const columns = 150;
const rows = 100;
const cellSize = 5;

function setup() {
  var canvas = createCanvas(columns * cellSize, rows * cellSize);

  canvas.parent("sketch-holder");
  canvas.background(100);
}
