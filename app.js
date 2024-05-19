let inputField = document.querySelector("#input");
let titleField = document.querySelector("#title");
let paraBox = document.querySelector("#para");
let titleBox = document.querySelector("#title-box");
let gettingDate = document.querySelector("#date");
let error = document.querySelector("#error");

function getInput() {
  if (inputField.value === "" || titleField.value === "") {
    error.innerText = "Title and Task should not be empty!";
  } else {
    error.innerText = "";
    let d = new Date();
    paraBox.innerText += `${inputField.value} \n`;
    inputField.value = "";
    titleBox.innerText += titleField.value + "\n";
    titleField.value = "";
    gettingDate.innerText += d.toLocaleString() + "\n";
  }
}

let gettingYear = document.querySelector("#year");

function getYear() {
  let d = new Date();
  let year = d.getFullYear();
  gettingYear.innerText = year;
}
getYear();
