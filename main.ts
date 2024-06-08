import { calculateBMI , getBMICategory } from "./app.js";

const weight = 70;
const height = 1.8;

const BMI = calculateBMI (weight, height);
const category = getBMICategory(BMI);

console.log(`Your BMI is ${BMI}, which means you are ${category}.`);