"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = require("./app.js");
const weight = 70;
const height = 1.8;
const BMI = (0, app_js_1.calculateBMI)(weight, height);
const category = (0, app_js_1.getBMICategory)(BMI);
console.log(`Your BMI is ${BMI}, which means you are ${category}.`);
