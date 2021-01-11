nameQuestion = document.getElementById("nameQuestion");
transportation = document.getElementById("transportation");
vehicle1 = document.getElementById("vehicle1");
vehicle2 = document.getElementById("vehicle2");
vehicle3 = document.getElementById("vehicle3");

function nameSubmit () {
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  console.log(fname, lname);
  nameQuestion.innerHTML = "\n";
  nameQuestion.innerHTML += "\t\t<p>" + "Hello " + fname + " " + lname + "</p>";
}

function checkboxSubmit () {
  var vehicle = document.querySelector('.checkbox')
  if (vehicle1.checked) {
    transportation.innerHTML = "\n";
    transportation.innerHTML += "\t\t<p>" + "You take your bike to school." + "</p>";
  }
  else if (vehicle2.checked) {
    transportation.innerHTML = "\n";
    transportation.innerHTML += "\t\t<p>" + "You take a bus to school." + "</p>";
  }
  else if (vehicle3.checked) {
    transportation.innerHTML = "\n";
    transportation.innerHTML += "\t\t<p>" + "You take a car to school." + "</p>";
  }
  else {
    transportation.innerHTML = "\n";
    transportation.innerHTML += "\t\t<p>" + "You don't take transportation to school." + "</p>";
  }
}
