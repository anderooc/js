// Question text and input area
var nameQ = document.getElementById('nameQText');
var nameSection = document.getElementById('nameQ');

// Question text and input area
var gradeQ = document.getElementById('gradeQText');
var gradeSection = document.getElementById('gradeQ');

// Question text, input area, and the question's submit button
var transportQ = document.getElementById('transportQText');
var transportSection = document.getElementById('transportQ');
var transportSubmit = document.getElementById('transportSubmit');

var resultSection = document.getElementById('results');
var pieChart = document.getElementById('piechart');

var myJSON = {};
var counterJSON = {};
var nameDone = false;
var gradeDone = false;

function nameSubmit() {
  // Function that runs after submitting name
  // Gets name added to JSON and verifies question is done
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  // Checks to make sure at least one box has been filled
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
  // Function that runs after submitting grade
  // Gets grade added to JSON and verifies question is done
  // Radio button has to have at least one be clicked
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
  // Last input that runs after submitting checkbox
  // First checks if previous questions have been finished
  // Assigns to JSON and runs the counters, showResults, and drawChart functions

  // Checks if questions above are finished so that the values are there
  if (nameDone != true || gradeDone != true){
    transportQ.innerHTML = "\n";
    transportQ.innerHTML += "\t\t<h2>" + "Please submit the questions above first." + "</p>";
  } else {
    // Instead of using .checked, this allows the user to select multiple boxes or none at all
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
    transportSubmit.innerHTML = "\n";

    console.log(myJSON)
    counters(); // Calls counter function
    showResults(); // Calls show results function

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart); // Calls pie chart function, gets rid of undefined error
  }

}
function counters(){
  // This function deals with the counters and local storage
  // The counters are altered according to the survey's results and put back into storage

  // Initalize and get counters
  var nineCounter = localStorage.getItem('nineCounter');
  var tenCounter = localStorage.getItem('tenCounter');
  var elevenCounter = localStorage.getItem('elevenCounter');
  var twelveCounter = localStorage.getItem('twelveCounter');

  var multipleVehiclesCounter = localStorage.getItem('multipleVehiclesCounter');
  var noVehicleCounter = localStorage.getItem('noVehicleCounter');
  var bikeCounter = localStorage.getItem('bikeCounter');
  var busCounter = localStorage.getItem('busCounter');
  var carCounter = localStorage.getItem('carCounter');

  // Above variables start as null or NaN, convert to 0
  if (nineCounter == null || isNaN(nineCounter) == true) {
    nineCounter = 0;
  }
  if (tenCounter == null || isNaN(tenCounter) == true) {
    tenCounter = 0;
  }
  if (elevenCounter == null || isNaN(elevenCounter) == true) {
    elevenCounter = 0;
  }
  if (twelveCounter == null || isNaN(twelveCounter) == true){
    twelveCounter = 0;
  }
  if (multipleVehiclesCounter == null || isNaN(multipleVehiclesCounter) == true) {
    multipleVehiclesCounter = 0;
  }
  if (noVehicleCounter == null || isNaN(noVehicleCounter) == true) {
    noVehicleCounter = 0;
  }
  if (bikeCounter == null || isNaN(bikeCounter) == true) {
    bikeCounter = 0;
  }
  if (busCounter == null || isNaN(busCounter) == true) {
    busCounter = 0;
  }
  if (carCounter == null || isNaN(carCounter) == true) {
    carCounter = 0;
  }

  // If a survey option isn't clicked on one go through, apostrophes and slashes are added to that value
  // Removes all special symbols from the answers each time
  if (typeof nineCounter != "number"){
    nineCounter = parseInt(nineCounter.replace(/[^a-zA-Z0-9]/g, ''));
  }
  if (typeof tenCounter != "number"){
    tenCounter = parseInt(tenCounter.replace(/[^a-zA-Z0-9]/g, ''));
  }
  if (typeof elevenCounter != "number"){
    elevenCounter = parseInt(elevenCounter.replace(/[^a-zA-Z0-9]/g, ''));
  }
  if (typeof twelveCounter != "number"){
    twelveCounter = parseInt(twelveCounter.replace(/[^a-zA-Z0-9]/g, ''));
  }

  if (typeof multipleVehiclesCounter != "number"){
    multipleVehiclesCounter = parseInt(multipleVehiclesCounter.replace(/[^a-zA-Z0-9]/g, ''));
  }
  if (typeof noVehicleCounter != "number"){
    noVehicleCounter = parseInt(noVehicleCounter.replace(/[^a-zA-Z0-9]/g, ''));
  }
  if (typeof bikeCounter != "number"){
    bikeCounter = parseInt(bikeCounter.replace(/[^a-zA-Z0-9]/g, ''));
  }
  if (typeof busCounter != "number"){
    busCounter = parseInt(busCounter.replace(/[^a-zA-Z0-9]/g, ''));
  }
  if (typeof carCounter != "number"){
    carCounter = parseInt(carCounter.replace(/[^a-zA-Z0-9]/g, ''));
  }

  // Increases counters
  if (myJSON.gradeLevel == "9th"){
    nineCounter++;
  } else if (myJSON.gradeLevel == "10th"){
    tenCounter++;

  } else if (myJSON.gradeLevel == "11th"){
    elevenCounter++;

  } else{
    twelveCounter++;
  }


  if (myJSON.vehicle.length > 5){ // Length of longest singular vehicle is 4 (bike), if its more than 4, its more than one vehicle
      multipleVehiclesCounter++;
  } else if (myJSON.vehicle.length < 1){// Length less than 1 means no vehicles
    noVehicleCounter++;
  } else if (myJSON.vehicle=="Bike"){
    bikeCounter++;
  } else if (myJSON.vehicle=="Bus"){
    busCounter++;
  } else if (myJSON.vehicle=="Car"){
    carCounter++;
  }

  // New JSON
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
  // This functions takes the results from the counters and calculates some statistics with them

  // Counters are retrieved and made into integers
  var nineRetrieved = parseInt(localStorage.getItem('nineCounter').replace(/[^a-zA-Z0-9]/g, ''));
  var tenRetrieved = parseInt(localStorage.getItem('tenCounter').replace(/[^a-zA-Z0-9]/g, ''));
  var elevenRetrieved = parseInt(localStorage.getItem('elevenCounter').replace(/[^a-zA-Z0-9]/g, ''));
  var twelveRetrieved = parseInt(localStorage.getItem('twelveCounter').replace(/[^a-zA-Z0-9]/g, ''));
  var multipleVehiclesRetrieved = parseInt(localStorage.getItem('multipleVehiclesCounter').replace(/[^a-zA-Z0-9]/g, ''));
  var noVehicleRetrieved = parseInt(localStorage.getItem('noVehicleCounter').replace(/[^a-zA-Z0-9]/g, ''));
  var bikeRetrieved = parseInt(localStorage.getItem('bikeCounter').replace(/[^a-zA-Z0-9]/g, ''));
  var busRetrieved = parseInt(localStorage.getItem('busCounter').replace(/[^a-zA-Z0-9]/g, ''));
  var carRetrieved = parseInt(localStorage.getItem('carCounter').replace(/[^a-zA-Z0-9]/g, ''));

  // Arrays are made for the for loops below
  var gradesArray = [nineRetrieved, tenRetrieved, elevenRetrieved, twelveRetrieved];
  var vehicleArray = [["multiple vehicles", multipleVehiclesRetrieved], ["no vehicles", noVehicleRetrieved], ["bike", bikeRetrieved], ["bus", busRetrieved], ["car", carRetrieved]];

  resultSection.innerHTML ="\n";
  resultSection.innerHTML +="\t\t<h2>" + "Results." + "</h2>";

  // Initializes sums
  var totalGrades = 0;
  var totalVehicles = 0;

  // Gets the total amount of submissions across all surveys recorded
  for (var i = 0; i<gradesArray.length; i++){
    if (gradesArray[i] != null && isNaN(gradesArray[i]) == false){
      totalGrades += gradesArray[i];
    }
  }
  for (var i = 0; i<vehicleArray.length; i++){
    if (vehicleArray[i][1] != null && isNaN(vehicleArray[i][1]) == false){
      totalVehicles += vehicleArray[i][1];
    }
  }

  var gradePercentage =  0;
  var vehiclePercentage = 0;

  // Gets percentage of people in the user's grade out of total
  if (myJSON.gradeLevel == "9th"){
    gradePercentage = nineRetrieved / totalGrades;
  } else if (myJSON.gradeLevel == "10th"){
    gradePercentage = tenRetrieved / totalGrades;
  } else if (myJSON.gradeLevel == "11th"){
    gradePercentage = elevenRetrieved / totalGrades;
  } else{
    gradePercentage = twelveRetrieved / totalGrades;
  }

  // Gets percentage of people who also submitted the user's vehicle out of total
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

function drawChart() {
  // This function draws the interactable pie chart to display the different vehicles
  var multipleVehiclesRetrieved = parseInt(localStorage.getItem('multipleVehiclesCounter').replace(/[^a-zA-Z0-9]/g, ''));
  var noVehicleRetrieved = parseInt(localStorage.getItem('noVehicleCounter').replace(/[^a-zA-Z0-9]/g, ''));
  var bikeRetrieved = parseInt(localStorage.getItem('bikeCounter').replace(/[^a-zA-Z0-9]/g, ''));
  var busRetrieved = parseInt(localStorage.getItem('busCounter').replace(/[^a-zA-Z0-9]/g, ''));
  var carRetrieved = parseInt(localStorage.getItem('carCounter').replace(/[^a-zA-Z0-9]/g, ''));

  // Clicking on the pie chart zooms in on each respective category
  // If a category is 0, it is not displayed
  var data = google.visualization.arrayToDataTable([
    ['Vehicle', 'Number'],
    ['Multiple Vehicles', multipleVehiclesRetrieved],
    ['No Vehicles', noVehicleRetrieved],
    ['Bikes',  bikeRetrieved],
    ['Buses', busRetrieved],
    ['Cars', carRetrieved]
  ]);

  var options = {
  title: 'Vehicle Breakdown'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}
