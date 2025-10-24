function calculateBMI(weight: number, height: number): void {
  if (weight <= 0 || height <= 0) {
    console.log("Invalid input");
    return;
  }

  const bmi = weight / (height * height);
  const roundedBMI = Math.round(bmi * 100) / 100;

  console.log(`Rounded BMI: ${roundedBMI}`);

  let category: string;

  if (roundedBMI < 18.5) {
    category = "Underweight";
  } else if (roundedBMI >= 18.5 && roundedBMI <= 24.9) {
    category = "Normal weight";
  } else if (roundedBMI >= 25 && roundedBMI <= 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  console.log(`Category: ${category}`);
}

calculateBMI(70, 1.75); // BMI: 22.86, Category: Normal weight
calculateBMI(45, 1.65); // BMI: 16.53, Category: Underweight
calculateBMI(95, 1.6); // BMI: 37.11, Category: Obese
calculateBMI(-60, 1.8); // Invalid input
