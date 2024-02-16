
const addHouse = document.getElementById("addHouse");
const addFarm = document.getElementById("addFarm");
const addWoodCutter = document.getElementById("addWoodCutter");

const houseCount = document.getElementById("houseCount");
const farmCount = document.getElementById("farmCount");
const woodCutterCount = document.getElementById("woodCutterCount");

addHouse.onclick = function() {
  houseCount.textContent++; // Increment and update directly
};

addFarm.onclick = function() {
  farmCount.textContent++; // Increment and update directly
};

addWoodCutter.onclick = function() {
  woodCutterCount.textContent++; // Increment and update directly
};

  
 
