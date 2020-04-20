function getName() {
  const person = prompt(
    "It's better inter something include 'Magic' ",
    "Magic"
  );
  return person;
}
let test = getName();

//alert(test);

function switchCase() {
  let answer = "";
  //alert(test);
  switch (test.includes("Magic")) {
    case true:
      answer = "Bibidi babibi boo";
      break;
    default:
      answer = "It's a Normal text";
  }
  return answer;
}

let sCase = switchCase();

//alert(sCase);

if (sCase != "") {
  window.onload = function what() {
    document.getElementById("content").innerHTML = sCase;
  };
}
