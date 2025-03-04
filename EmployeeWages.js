//uc1
const isPresent = Math.random() < 0.5 ? "Absent" : "Present";
//uc2
const getDailyWage = () => {
  let empCheck = Math.floor(Math.random() * 3);
  let empHours = 0;
  switch (empCheck) {
    case 1:
      empHours = 4;
      break;
    case 2:
      empHours = 8;
      break;
    default:
      empHours = 0;
  }
  return empHours * 20;
};
//uc3
const getWorkHours = () => {
  let empCheck = Math.floor(Math.random() * 3);
  switch (empCheck) {
    case 1:
      return 4;
    case 2:
      return 8;
    default:
      return 0;
  }
};
//uc4
const calculateMonthlyWage = () => {
  let totalWage = 0;
  for (let i = 0; i < 20; i++) {
    totalWage += getDailyWage();
  }
  return totalWage;
};
//uc5
const calculateWagesTillCondition = () => {
  let totalWage = 0,
    totalHours = 0,
    daysWorked = 0;
  while (totalHours < 160 && daysWorked < 20) {
    let dailyWage = getDailyWage();
    totalWage += dailyWage;
    totalHours += dailyWage / 20;
    daysWorked++;
  }
  return { totalWage, totalHours, daysWorked };
};
//uc6
let dailyWages = [];
const storeDailyWages = () => {
  for (let i = 0; i < 20; i++) {
    dailyWages.push(getDailyWage());
  }
};
//uc7
const dailyWageOperations = () => {
  const totalWage = dailyWages.reduce((total, wage) => total + wage, 0);
  const dayWages = dailyWages.map(
    (wage, index) => `Day ${index + 1}: $${wage}`
  );
  const fullTimeDays = dailyWages.filter((wage) => wage === 160);
  const firstFullTimeDay = dailyWages.find((wage) => wage === 160);
  const allFullTime = dailyWages.every((wage) => wage === 160);
  const anyPartTime = dailyWages.some((wage) => wage === 80);
  const daysWorked = dailyWages.length;

  return {
    totalWage,
    dayWages,
    fullTimeDays,
    firstFullTimeDay,
    allFullTime,
    anyPartTime,
    daysWorked,
  };
};
//uc1
console.log(isPresent);
// uc2
console.log(getDailyWage());
//uc3
console.log(getWorkHours());
//uc4
console.log(calculateMonthlyWage());
//uc5
console.log(calculateWagesTillCondition());
//uc6
storeDailyWages();
console.log(dailyWages);
//uc7
console.log(dailyWageOperations());