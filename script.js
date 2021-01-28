nameQuestion = document.getElementById("nameQuestion");
transportation = document.getElementById("transportation");
grade = document.getElementById("gradeQuestion");

var nameJSON = {}
var vehicleJSON = {}
var gradeJSON = {} // should i just make one json

function nameSubmit () {
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;

  nameJSON = Object.assign({'fname': fname, 'lname':lname}, nameJSON);
  console.log(nameJSON);
  localStorage.setItem('fname', JSON.stringify(fname));
  localStorage.setItem('lname', JSON.stringify(lname));
  var fnameRetrieved = localStorage.getItem('fname')
  var lnameRetrieved = localStorage.getItem('lname')

  nameQuestion.innerHTML = "\n";
  nameQuestion.innerHTML += "\t\t<p>" + "Hello " + fnameRetrieved + " " + lname + "</p>";
}

function transportationSubmit () {
  var vehicle = document.getElementById('vehicle').checked;

  vehicleJSON = Object.assign({"vehicle": vehicle}, vehicleJSON);
  console.log(vehicleJSON);
  console.log(JSON.stringify(vehicleJSON));
  localStorage.setItem('vehicle', JSON.stringify(vehicle));

  transportation.innerHTML = "\n";
  if (vehicleJSON["vehicle"] == "Bike") {
    transportation.innerHTML += "\t\t<p>" + "You take your bike to school." + "</p>";
  }
  else if (vehicleJSON["vehicle"] == "Bus") {
    transportation.innerHTML += "\t\t<p>" + "You take a bus to school." + "</p>";
  }
  else if (vehicleJSON["vehicle"] == "Car") {
    transportation.innerHTML += "\t\t<p>" + "You take a car to school." + "</p>";
  }
  else {
    transportation.innerHTML += "\t\t<p>" + "You don't take transportation to school." + "</p>";
  }
}

function gradeSubmit () {
  var gradeLevel = document.querySelector('input[name="grade"]:checked').value;

  gradeJSON = Object.assign({"gradeLevel": gradeLevel}, gradeJSON);
  console.log(gradeJSON);
  console.log(JSON.stringify(gradeJSON));
  localStorage.setItem('gradeLevel', JSON.stringify(gradeLevel));

  grade.innerHTML = "\n";
  grade.innerHTML += "\t\t<p>" + "You are in " + gradeLevel + " grade." + "</p>";
}
