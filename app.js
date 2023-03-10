const saveBtn = document.getElementById("save");
const textInput = document.getElementById("text");
const fileInput = document.getElementById("file");
const destroyBtn = document.getElementById("destroy-btn");
const eraserBtn = document.getElementById("eraser-btn");
const modeBtn = document.getElementById("mode-btn");
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);
// const colorOptions = document.getElementsByClassName("color-option")
const lineWidth = document.getElementById("line-width");
const color = document.getElementById("color");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";

// 값이 변하는 변수
let isPainting = false;
let isFilling = false;

const onMove = (event) => {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  // 각 선 굵기
  ctx.beginPath();
  ctx.moveTo(event.offsetX, event.offsetY);
};

const onMouseDown = (event) => {
  // 마우스 다운시 true로 변경
  isPainting = true;
};

const onMouseUp = (event) => {
  // 마우스 업 시 flase
  isPainting = false;
};

const onLineWidthChange = (event) => {
  // console.log(event.target.value);
  ctx.lineWidth = event.target.value;
};

const onColorChange = (event) => {
  //  console.log(event.target.value)
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
};

const onColorClick = (event) => {
  // dataset DOMStringMap {color: '#8e44ad'}
  const colorValue = event.target.dataset.color;
  // console.dir(event.target);
  // console.dir(event.target.dataset.color);
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue;
};

const onModeClick = () => {
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = "Fill";
  } else {
    isFilling = true;
    modeBtn.innerText = "Draw";
  }
};

const onCanvasClick = () => {
  if (isFilling) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
};

const onDestroyClick = () => {
  ctx.fillStyle = "White";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
};

const onEraserClick = () => {
  ctx.strokeStyle = "White";
  isFilling = false;
  modeBtn.innerText = "Fill";
};

const onFileChange = (event) => {
  // console.log(event);
  // console.dir(event.target);
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  // console.log(url)
  //<img src="" />와 동일
  const image = new Image();
  image.src = url;
  image.onload = function () {
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // 파일 선택 버튼 오른쪽 파일 명 null
    fileInput.value = null;
  };
};

const onDoubleClick = (event) => {
  // ctx 현재 상태, 색상, 스타일 저장
  const text = textInput.value;
  if (text !== "") {
    ctx.save();
    // console.log(event.offsetX, event.offsetY);
    ctx.lineWidth = 1;
    ctx.font = "32px serif";
    // ctx.strokeText(text, event.offsetX, event.offsetY);
    ctx.fillText(text, event.offsetX, event.offsetY);
    // ctx 수정 완료
    ctx.restore();
  }
};

const onSaveClick = () => {
  // console.log(canvas.toDataURL())
  const url = canvas.toDataURL();
  // <a href="" download
  const a = document.createElement("a");
  a.href = url;
  a.download = "download.jpg";
  a.click();
};

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", onMouseUp);
// 마우스 다운 중 캔버스 나갈 시 마우스 업 상태에서도 마우스 다운으로 인지
canvas.addEventListener("mouseleave", onMouseUp);
// or
// document.addEventListener("mouseup", onMouseUp);
canvas.addEventListener("click", onCanvasClick);
// console.log(canvas)
canvas.addEventListener("dblclick", onDoubleClick);

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);
// console.log(colorOptions);
// forEach는 배열만 가능
colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);
fileInput.addEventListener("change", onFileChange);
saveBtn.addEventListener("click", onSaveClick);
