var nameQ = document.getElementById('nameQText');
var nameSection = document.getElementById('nameQ');

var gradeQ = document.getElementById('gradeQText');
var gradeSection = document.getElementById('gradeQ');

var transportQ = document.getElementById('transportQText');
var transportSection = document.getElementById('transportQ');

var resultSection = document.getElementById('results');
var pieChart = document.getElementById('pieChart');

var myJSON = {};
var counterJSON = {};
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
      'lname': lname
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
      'vehicle': selected.join(",")
    }, myJSON);

    transportQ.innerHTML = "\n";
    transportQ.innerHTML += "\t\t<h2>" + "Vehicles" + "</h2>";
    transportSection.innerHTML = "\n";
    transportSection.innerHTML += "\t\t<p>" + "Submitted." + "</h2>";

    console.log(myJSON)
    counters(); // Calls counter function
    showResults(); // Shows results function
  }
}
function counters(){
  var nineCounter = parseInt(localStorage.getItem('nineCounter').replace(/[^a-zA-Z0-9]/g, ''));
  var tenCounter = parseInt(localStorage.getItem('tenCounter'.replace(/[^a-zA-Z0-9]/g, '')));
  var elevenCounter = parseInt(localStorage.getItem('elevenCounter').replace(/[^a-zA-Z0-9]/g, ''));
  var twelveCounter = parseInt(localStorage.getItem('twelveCounter').replace(/[^a-zA-Z0-9]/g, ''));

  var multipleVehiclesCounter = parseInt(localStorage.getItem('multipleVehiclesCounter').replace(/[^a-zA-Z0-9]/g, ''));
  var noVehicleCounter = parseInt(localStorage.getItem('noVehicleCounter').replace(/[^a-zA-Z0-9]/g, ''));
  var bikeCounter = parseInt(localStorage.getItem('bikeCounter').replace(/[^a-zA-Z0-9]/g, ''));
  var busCounter = parseInt(localStorage.getItem('busCounter').replace(/[^a-zA-Z0-9]/g, ''));
  var carCounter = parseInt(localStorage.getItem('carCounter').replace(/[^a-zA-Z0-9]/g, ''));

  if (myJSON.gradeLevel == "9th"){
    if (nineCounter == null || isNaN(nineCounter) == true) {
      nineCounter = 0;
      nineCounter++;
    } else {
      nineCounter++;
    }
  } else if (myJSON.gradeLevel == "10th"){
    if (tenCounter == null || isNaN(tenCounter) == true) {
      tenCounter = 0;
      tenCounter++;
    } else {
      tenCounter++;
    }
  } else if (myJSON.gradeLevel == "11th"){
    if (elevenCounter == null || isNaN(elevenCounter) == true) {
      elevenCounter = 0;
      elevenCounter++;
    } else {
      elevenCounter++;
    }
  } else{
    if (twelveCounter == null || isNaN(twelveCounter) == true){
      twelveCounter = 0;
      twelveCounter++;
    } else{
      twelveCounter++;
    }
  }
  if (myJSON.vehicle.length > 5){ // Length of longest singular vehicle is 4 (bike), if its more than 4, its more than one vehicle
    if (multipleVehiclesCounter == null || isNaN(multipleVehiclesCounter) == true) {
      multipleVehiclesCounter = 0;
      multipleVehiclesCounter++;
    } else {
      multipleVehiclesCounter++;
    }
  } else if (myJSON.vehicle.length < 1){// Length less than 1 means no vehicles
    if (noVehicleCounter == null || isNaN(noVehicleCounter) == true) {
      noVehicleCounter = 0;
      noVehicleCounter++;
    } else {
      noVehicleCounter++;
    }
  } else if (myJSON.vehicle=="Bike"){
    if (bikeCounter == null || isNaN(bikeCounter) == true) {
      bikeCounter = 0;
      bikeCounter++;
    } else {
      bikeCounter++;
    }
  } else if (myJSON.vehicle=="Bus"){
    if (busCounter == null || isNaN(busCounter) == true) {
      busCounter = 0;
      busCounter++;
    } else {
      busCounter++;
    }
  } else if (myJSON.vehicle=="Car"){
    if (carCounter == null || isNaN(carCounter) == true) {
      carCounter = 0;
      carCounter++;
    } else {
      carCounter++;
    }
  }

  counterJSON = Object.assign({
    'nineCounter':nineCounter,
    'tenCounter':tenCounter,
    'elevenCounter':elevenCounter,
    'twelveCounter':twelveCounter,
    'multipleVehiclesCounter':multipleVehiclesCounter,
    'noVehicleCounter':noVehicleCounter,
    'bikeCounter':bikeCounter,
    'busCounter':busCounter,
    'carCounter':carCounter
  }, counterJSON);

  console.log(counterJSON)
  localStorage.setItem('nineCounter', JSON.stringify(nineCounter));
  localStorage.setItem('tenCounter', JSON.stringify(tenCounter));
  localStorage.setItem('elevenCounter', JSON.stringify(elevenCounter));
  localStorage.setItem('twelveCounter', JSON.stringify(twelveCounter));
  localStorage.setItem('multipleVehiclesCounter', JSON.stringify(multipleVehiclesCounter));
  localStorage.setItem('noVehicleCounter', JSON.stringify(noVehicleCounter));
  localStorage.setItem('bikeCounter', JSON.stringify(bikeCounter));
  localStorage.setItem('busCounter', JSON.stringify(busCounter));
  localStorage.setItem('carCounter', JSON.stringify(carCounter));
}

