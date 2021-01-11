nameQuestion = document.getElementById("nameQuestion");
console.log(nameQuestion);


function myClick () {
  console.log("test function");
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  console.log(fname, lname);
  nameQuestion.innerHTML = "\n";
  nameQuestion.innerHTML += "\t\t<p>" + "Hello" + "</p>\n";
  nameQuestion.innerHTML += "\t\t<p>" + fname + " " + lname + "</p>\n";
}
