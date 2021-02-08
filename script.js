nameQuestion = document.getElementById("nameQuestionText");
nameSection = document.getElementById("nameQuestion");
gradeSection = document.getElementById("gradeQuestion");
transportationSection = document.getElementById("transportationQuestion");
pieChart = document.getElementById("pieChart");

var myJSON = {};
var nameDone = false;
var gradeDone = false;

function nameSubmit() {
  // Function that runs after submitting name
  // Gets name adds to JSON and verifies question is done
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  if (fname == "" && lname == ""){
    nameQuestion.innerHTML = "\n";
    nameQuestion.innerHTML += "\t\t<h2>" + "Please enter a name that isn't just blank and submit again." + "</h2>";
  } else {
    nameQuestion.innerHTML = "\n";
    nameQuestion.innerHTML += "\t\t<h2>" + "Name" + "</h2>";
    var nameDone = true;

    var vehicles = document.querySelectorAll('input[name="' + vehicle + '"]:checked'),values=[];
    Array.prototype.forEach.call(vehicles, function(el) {
          vehicles.push(el.value);
      });

    myJSON = Object.assign({
      'fname': fname,
      'lname':lname,
      'vehicles':vehicles
    }, myJSON);
    console.log(myJSON);

    nameSection.innerHTML = "\n";
    nameSection.innerHTML += "\t\t<p>" + "Hello " + fname + " " + lname + "</p>";
  }
}

function gradeSubmit () {
  var gradeLevel = document.querySelector('input[name="grade"]:checked').value;
  var gradeDone = true;

  myJSON = Object.assign({
    'gradeLevel':gradeLevel
  }, myJSON);
  
  gradeSection.innerHTML = "\n";
  gradeSection.innerHTML += "\t\t<p>" + "Submitted." + "</p>";
}

function checkboxSubmit () {
  var vehicle = document.querySelector('vehicle').checked;
  myJSON = Object.assign({"vehicle": vehicle}, myJSON);

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
