function car() {
  var inputElement = document.getElementById("inputString");
  var inputNumElement = document.getElementById("inputNum");
  var resultElement = document.getElementById("result");

  class Car {
    constructor(color, manufacturer) {
      this.color = color;
      this.manufacturer = manufacturer;
    }
  }

  class RaceCar extends Car {
    constructor(numberOfSeats, manufacturer) {
      super("Red", manufacturer);
      this.numberOfSeats = numberOfSeats;
    }
  }

  // Check if the input element value is empty
  if (inputElement.value.trim() === "" || inputNumElement.value.trim() === "") {
    resultElement.innerHTML =
      "Error: Please enter a valid color and manufacturer.";
    return;
  }

  const car1 = new Car(inputElement.value, inputNumElement.value);
  const raceCar1 = new RaceCar(2, "Audi");

  console.log(car1);
  console.log(raceCar1);

  // Display the result in the resultElement
  resultElement.innerHTML = `Car: ${car1.color} ${car1.manufacturer}<br>Race Car: ${raceCar1.color} ${raceCar1.manufacturer} ${raceCar1.numberOfSeats} seats`;
}
