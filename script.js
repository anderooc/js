var nameQ = document.getElementById("nameQText");
var nameSection = document.getElementById("nameQ");

var gradeQ = document.getElementById("gradeQText");
var gradeSection = document.getElementById("gradeQ");

var transportQ = document.getElementById("transportQText");
var transportSection = document.getElementById("transportQ");
var pieChart = document.getElementById("pieChart");

var myJSON = {};
var nameDone = false;
var gradeDone = false;

function nameSubmit() {
  // Function that runs after submitting name
  // Gets name adds to JSON and verifies question is done
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  if (fname == "" && lname == ""){
    nameQ.innerHTML = "\n";
    nameQ.innerHTML += "\t\t<h2>" + "Please enter a name that isn't just blank and submit again." + "</h2>";
  } else {
    nameQ.innerHTML = "\n";
    nameQ.innerHTML += "\t\t<h2>" + "Name" + "</h2>";
    nameDone = true;

    myJSON = Object.assign({
      'fname': fname,
      'lname':lname
    }, myJSON);

    nameSection.innerHTML = "\n";
    nameSection.innerHTML += "\t\t<p>" + "Hello " + fname + " " + lname + "</p>";
  }
}

function gradeSubmit () {
  var gradeLevel = document.querySelector('input[name="grade"]:checked').value;
  gradeDone = true;

  myJSON = Object.assign({
    'gradeLevel':gradeLevel
  }, myJSON);

  gradeQ.innerHTML = "\n";
  gradeQ.innerHTML += "\t\t<h2>" + "Grades" + "</h2>";
  gradeSection.innerHTML = "\n";
  gradeSection.innerHTML += "\t\t<p>" + "Submitted." + "</p>";
}

function checkboxSubmit () {
  if (nameDone != true || gradeDone != true){
    transportQ.innerHTML = "\n";
    transportQ.innerHTML += "\t\t<h2>" + "Please submit the questions above first." + "</p>";
  }else{
    var selected = new Array();
    var checks = transportSection.getElementsByTagName("INPUT");
    for (var i = 0; i<checks.length; i++){
      if (checks[i].checked){
        selected.push(checks[i].value);
      }
    }
    myJSON = Object.assign({
      "vehicle": selected.join(",")
    }, myJSON);
    console.log(myJSON)
  }


}
  /*
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
  }*/
