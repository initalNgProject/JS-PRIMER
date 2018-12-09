const Car = require('./Car');
const CarService = require('./services/CarService');
const FancyCar = require('./FancyCar');

const  carService = new CarService("SuperCars","Spain Mangla");

// carService.getSecretDocuments().then((superSecretDocuments) =>{
//     console.log(superSecretDocuments)
// }).catch((err) =>{
//     console.log(err);
// });


const docObservable = carService.getSecretDocuments();

docObservable.subscribe({
  next: (secretDocs) => {
    console.log(secretDocs);
  },
  error: (error) => {
    console.log(error);
  },
  complete: () => {}
})

// const car1 = new Car();
// const car2 = new Car('ford','fiesta',2019);
// const car3 = new Car('fiat', 'punto', 2011);
//  const car4 = new Car('toyota', 'yaris', 2003);
// debugger;
//  const car5 = new FancyCar('mercedess', 'benzz', 2015);
//  car5.displayCarInformation();
// debugger;
// carService.addCar(car1);
// carService.addCar(car2);
// carService.addCar(car3);
// carService.addCar(car4);

//  [a,b,...rest] = carService.getAllCars();
//   console.log(...rest);
//  const allCars = carService.getAllCars();

//  //console.log(...rest);
//   console.log(allCars);

//  const newArray = [];

//  newArray.push(...allCars);

//  console.log(...newArray);

// const {brand, model, year } = car1;

//  const carBrand = car1.brand;
//  const carModel = car1.model;
//  console.log(carBrand);
//  console.log(carModel);

// car1.displayCarInformation();
// carService.addCar(car1);
// carService.addCar(car2);
// console.log('hello world');
carService.displayAllCars();
// name = "filip";

// if(true) {
//  // let   name = "super filip";
// }
// //console.log(name);

// function displayFilip(){
//     console.log('filip');
// }

// //callback functions
// function displayName(callbackFunction) {

//     callbackFunction();

// }

// displayName(displayFilip);
// displayFilip();
// displayFilip();
// displayFilip();
// displayFilip();

// function getName(name) {
//     return  name;
// }

// const getName2 = name => name;


// console.log(getName("filip"));

// console.log(getName2("david"));