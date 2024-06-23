"use strict";
// bmiCalculator.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBMICategory = exports.calculateBMI = void 0;
function calculateBMI(weight, height) {
    if (height <= 0) {
        throw new Error("Height must be a positive number");
    }
    return weight / (height * height);
}
exports.calculateBMI = calculateBMI;
function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    }
    else if (bmi < 24.9) {
        return "Normal weight";
    }
    else if (bmi < 29.9) {
        return "Overweight";
    }
    else {
        return "Obesity";
    }
}
exports.getBMICategory = getBMICategory;
