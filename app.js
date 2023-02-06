const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 5;

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

// // #Painting board
// ctx.lineWidth = 2;

// const colors = [
//   "#8e44ad",
//   "#e74c3c",
//   "#e67e22",
//   "#e67e22",
//   "#e74c3c",
//   "#f1c40f",
//   "#f1c40f",
//   "#27ae60",
//   "#9b59b6",
// ];

// // FIXME: moveTo 없을 시  처음 클릭하면 선이 그러지지 않음.
// const onClick = (event) => {
//   // 각각의 색 변경
//   ctx.beginPath();
//   ctx.moveTo(0, 0);
//   // Math.floor 소수점 이하 반올림
//   const color = colors[Math.floor(Math.random() * colors.length)];
//   ctx.strokeStyle = color;
//   ctx.lineTo(event.offsetX, event.offsetY);
//   ctx.stroke();
// };

// canvas.addEventListener("mousemove", onClick);

// // # Mouse Painting

// // 값이 변하는 변수
// let isPainting = false;

// const onMove = (event) => {
//   if (isPainting) {
//     ctx.lineTo(event.offsetX, event.offsetY);
//     ctx.stroke();
//     return;
//   }
//   ctx.moveTo(event.offsetX, event.offsetY);
// };

// const onMouseDown = (event) => {
//   // 마우스 다운시 true로 변경
//   isPainting = true;
// };

// const onMouseUp = (event) => {
//   // 마우스 업 시 flase
//   isPainting = false;
// };

// canvas.addEventListener("mousemove", onMove);
// canvas.addEventListener("mousedown", onMouseDown);
// canvas.addEventListener("mouseup", onMouseUp);
// // 마우스 다운 중 캔버스 나갈 시 마우스 업 상태에서도 마우스 다운으로 인지
// canvas.addEventListener("mouseleave", onMouseUp);
// // or
// document.addEventListener("mouseup", onMouseUp);

// // 생성자 함수는 화살표 함수 쓸 수 없음.
// const User = (name, age, ...skills) => {
//     name = name
//     age = age
//     skills = skills
// }

// function User1(name, age, ...skills){
//     this.name = name
//     this.age = age
//     this.skills = skills
// }
// // const user = new User("Mike", 30, "html", "javascript");
// // console.log(user)
// const user1 = new User1("Mike", 30, "html", "javascript");
// console.log(user1)

// // 전개 구문(Spread syntax): 배열
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const result = [...arr1, ...arr2];
// console.log(result);

// // 전개 구문(Spread syntax): 복제
// const arr = [1, 2, 3];
// const arr1 = [...arr];
// console.log(arr1);

// const user = { name: "Mike", age: 30 };
// const user1 = { ...user };
// console.log(user1);

// user1.name = "Tom";
// console.log(user);
// console.log(user1);

// /// arr2 = [4, 5, 6, 1, 2, 3]
// let arr2 = [1, 2, 3];
// const arr3 = [4, 5, 6];

// arr2 = [...arr3, ...arr2];
// console.log(arr2)

// let user = { name: "Mike" };
// const info = { age: 20 };
// const fe = ["JS", "React"];
// const lang = ["Korean", "English"];

// // // 전개구문 안쓸 떄
// // user = Object.assign({}, user, info, { skills: [] });

// // fe.forEach((item) => {
// //   user.skills.push(item);
// // });
// // lang.forEach((item) => {
// //   user.skills.push(item);
// // });

// // 전개구문
// user = {
//   ...user,
//   ...info,
//   skills: [...fe, ...lang],
// };

// console.log(user);

// // # 클로저(Closure)
// 어휘적 환경(Lexical Environmnet)

// let one;
// one = 1;

// const addOne = (num) => {
//     console.log(one + num);
// }
// addOne(5)

// // // 어휘적 환경(Lexical Environment)
// // // Closure 함수와 렉시컬 환경의 조합
// const makeAdder = (x) => {
//     return function(y){
//         return x + y
//     }
// }

// const add3 = makeAdder(3);
// console.log(add3(2));   // 5

// const add10 = makeAdder(10);
// console.log(add10(5));  // 15
// console.log(add3(1))    // 4

// const makeCounter = () => {
//     let num = 0;        // 은닉화

//     return function() {
//         return num++;
//     }
// }

// let counter = makeCounter();

// console.log(counter());     // 0
// console.log(counter());     // 1
// console.log(counter());     // 2

// // # setTimeout / setInterval
// // setTimeout: 일정 시간이 지난 후 함수를 실행
// // setInterval 일정 시간 간격으로 함수를 반복
// // clearInterval(tId)
// let num = 0;

// const showTime = () => {
//   console.log(`Time sec: ${num++}sec.`);
//   if(num > 5) {
//   clearInterval(tid)
//   }
// };

// const tid = setInterval(showTime, 1000);

// // call, apply, bind: 함수 호출 방식과 관계없이 this를 지정할 수 있음
const mike = {
  name: "Mike",
  age:30
};

const tom = {
  name: "Tom",
};
// 화살표 함수 안되는 것 같음
const showThisNa = (name) => console.log(name);

function showThisNaFunc(){
  console.log(this.name);
  console.log(this.age);
}

showThisNa(mike);

showThisNaFunc(mike);       // empty string(window)
showThisNaFunc.call(mike);

