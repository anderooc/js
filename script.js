mainSurvey = document.getElementById("survey");
pieChart = document.getElementById("pieChart");

function submitSurvey() {
  // Function that runs after clicking submit button
  // Gets name, grade level, and vehicles, then puts them in JSON
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;

  var gradeLevel = document.querySelector('input[name="grade"]:checked').value;

  var vehicles = document.querySelectorAll('input[name="' + vehicle + '"]:checked'),values=[];
  Array.prototype.forEach.call(vehicles, function(el) {
        vehicles.push(el.value);
    });

  myJSON = Object.assign({
    'fname': fname,
    'lname':lname,
    'gradeLevel':gradeLevel,
    'vehicles':vehicles
  }, myJSON);
  console.log(myJSON);


}


/* if (nameCheck == 1 && vehicleCheck == 1 && gradeCheck == 1){
  var vehicleRetrieved = localStorage.getItem('vehicle');
  var gradeRetrieved = localStorage.getItem('gradeLevel');

  if (vehicleRetrieved == "Bike") {
    transportation.innerHTML += "\t\t<p>" + "You take your bike to school." + "</p>";
  }
  else if (vehicleRetrieved == "Bus") {
    transportation.innerHTML += "\t\t<p>" + "You take a bus to school." + "</p>";
  }
  else if (vehicleRetrieved == "Car") {
    transportation.innerHTML += "\t\t<p>" + "You take a car to school." + "</p>";
  }
  else {
    transportation.innerHTML += "\t\t<p>" + "You don't take transportation to school." + "</p>";
  }
  grade.innerHTML += "\t\t<p>" + "You are in " + gradeLevel + " grade." + "</p>";
} */
