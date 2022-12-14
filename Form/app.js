let login_form = document.querySelector("#login_form");
let btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  let acc = document.getElementById("account");
  let pas = document.getElementById("password");

  console.log("account = " + acc.value);
  console.log("password = " + pas.value);
});
