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
// const mike = {
//   name: "Mike",
//   age: 30,
// };

// const tom = {
//   name: "Tom",
// };
// // 화살표 함수 안되는 것 같음
// const showThisNa = (name) => console.log(name);

// function showThisNaFunc() {
//   console.log(this.name);
//   console.log(this.age);
// }

// showThisNa(mike);

// showThisNaFunc(mike); // empty string(window)
// showThisNaFunc.call(mike);

// // 객체 업데이트 # call
// function update(birthYear, occupation) {
//   this.birthYear = birthYear;
//   this.occupation = occupation;
// }

// update.call(mike, 2001, "programmer");
// console.log(mike);

// // # apply 매개변수(parameter)를 배열로 받음
// // 결과 값은 call과 같음.
// // spread 연산자 최고
// update.apply(mike, [2001, "programmer"]);
// console.log(mike);

// // // # bind: 함수의 this 값을 영구히 바꿀 수 있음.
// const updateMike = update.bind(mike);
// updateMike(2003, "lower");
// console.log(mike);

// updateMike(2004, "pm");
// console.log(mike);

// // bind ex)
// const user = {
//   name: "Mike",
//   age: 10,
//   showName: function () {
//     console.log(`hello, ${this.name}`);
//   },
//   showAge: function () {
//     console.log(`${this.name} is ${this.age} years old.`);
//   },
// };

// user.showName(); // hello, Mike
// user.showAge(); // Mike is 10 years old.

// let fnName = user.showName;
// let fnAge = user.showAge;

// fnName(); // hello,
// fnAge(); //  is undefined years old.

// let boundFn = fnName.bind(user);
// boundFn();

// // # 상속, prototype
// // .hasOwnProperty('?');
// const user = {
//   name: "Mike",
// };
// console.log(user.name);
// console.log(user.hasOwnProperty("name"));

// // wheels, drive() 공통
// const bmw = {
//   color: "red",
//   wheels: 4,
//   navigation: 1,
//   drive() {
//     console.log("drive..");
//   },
// };

// const benz = {
//   color: "black",
//   wheels: 4,
//   drive() {
//     console.log("drive..");
//   },
// };

// const audi = {
//   color: "blue",
//   wheels: 4,
//   drive() {
//     console.log("drive..");
//   },
// };

// // # __proto__
// const car = {
//   wheels: 4,
//   drive() {
//     console.log("drive..");
//   },
// };

// const bmw = {
//   color: "red",
//   navigation: 1,
// };

// const benz = {
//   color: "black",
// };

// const audi = {
//   color: "blue",
// };

// bmw.__proto__ = car;
// benz.__proto__ = car;
// audi.__proto__ = car;
// // console.log(bmw);
// console.log(bmw.wheels);
// bmw.drive();

// // // # Prototype Chain

// const x5 = {
//   name: "x5",
//   color: "yello",
// };
// // 상속 받은 bmw에 없을 시 bwm가 상속 받은 car에서 찾는다. Prototype Chain
// x5.__proto__ = bmw;
// console.log(x5.wheels);
// x5.drive();

// const car = {
//   wheels: 4,
//   drive() {
//     console.log("drive..");
//   },
// };

// const Bmw = function (color) {
//   this.color = color;
// };

// // car 대신
// Bmw.prototype.wheels = 4;
// Bmw.prototype.drive = function () {
//   console.log("drive..")
// }

// const benz = new Bmw("red");
// const audi = new Bmw("blue");

// // // 생성자 함수.prototype를 하였므로 필요 없음.
// // benz.__proto__ = car;
// // audi.__proto__ = car;

// console.log(benz.wheels);

// // // # instanceof

// console.log(audi instanceof Bmw);
// console.log(audi instanceof car);

// // # Class 생성자 함수는 클래스로 만드는게 버그 발생률을 줄일 수 있음.
// const User = function (name, age) {
//   (this.name = name),
//     (this.age = age),
//     (this.showName = function () {
//       console.log(this.name);
//     });
//   this.showAge = function () {
//     console.log(this.age);
//   };
// };

// const mike = new User("Mike", 30);

// class User2 {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   showName() {
//     console.log(this.name);
//   }
// }

// const tom = new User2("Tom", 20);
// console.log(tom);

// // // # 클래스 상속 extends

// class Car {
//   constructor(color) {
//     this.color = color;
//     this.wheels = 4;
//   }
//   drive() {
//     console.log("dirve..");
//   }
//   stop() {
//     console.log("Stop");
//   }
// }

// // class Bmw extends Car {
// //   park() {
// //     console.log("Park");
// //   }
// // }

// const audi = new Bmw("blue");
// console.log(audi);

// // # 메소드 오버라이딩 method overriding
// // # super 부모 클래스 매서드 사용할 수 있음.
// class Bmw extends Car {
//   park() {
//     console.log("stop");
//   }
// }
// console.log(audi);

// // # Promise
// const pr = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("OK");
//     console.log(resolve);
//   }, 3000);
// });

// pr.then(function (result) {
//   // 성공시 실행
//   console.log(`${result} gogo`);
// })
//   .catch(function (err) {
//     // 실패시 실행
//     console.log("try it again");
//   })
//   .finally(function () {
//     // 마지막에 무조건 실행
//     console.log("final");
//   });

// const pr = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("OK");
//   }, 1000);
//   setTimeout(() => {
//     reject("Reject");
//   }, 1000);
// });

// pr.then((result) => {
//   console.log(result);
// })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("finally");
//   });

// // # callback hell
// const f1 = (callback) => {
//   setTimeout(function () {
//     console.log("1번 주문 완료");
//     callback();
//   }, 1000);
// };

// const f2 = (callback) => {
//   setTimeout(function () {
//     console.log("1번 주문 완료");
//     callback();
//   }, 2000);
// };

// const f3 = (callback) => {
//   setTimeout(function () {
//     console.log("3번 주문 완료");
//     callback();
//   }, 3000);
// };

// console.log("시작");
// f1(function () {
//   f2(function () {
//     f3(function () {
//       console.log("끝");
//     });
//   });
// });

// // # promise test
// const f1 = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("1번 주문 완료");
//     }, 1000);
//   });
// };

// const f2 = (message) => {
//   console.log(message);
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("2번 주문 완료");
//     }, 2000);
//   });
// };

// const f3 = (message) => {
//   console.log(message);
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("3번 주문 완료");
//     }, 3000);
//   });
// };

// // console.log("시작");
// // f1()
// //   .then((res) => f2(res))
// //   .then((res) => f3(res))
// //   .then((res) => console.log(res))
// //   .catch(console.log)
// //   .finally(() => {
// //     console.log("끝")
// //   })

// // Promise.all
// // Promise.all 은 시간도 절약 됨. 한꺼번에 실행되기 떄문.
// // 하나라도 실패하면 실행이 안됨.
// // 반면 위의 경우 실패한 부분에서 멈춤.
// Promise.all([f1(), f2(), f3()]).then((res) => {
//   console.log(res)
// })

// // Promise.race의 경우 제일 먼저 실행되는 것만 실행.

// # async, await
// then 보다 가독성이 좋아 async, await을 쓰는게 나음