function showResults(){
  // retrieving counters from local storage
  var nineRetrieved = parseInt(localStorage.getItem('nineCounter').replace(/[^a-zA-Z0-9]/g, ''));
  var tenRetrieved = parseInt(localStorage.getItem('tenCounter').replace(/[^a-zA-Z0-9]/g, ''));
  var elevenRetrieved = parseInt(localStorage.getItem('elevenCounter').replace(/[^a-zA-Z0-9]/g, ''));
  var twelveRetrieved = parseInt(localStorage.getItem('twelveCounter').replace(/[^a-zA-Z0-9]/g, ''));
  var multipleVehiclesRetrieved = parseInt(localStorage.getItem('multipleVehiclesCounter').replace(/[^a-zA-Z0-9]/g, ''));
  var noVehicleRetrieved = parseInt(localStorage.getItem('noVehicleCounter').replace(/[^a-zA-Z0-9]/g, ''));
  var bikeRetrieved = parseInt(localStorage.getItem('bikeCounter').replace(/[^a-zA-Z0-9]/g, ''));
  var busRetrieved = parseInt(localStorage.getItem('busCounter').replace(/[^a-zA-Z0-9]/g, ''));
  var carRetrieved = parseInt(localStorage.getItem('carCounter').replace(/[^a-zA-Z0-9]/g, ''));

  var gradesArray = [nineRetrieved, tenRetrieved, elevenRetrieved, twelveRetrieved];
  var vehicleArray = [multipleVehiclesRetrieved, noVehicleRetrieved, bikeRetrieved, busRetrieved, carRetrieved];

  resultSection.innerHTML ="\n";
  resultSection.innerHTML +="\t\t<h2>" + "Results." + "</h2>";

  var totalGrades = 0;
  var totalVehicles = 0;
  for (var i = 0; i<gradesArray.length; i++){
    if (isNaN(gradesArray[i]) == false){
      console.log(gradesArray[i]);
      totalGrades += gradesArray[i];
    }
  }
  for (var i = 0; i<vehicleArray.length; i++){
    if (isNaN(vehicleArray[i]) == false){
      totalVehicles += vehicleArray[i];
    }
  }

  var gradePercentage =  0;
  var vehiclePercentage = 0;

  if (myJSON.gradeLevel == "9th"){
    gradePercentage = nineRetrieved / totalGrades;
  } else if (myJSON.gradeLevel == "10th"){
    gradePercentage = tenRetrieved / totalGrades;
  } else if (myJSON.gradeLevel == "11th"){
    gradePercentage = elevenRetrieved / totalGrades;
  } else{
    gradePercentage = twelveRetrieved / totalGrades;
  }
  if (myJSON.vehicle.length > 5){
    vehiclePercentage = multipleVehiclesRetrieved / totalVehicles;
    resultSection.innerHTML += "\t\t<p>" + "You and " + vehiclePercentage * 100 + "% of people take multiple vehicles." + "</p>";
  } else if (myJSON.vehicle.length < 1){
    vehiclePercentage = noVehicleRetrieved / totalVehicles;
    resultSection.innerHTML += "\t\t<p>" + "You and " + vehiclePercentage * 100 + "% of people take no vehicles." + "</p>";
  } else if (myJSON.vehicle=="Bike"){
    vehiclePercentage = bikeRetrieved / totalVehicles;
    resultSection.innerHTML += "\t\t<p>" + "You and " + vehiclePercentage * 100 + "% of people answered " + myJSON.vehicle + "." + "</p>";
  } else if (myJSON.vehicle=="Bus"){
    vehiclePercentage = busRetrieved / totalVehicles;
        resultSection.innerHTML += "\t\t<p>" + "You and " + vehiclePercentage * 100 + "% of people answered " + myJSON.vehicle + "." + "</p>";
  } else if (myJSON.vehicle=="Car"){
    vehiclePercentage = carRetrieved / totalVehicles;
        resultSection.innerHTML += "\t\t<p>" + "You and " + vehiclePercentage * 100 + "% of people answered " + myJSON.vehicle + "." + "</p>";
  }

  resultSection.innerHTML += "\t\t<p>" + "You and " + gradePercentage * 100 + "% of people are in " + myJSON.gradeLevel + " grade." + "</p>";
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
