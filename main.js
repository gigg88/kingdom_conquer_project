// Initialize the variable (not used in this example)
// let points = 0;

// Function to update the food count
function updatefarmNumber() {
    // Get the current food count
    const farmNumber = parseInt(document.getElementById("farmNumber").textContent);
  
    // Increment the food count
    const newfarmNumber = farmNumber + 1;
  
    // Update the food count text
    document.getElementById("farmNumber").textContent = newfarmNumber;
  }
  
  // Attach click event listener to the button
  const addFarmButton = document.getElementById("addfarm");
  addFarmButton.addEventListener("click", updatefarmNumber);

  
  let foodcount = 0; // Initialize food count variable

  // Function to update food count when newFarmNumber is 1
  function updateFoodCount() {
    const newfarmNumber = 1; // Assuming newFarmNumber is always 1
    if (newfarmNumber === 1) {
      foodcount += 100;
      document.getElementById("foodcount").textContent = foodcount; // Update food count display
    }
  }
  
 