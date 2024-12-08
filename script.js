// Select elements
const redLight = document.getElementById("red-light");
const yellowLight = document.getElementById("yellow-light");
const greenLight = document.getElementById("green-light");

const redButton = document.getElementById("red-btn");
const yellowButton = document.getElementById("yellow-btn");
const greenButton = document.getElementById("green-btn");

// Helper function to turn off all lights
function resetLights() {
  redLight.style.opacity = "0.1";
  yellowLight.style.opacity = "0.1";
  greenLight.style.opacity = "0.1";
}

// Function to turn on a specific light
function turnOnLight(light) {
  resetLights();
  light.style.opacity = "5";
}

// Button event listeners
redButton.addEventListener("click", () => {
  turnOnLight(redLight);
  setTimeout(() => autoCycle(), 5000);
});

yellowButton.addEventListener("click", () => {
  turnOnLight(yellowLight);
  setTimeout(() => autoCycle(), 2000);
});

greenButton.addEventListener("click", () => {
  turnOnLight(greenLight);
  setTimeout(() => autoCycle(), 5000);
});

//Auto-cycle through lights
function autoCycle() {
  turnOnLight(redLight);
  setTimeout(() => {
    turnOnLight(yellowLight);
    setTimeout(() => {
      turnOnLight(greenLight);
      setTimeout(() => autoCycle(), 5000);
    }, 2000);
  }, 5000);
}

// Start auto-cycle on page load
autoCycle();
