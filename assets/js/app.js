class Car {
  constructor(color, manufacturer) {
    this.color = color;
    this.manufacturer = manufacturer;
  }
}

class RaceCar extends Car {
  constructor(numberofSeats, manufacturer) {
    super(null, manufacturer);
    this.numberofSeats = numberofSeats;
  }
}

const car1 = new Car("Red", "Audi");
const racecar1 = new RaceCar(5, "BMW");

function updateValues() {
  const carColor = document.getElementById("carColor").value;
  const carManufacturer = document.getElementById("carManufacturer").value;
  const racecarSeats = document.getElementById("racecarSeats").value;
  const racecarManufacturer = document.getElementById(
    "racecarManufacturer"
  ).value;

  car1.color = carColor;
  car1.manufacturer = carManufacturer;
  racecar1.numberofSeats = racecarSeats;
  racecar1.manufacturer = racecarManufacturer;

  document.body.innerHTML = `
      <div class="car">
          <p>Car 1: Color: ${car1.color}, Manufacturer: ${car1.manufacturer}</p>
      </div>
      <div class="racecar">
          <p>Race Car 1: Number of Seats: ${racecar1.numberofSeats}, Manufacturer: ${racecar1.manufacturer}</p>
      </div>
  `;
}
