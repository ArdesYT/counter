let add = document.querySelector("#increase");
let dec = document.querySelector("#decrease");
let res = document.querySelector("#reset");

add.addEventListener("click", function () {
    let output = document.querySelector("#result");
    let result = Number(output.innerText) + 1;
  
    output.innerText = result;
  });

  dec.addEventListener("click", function () {
    let output = document.querySelector("#result");
    let result = Number(output.innerText) - 1;
  
    output.innerText = result;
  });
  
  res.addEventListener("click", function () {
    let output = document.querySelector("#result");
    let result = 0;
  
    output.innerText = result;
  });