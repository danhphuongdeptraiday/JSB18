// let x = document.getElementById("demo");
// // console.log(x);
// x.innerHTML = "abc"; // Thay đổi nội dung bên trong 1 thẻ
// x.style.backgroundColor = "red";

// let listLi = document.getElementsByTagName("li");
// console.log(listLi);

// let listClass = document.getElementsByClassName("li1");
// console.log(listClass);

// let variable = document.getElementsByTagName("h1");
// console.log(variable[1]);
// variable[0].style.fontSize = "20px";

// let h1 = document.createElement("h1");
// h1.innerText = "Nguyễn Danh Phương";
// h1.style.backgroundColor = "red";
// document.body.appendChild(h1);

// let img = document.createElement("img");
// img.src = "anh1.jpg";
// img.style.width = "400px";
// // img.style.display = "block";
// // img.style.margin = "0 auto";
// img.style.position = "relative";
// img.style.left = "50%";
// img.style.transform = "translateX(-50%)";
// document.body.appendChild(img);

// let ul = document.createElement("ul");

// let arrayFavorite = ["Football", "Xien Ban", "Teaching"];

// for (let i = 0; i < arrayFavorite.length; i++) {
//   let li = document.createElement("li");
//   li.innerText = arrayFavorite[i];
//   console.log(li);
//   ul.appendChild(li);
// }

// document.body.appendChild(ul);

// let box = document.getElementById("box");

// let btn = document.getElementsByClassName("btn");
// btn[0].addEventListener("click", function () {
//   box.style.backgroundColor = "red";
// });

// btn[1].addEventListener("click", function () {
//   box.style.backgroundColor = "blue";
// });

// let arrayColor = ["green", "pink", "yellow", "blue", "black", "purple"];

// let btn = document.getElementById("btn");
// btn.addEventListener("click", function () {
//   //   if (box.style.backgroundColor === "red") {
//   //     box.style.backgroundColor = "blue";
//   //   } else {
//   //     box.style.backgroundColor = "red";
//   //   }

//   let i = Math.floor(Math.random() * arrayColor.length);
//   box.style.backgroundColor = arrayColor[i];
// });

// let deleteBox = document
//   .getElementById("deleteBox")
//   .addEventListener("click", function () {
//     if (box.style.display === "block") {
//       box.style.display = "none";
//     } else {
//       box.style.display = "block";
//     }
//   });

// function sayHello() {
//   console.log("Hello World");
// }

//

// let items = document.getElementById("items");
// let menu = document.getElementById("menu");
// menu.addEventListener("click", function () {
//   if (items.style.display === "block") {
//     items.style.display = "none";
//   } else {
//     items.style.display = "block";
//   }
// });

// function printConsole() {
//   console.log("Hello");
// }

let h1 = document.getElementById("text");

let btn = document.getElementById("btn");
// btn.addEventListener("click", function () {
//   if (h1.innerText === "Nguyen Danh Phuong") {
//     h1.innerText = "Cong Quang";
//   } else if (h1.innerText === "Cong Quang") {
//     h1.innerText = "Nguyen Danh Phuong";
//   }
// });
h1.style.display = "block";

btn.addEventListener("click", function () {
  if (h1.style.display === "block") {
    h1.style.display = "none";
  } else if (h1.style.display === "none") {
    h1.style.display = "block";
  }
});
