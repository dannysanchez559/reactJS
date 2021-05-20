// Here is a random take-home challenge:
// Create a mini Car Dealership using classes 
// You need to extend a class at least once
// Use getter and setters
// Incorporate destructuring arrays and objects and template literals
// And outside of classes try at least one arrow function that does something
// You're free to be as creative as you like
// Please send over your work via DM on Slack. You can use a GitHub repo or you can 
// send a snippet. Up to you! Have fun! I can't wait to see what you do :D Thank you!


class CarDealershipCar {

    constructor(year, make, model, inventory) {
        this.year = year;
        this.make = make;
        this.model = model;
        this.inventory = inventory;

    }

    get getCarInfo() {
        return this;
    }

    get getCarInventoryAmount() {
        return this.inventory;
    }

    set changeInventory(inventory) {
        this.inventory = inventory;
    }
}

// add new cars
let firstCar = new CarDealershipCar(
    2017,
    "Ford",
    "Bronco",
    2
);

let secondCar = new CarDealershipCar(
    2020,
    "Tesla",
    "Model 3",
    5
);

class AlternateCarColors extends CarDealershipCar {
    constructor(year, make, model, inventory, color) {
        super(year, make, model, inventory); // inherit arguments from parent class

        this.color = color;
    }
}

let firstCarInRed = new AlternateCarColors(
    2019,
    "Ford",
    "Bronco",
    1,
    "Red"
);

console.log(firstCar.getCarInfo);
console.log(firstCarInRed);

// destructuring an object / array
const colors = {
    one: "red",
    two: "blue",
    three: "green",
    extra: {
        extraOne: "teal",
        extraTwo: "violet"
    }
}

const getColors = color => {
    const {one, two, three, extra} = color;
    const {extraOne, extraTwo} = extra;

    return `all colors: ${one}, ${two}, ${three}, ${extraOne}, ${extraTwo}, `
}

console.log(getColors(colors));

const colorArr = ["black", "white", "grey"];

const getColorsFromArray = colorArray => {
    const [one, two, three] = colorArray;

    return `All colors from array: ${one}, ${two}, ${three}, `
}

console.log(getColorsFromArray(colorArr));

