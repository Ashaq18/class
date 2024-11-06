class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    getDescription() {
      return `${this.year} ${this.make} ${this.model}`;
    }
  }
  
  // Creating two instances of the Car class
  const car1 = new Car('Toyota', 'Camry', 2020);
  const car2 = new Car('Honda', 'Civic', 2022);
  
  // Logging their descriptions
  console.log(car1.getDescription()); // Output: "2020 Toyota Camry"
  console.log(car2.getDescription()); // Output: "2022 Honda Civic"
  