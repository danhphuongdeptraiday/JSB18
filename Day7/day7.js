// function plus() { // Plus = 30
//     let a = 10;
//     let b = 20;
//     console.log("Plus = "+ (a + b));
// }
// function minus() { // Minus = -70
//     let c = 30;
//     let d = 100;
//     return "Minus = " + (c - d);
// }
// function SayName(firstName, lastName) { // Phương Nguyễn
//     console.log(firstName + " " + lastName);
// }
// function divide(name, age) { // Phuong is 22
//     return name + " is " + age
// }

// plus();
// minus();
// console.log(minus())
// SayName("Phuong","Nguyen")
// console.log (divide("Phuong","22"))

// 1. Array: 1 mảng dùng để lưu nhiều giá trị khác nhau
// let a = 1;
// let b = 2;
// let c = 3

// let myArray = ["Nguyễn", 20, true, ""];
// //                0       1    2    3
// myArray[4] = "Phương"
// console.log(myArray);
// Các vị trí trong mảng sẽ được đếm từ số vị trí 0
// let emptyArray = [];
// // emptyArray[0] = "Nguyễn"
// // emptyArray[1] = "Danh"
// // emptyArray[2] = "Phương"
// // emptyArray[3] = "Đẹp"
// // emptyArray[4] = "Trai"

// emptyArray.push(1)
// emptyArray.push(2)
// emptyArray.push(3)
// emptyArray.push(4)
// emptyArray.push(5)
// emptyArray.pop()
// emptyArray.pop()
// emptyArray.pop()
// emptyArray.pop()
// emptyArray.pop()
// console.log(emptyArray);

// 2. So sánh

/*
 == 
 ===
 != 
 !==
<
>
<=
>=
*/

// let a = 9;
// let b = 10;
// console.log(a != b);

// 3. if else: điều kiện if else

// if("Thay Phuong dzai") {
//     console.log("Đúng rồi");
// }

// let a = 9;
// let b = 9;
// if(a  b) {
//     console.log("Kết quả đúng");
// } else { // Ngầm hiểu: a <= b
//     console.log("kết quả sai");
// }

// let day = 4;
// if(day == 2) {
//     console.log("Thứ 2");
// } else if(day == 3) {
//     console.log("Thứ 3");
// } else {
//     console.log("Không thỏa mãn");
// }

// let a = 1, b = 2, c = 3

// if(a == 1 || b == c){
//     console.log("Hà nội");
// }

// let score = Number(prompt("Enter Score ?"))
// if(score < 5) {
//     console.log("Xep loai E");
// } else if (score >= 5 && score < 6) {
//     console.log("Xep loai D");
// } else if (score >= 6 && score < 7) {
//     console.log("Xep loai C");
// } else if (score >= 7 && score < 8) {
//     console.log("Xep loai B");
// } else if (score >= 8 && score < 9) {
//     console.log("Xep loai A");
// } else {
//     console.log("Xep loai A++");
// }

// Switch case tu tim  hieu
// Đối tượng trong js:
// - Đối tượng có thuộc tính và chức năng: (Con người)
// + Thuộc tính (attribute): Tên, tuổi, trường, học, chiều cao, cân nặng, người yêu
// + Chức năng(Function): Ăn, ỉa, nói chuyện, làm bài,

// person.height = "1m55"

// // person.relationship()
// console.log(person);

//5. Vòng lặp (for): Dùng để thực thi 1 nhiệm vụ gì đó nhiều lần.

// console.log("HI");
// console.log("HI");
// console.log("HI");
// console.log("HI");
// console.log("HI");
// console.log("HI");
// console.log("HI");
// console.log("HI");
// console.log("HI");

// for(vị trí bắt đầu   ; điều kiện để vòng lặp chạy  ; bước nhảy sau mỗi lần lặp)

// for(let i = 0; i <= 30; i++) {
//     if(i % 3 == 0) {
//         console.log(i);
//     }
// }

// let qua1 = "tao"
// let qua2 = "cam"
// let qua3 = "le"

// let fruits = ["tao", "cam", "le"];
// //              0      1      2
// // them phan tu vao mang cach 1:
// fruits[3] = 10;
// fruits[4] = true;

// // cach 2:
// fruits.push("ksjfngkndfg");
// fruits.push("ksjfngkndfg");
// fruits.push("ksjfngkndfg");
// fruits.pop();
// fruits.pop();

// console.log(fruits);

// Object: chi 1 doi tuong nao day (hero: tristana)
// - Attribute: name, isHaveGun, gender: ban chan cua doi tuong do
// - Function(chuc nang): shot, jump.

// let hero = {
//   heroName: "Tristana",
//   gender: "female",
//   isHaveGun: true,
//   age: 30,
//   shot: function () {
//     console.log("Ban kha chay");
//   },
//   jump: function () {
//     console.log("Nhay kha cao");
//   },
// };
// // hero.shot()
// hero.heroName = "Zed";
// console.log(hero);

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// Vong lap: for
// for (let i = 5; i < 10; i++) {
//   console.log(i);
// }

// let c = 1;
// c++;
// c++;
// c++;
// c++;

// console.log(c);

let i = 6;
do {
  console.log(i);
  i++;

  let c = 1;
  while (c < 10) {
    console.log("c = " + c);
    c++;
  }
} while (i < 5);

// while (i < 5) {
//   console.log(i);
//   i++;
// }
