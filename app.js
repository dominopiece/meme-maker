const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(150, 150);
// ctx.lineTo(50, 150);
// ctx.lineTo(50, 50);
// ctx.fill();

// // home
// ctx.fillRect(200, 200, 50, 200);
// ctx.fillRect(400, 200, 50, 200);
// ctx.lineWidth = 2;
// ctx.fillRect(300, 300, 50, 100);
// ctx.fillRect(200, 200, 200, 20);
// ctx.moveTo(200, 200);
// ctx.lineTo(325, 100);
// ctx.lineTo(450, 200);
// // ctx.stroke();
// ctx.fill()

// // human
// ctx.fillRect(210, 200, 15, 100);
// // ctx.fillRect(210 - 10, 200  - 10, 15, 100);
// ctx.fillRect(350, 200, 15, 100);
// ctx.fillRect(260, 200, 60, 200);

// ctx.arc(290, 150, 50, 0, 2 * Math.PI);
// ctx.fill();

// ctx.beginPath();
// ctx.fillStyle = "white "
// ctx.arc(270, 150, 5, 1 * Math.PI, 2 * Math.PI);
// ctx.arc(310, 150, 5, 1 * Math.PI, 2 * Math.PI);
// ctx.arc(290, 150, 10, 2 * Math.PI, 1 * Math.PI);
// ctx.fill();


// #Painting board
ctx.lineWidth = 2;

const colors = [
  "#8e44ad",
  "#e74c3c",
  "#e67e22",
  "#e67e22",
  "#e74c3c",
  "#f1c40f",
  "#f1c40f",
  "#27ae60",
  "#9b59b6",
];

// FIXME: moveTo 없을 시  처음 클릭하면 선이 그러지지 않음.
const onClick = (event) => {
  // 각각의 색 변경
  ctx.beginPath();
  ctx.moveTo(0, 0);
  // Math.floor 소수점 이하 반올림
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = color;
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
};

canvas.addEventListener("mousemove", onClick);
