nameQuestion = document.getElementById("nameQuestion");
console.log(nameQuestion);


function myClick () {
  console.log("test function");
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  console.log(fname, lname);
  nameQuestion.innerHTML = "\n";
  nameQuestion.innerHTML += "\t\t<h1>Hello <span id="fname"><span id="lname"></h1>\n"
  // Notice mixing of quotation marks, just like in Python.
  nameQuestion.innerHTML += "\t\t<img src='default.png' />\n";
  // Notice here that we are appending the values of the variables.
  nameQuestion.innerHTML += "\t\t<p>" + fname + " " + lname + "</p>\n";
}
