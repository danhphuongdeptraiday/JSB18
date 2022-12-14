// console.log("hê lô");
//1. Biến ở trong JS: let, var, const
// let a = 1;// kiểu dữ liệu số Number
// a = "10";
// let b = "Danh Phuong"; // kiểu dữ liệu chuỗi : String
// let c = false;// Kiểu dữ liệu là Boolean chỉ có 2 giá trị là true/false
// let d;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// const e = "abc"; // const k thể thay đổi được giá trị của biến
// e = "xyz"
// console.log(e);

// let myName = "Phương";
// console.log("My name is " + myName);

// Tạo 3 biến: Your name, age, checked (true/false)
// My name is ...
// My age is ...
// Checked = ...
// let mya = "let"

// console.log(a);
// var a = 10;

// let x;
// // x = Number(x);
// console.log(typeof x);

// let x = 10;
// x = String(x);
// console.log(typeof x);

//2. Toán tử +, -, *, /, **: mũ, %: chia lấy dư
// let a = 13;
// let b = 8;
// let d = 5
// let c = a % b;
// console.log(c % d);


// Khai báo 3 biến dayLon, DayBe, chieuCao
// tính diện tích hình thang

// let c = 64;
// let d = Math.sqrt(c);
// console.log(d);

// Tính diện tích của tam giác khi có 3 cạnh
// let sin30 = 1/2;
// console.log("sin(30) = " + sin30);

// let a = 3;
// let b = 5;
// let c = 6;

// let p = (a + b + c)/2; // nửa chu vi tam giác
// let s_MuHai = p*(p-a)*(p-b)*(p-c);
// let s = Math.sqrt(s_MuHai);
// console.log("Diện tích tam giác = "+ s);

// 3. Function: khối câu lệnh dùng để thực thi 1 nhiệm vụ gì đó
// 3.1 : function khi chưa có đầu vào (mặc đinh)
// function sayHello() {
//     console.log("Hi World");
// } 

// function plusTwoNumber() {
//     let a = 10;
//     let b = 20;
//     console.log(a + b);
//     // sayHello();
//     // plusTwoNumber();
// }

// let a = 10;

// plusTwoNumber();

// sayHello();

//3.2: function có giá trị đầu vào 
// function count(a,b, cccccccc) {
//     a = Number(a);
//     let q = a + b + cccccccc
//     console.log( q);
// }

// count("Ngọc xấu xí", 123, 10);

// let a = "abc";
// a = Number(a);
// console.log(typeof a);

//3.3: function khi có return (trả về)

// function myName () {
    
//     return 10;
// }

// console.log( myName());

// function tinhChuVi(a,b,c){
//     let chuVi = a + b + c;
//     return chuVi;
// }

// console.log(tinhChuVi(3,5,8));

// console.log(myName("Danh", " Phương"));
// let s =  myName("Danh", " Phương")
// console.log(typeof s);

//4. Input nhập từ người dùng

let n1 = prompt("Enter smt")
// n1 = Number(n1)

let n2 = prompt("Enter smt")
n2 = Number(n2)

console.log(n1 + n2);



