const Promise = require('../Promise');
const Observable = require('../Observable');
function forEach(array,callbackFunction){
    for(let  i=0; i<array.length;i++){
        const arrayElement = array[i];

        callbackFunction(arrayElement);
    }
   
}

class CarService {
    constructor(name,country){
        this.name = name;
        this.country = country;
        this.carsToRepair = [];
    }
    addCar(car) {
        this.carsToRepair.push(car);
    }

    customNameFunction() {
       console.log('display custom function');
   }
    displayAllCars() {
        // this.carsToRepair.forEach(function(car){
        //     car.displayCarInformation();
        // });
        const self  = this;
     
        forEach(this.carsToRepair, function(car) {
            self.customNameFunction();
            car.displayCarInformation();
        });
    }
    getAllCars() {
        return this.carsToRepair;
    }
    getSecretDocuments() {
    //    return new Promise((resolve,reject)=> {
    //             setTimeout(function(){
    //                 let secretDocs ='SUPER SECRET DOCUMENTS,DONT SHARE';
    //                 reject(secretDocs);
    //             }, 2000);
    //         });
    return new Observable((observer)=>{
         setTimeout(function(){
            let secretDocs ='SUPER SECRET DOCUMENTS,DONT SHARE';
            observer.next(secretDocs);
        },2000);
      });
    }

}

module.exports = CarService;