const Water_per_cup = 200;
const Milk_per_cup = 50;
const Sugar_per_cup = 2;
const Tea_per_cup = 1;

function calculateChaiIngredients(numberOfCups) {
    const totalWater = Water_per_cup * numberOfCups;
    const totalMilk = Milk_per_cup * numberOfCups;
    const totalSugar = Sugar_per_cup * numberOfCups;
    const totalTea = Tea_per_cup * numberOfCups;

    const message = 
`To make ${numberOfCups} cup${numberOfCups !== 1 ? 's' : ''} of Kenyan Chai:
- Water: ${totalWater} ml
- Milk: ${totalMilk} ml
- Tea: ${totalTea} tablespoon${totalTea !== 1 ? 's' : ''}
- Sugar: ${totalSugar} teaspoon${totalSugar !== 1 ? 's' : ''}

Enjoy your Chai Bora!`;
    console.log(message);
}

const cupsIput = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberifCups = Number(cupsIput); 

if (Number.isFinite(numberifCups) && numberifCups > 0) {
    calculateChaiIngredients(numberifCups);
} else {
    console.log("Please enter a valid number of cups.");
}