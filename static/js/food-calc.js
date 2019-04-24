function calculateFood() {
  var dogWeight = document.getElementById("dogWeight").value;
  var activityLevel = document.getElementById("activityLevel").value;
  var dogsAge = document.getElementById("dogsAge").value;



  var total = Math.round(((dogWeight * activityLevel) * 1000) * dogsAge);


  document.getElementById("totalFood").style.display = "block";
  document.getElementById("food").innerHTML = total;
}

document.getElementById("totalFood").style.display = "none";


document.getElementById("calculate").onclick = function() {
  calculateFood();
};
