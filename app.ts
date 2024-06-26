// bmiCalculator.ts

export function calculateBMI(weight: number, height: number): number {
    if (height <= 0) {
      throw new Error("Height must be a positive number");
    }
    return weight / (height * height);
  }
  
  export function getBMICategory(bmi: number): string {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi < 24.9) {
      return "Normal weight";
    } else if (bmi < 29.9) {
      return "Overweight";
    } else {
      return "Obesity";
    }
  }
  