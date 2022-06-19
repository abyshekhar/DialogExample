const add = document.getElementById("add");
let userList = document.getElementById("userList");
const dialog = document.querySelector("dialog");
const username = dialog.querySelector("#username");
add.addEventListener("click", function (e) {
  dialog.querySelector("form").reset();
  dialog.showModal();
  e.preventDefault();
});

dialog.addEventListener("close", function (e) {
  dialog.returnValue = username.value;
  var li = document.createElement("li");
  li.innerText = dialog.returnValue;
  userList.appendChild(li);
});
