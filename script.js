nameQuestion = document.getElementById("nameQuestion");
transportation = document.getElementById("transportation");
grade = document.getElementById("gradeQuestion")
var myJSON = {}
function nameSubmit () {
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  myJSON = Object.assign({"fname": fname, "lname":lname}, myJSON);
  console.log(myJSON);
  console.log(JSON.stringify(myJSON));
  console.log(JSON.parse(JSON.stringify(myJSON)));
  nameQuestion.innerHTML = "\n";
  nameQuestion.innerHTML += "\t\t<p>" + "Hello " + fname + " " + lname + "</p>";
}

function checkboxSubmit () {
  var vehicle = document.querySelector('vehicle').checked;
  myJSON = Object.assign({"vehicle": vehicle}, myJSON);
  console.log(myJSON)
  console.log(JSON.stringify(myJSON));
  console.log(JSON.parse(JSON.stringify(myJSON)));
  transportation.innerHTML = "\n";
  if (vehicle == "Bike") {
    transportation.innerHTML += "\t\t<p>" + "You take your bike to school." + "</p>";
  }
  else if (vehicle == "Bus") {
    transportation.innerHTML += "\t\t<p>" + "You take a bus to school." + "</p>";
  }
  else if (vehicle == "Car") {
    transportation.innerHTML += "\t\t<p>" + "You take a car to school." + "</p>";
  }
  else {
    transportation.innerHTML += "\t\t<p>" + "You don't take transportation to school." + "</p>";
  }
}

function gradeSubmit () {
  var gradeLevel = document.querySelector('input[name="grade"]:checked').value;
  myJSON = Object.assign({"gradeLevel": gradeLevel}, myJSON);
  console.log(myJSON);
  console.log(JSON.stringify(myJSON));
  console.log(JSON.parse(JSON.stringify(myJSON)));
  grade.innerHTML = "\n";
  grade.innerHTML += "\t\t<p>" + "You are in " + gradeLevel + " grade." + "</p>";
}
