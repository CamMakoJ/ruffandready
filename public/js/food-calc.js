function calculateFood() {
  var dogWeight = document.getElementById("dogWeight").value;
  var activityLevel = document.getElementById("activityLevel").value;
  var dogsAge = document.getElementById("dogsAge").value;

  if (system == "Kg") {
    //Metric Math
    var total = Math.round(((dogWeight * activityLevel) * 1000) * dogsAge);
  } else {
    //Imperial Math
    var total = Math.round(((dogWeight * activityLevel) * 16) * dogsAge);
    total = total.toFixed(1);
  }
  document.getElementById("totalFood").style.display = "block";
  document.getElementById("food").innerHTML = total;
  document.getElementById('units').innerText = units;
}

document.getElementById("totalFood").style.display = "none";
document.getElementById("calculate").onclick = function() {
  calculateFood();
};

var system = "Kg"
var systemLabel = "Metric"
var units = "grams"

function checkSystem() {
  if (system == "Kg") {
    system = "lb";
    systemLabel = "Imperial";
    units = "oz"
  } else {
    system = "Kg";
    systemLabel = "Metric";
    units = "grams"
  }
  document.getElementById('systemMeasure').innerText = system;
  document.getElementById('systemLabel').innerText = systemLabel;

  calculateFood();
  return
}


var toggle = document.getElementById("toggle")
toggle.addEventListener("click", checkSystem, false);
