class Car{
    constructor(brand = "default brand",model = "default model",year){
        this.brand = brand;
        this.model = model;
        this.year = year || 2000;
    }
    displayCarInformation(){
        console.log(this.brand+ ' ' +this.model+' ' +this.year);
    }
}

module.exports = Car;